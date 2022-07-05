import { useRouter } from "vue-router";
import { ref } from "vue";
import { db, storage } from "@/firebase";
import {
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal.vue";
export default function useTeachers() {
  const router = useRouter();
  const errors = ref("");
  const teacherColRef = collection(db, "teachers");
  const loading = ref(0);
  const teacher = ref([]);
  const teachers = ref([]);
  const deleteArray = ref([]);
  const chks = ref([]);
  const chkAll = ref(false);

  const getImage = async (path) => {
    const starsRef = refStorage(storage, path);
    let link;
    await getDownloadURL(starsRef)
      .then((url) => {
        link = url;
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            errors.value = "File doesn't exist";
            break;
          case "storage/unauthorized":
            errors.value = "User doesn't have permission to access the object";
            break;
          case "storage/canceled":
            errors.value = "ser canceled the upload";
            break;
          case "storage/unknown":
            errors.value =
              "Unknown error occurred, inspect the server response";
            break;
          default:
            errors.value = "errors to get image";
            break;
        }
      });
    return link;
  };

  const getTeachers = async () => {
    loading.value = 1;
    teachers.value = [];
    chks.value = [];
    const teacherSnapshot = await getDocs(teacherColRef).catch((err) => {
      errors.value = err.message;
    });
    teacherSnapshot.forEach((doc) => {
      let teacher = doc.data();
      teacher.id = doc.id;
      teachers.value.push(teacher);
      chks.value.push({
        id: teacher.id,
        image: teacher.image,
        value: false,
      });
    });
    checkAll(false);
    loading.value = 0;
  };

  const createTeacher = async (teacher) => {
    loading.value = 1;
    errors.value = "";
    teacher.image = new File(
      [teacher.image],
      `${new Date().getTime()}_${teacher.image.name}`
    );
    const storageRef = refStorage(storage, `teacher/${teacher.image.name}`);

    await uploadBytes(storageRef, teacher.image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    await getImage(`teacher/${teacher.image.name}`).then((url) => {
      teacher.url = url;
    });

    await addDoc(teacherColRef, {
      firstname: teacher.firstname,
      lastname: teacher.lastname,
      email: teacher.email,
      phone: teacher.phone,
      enterDate: teacher.enterDate,
      diploma: teacher.diploma,
      image: teacher.url,
    }).catch((err) => {
      errors.value = err.message;
      loading.value = 0;
    });
    loading.value = 0;
    router.push({ name: "admin.teacher.index" });
  };

  const toogleDeleteArray = async (index) => {
    chks.value[index].value
      ? deleteArray.value.push({
          id: chks.value[index].id,
          image: chks.value[index].image,
        })
      : deleteArray.value.splice(index, 1);
  };

  const checkAll = async (ch = true) => {
    if (!ch) {
      for (const item in chks.value) {
        chks.value[item].value = false;
      }
      deleteArray.value = [];
    } else if (chkAll.value) {
      for (const item in chks.value) {
        chks.value[item].value = true;
        deleteArray.value.push(chks.value[item].id);
      }
    } else {
      for (const item in chks.value) {
        chks.value[item].value = false;
      }
      deleteArray.value = [];
    }
  };

  const deleteTeacher = async () => {
    if (deleteArray.value.length != 0) {
      const { reveal, onConfirm } = createConfirmDialog(ConfirmDeleteModal, {
        question:
          "Are you sure you want to delete its item(s)? All data will be permanently deleted. This action cannot be undone.",
      });
      onConfirm(async () => {
        for (const index in deleteArray.value) {
          const desertRef = refStorage(storage, deleteArray.value[index].image);
          await deleteObject(desertRef)
            .then(() => {
              console.log("Deleted file!");
            })
            .catch((error) => {
              errors.value = error.message;
            });

          await deleteDoc(
            doc(db, "teachers", deleteArray.value[index].id)
          ).catch((err) => {
            errors.value = err.message;
          });
        }
        getTeachers();
      });
      reveal();
    }
  };

  const getTeacher = async (id) => {
    loading.value = 1;
    const ref = doc(db, "teachers", id);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      teacher.value = docSnap.data();
    } else {
      errors.value = "No such document!";
    }
    loading.value = 0;
  };

  const updateTeacher = async (id) => {
    loading.value = 1;
    errors.value = "";
    const ref = doc(db, "teachers", id);
    if (teacher.value.newImage) {
      const desertRef = refStorage(storage, teacher.value.image);
      await deleteObject(desertRef)
        .then(() => {
          console.log("Deleted old file!");
        })
        .catch((error) => {
          errors.value = error.message;
        });

      teacher.value.image = new File(
        [teacher.value.newImage],
        `${new Date().getTime()}_${teacher.value.newImage.name}`
      );
      const storageRef = refStorage(
        storage,
        `teacher/${teacher.value.image.name}`
      );

      await uploadBytes(storageRef, teacher.value.image).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });

      await getImage(`teacher/${teacher.value.image.name}`).then((url) => {
        teacher.value.url = url;
      });

      await updateDoc(ref, {
        firstname: teacher.value.firstname,
        lastname: teacher.value.lastname,
        email: teacher.value.email,
        phone: teacher.value.phone,
        enterDate: teacher.value.enterDate,
        diploma: teacher.value.diploma,
        image: teacher.value.url,
      }).catch((err) => {
        errors.value = err.message;
      });
    } else {
      await updateDoc(ref, {
        firstname: teacher.value.firstname,
        lastname: teacher.value.lastname,
        email: teacher.value.email,
        phone: teacher.value.phone,
        enterDate: teacher.value.enterDate,
        diploma: teacher.value.diploma,
      }).catch((err) => {
        errors.value = err.message;
      });
    }
    router.push({ name: "admin.teacher.index" });
    loading.value = 0;
  };

  const cleanErrors = () => {
    errors.value = "";
  };
  return {
    updateTeacher,
    getTeacher,
    teacher,
    deleteTeacher,
    toogleDeleteArray,
    checkAll,
    getTeachers,
    deleteArray,
    chks,
    chkAll,
    teachers,
    loading,
    errors,
    createTeacher,
    cleanErrors,
  };
}

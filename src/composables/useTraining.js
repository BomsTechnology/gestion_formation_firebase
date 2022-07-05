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
  query,
  where,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal.vue";
import ConfirmRegistrationModal from "@/components/ConfirmRegistrationModal.vue";
export default function useTrainings() {
  const router = useRouter();
  const errors = ref("");
  const trainingColRef = collection(db, "trainings");
  const loading = ref(0);
  const training = ref([]);
  const trainings = ref([]);
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

  const getTrainings = async () => {
    loading.value = 1;
    trainings.value = [];
    chks.value = [];
    const trainingSnapshot = await getDocs(trainingColRef).catch((err) => {
      errors.value = err.message;
    });
    trainingSnapshot.forEach((doc) => {
      let training = doc.data();
      training.id = doc.id;
      trainings.value.push(training);
      chks.value.push({
        id: training.id,
        image: training.image,
        value: false,
      });
    });
    checkAll(false);
    loading.value = 0;
  };

  const createTraining = async (training) => {
    loading.value = 1;
    errors.value = "";
    training.image = new File(
      [training.image],
      `${new Date().getTime()}_${training.image.name}`
    );
    const storageRef = refStorage(storage, `training/${training.image.name}`);

    await uploadBytes(storageRef, training.image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    await getImage(`training/${training.image.name}`).then((url) => {
      training.url = url;
    });

    await addDoc(trainingColRef, {
      name: training.name,
      price: training.price,
      day: training.day,
      description: training.description,
      startHour: training.startHour,
      endHour: training.endHour,
      category: training.category,
      teacher: training.teacher,
      image: training.url,
    }).catch((err) => {
      errors.value = err.message;
      loading.value = 0;
    });
    loading.value = 0;
    router.push({ name: "admin.training.index" });
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

  const deleteTraining = async () => {
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
            doc(db, "trainings", deleteArray.value[index].id)
          ).catch((err) => {
            errors.value = err.message;
          });
        }
        getTrainings();
      });
      reveal();
    }
  };

  const getTraining = async (id) => {
    loading.value = 1;
    const ref = doc(db, "trainings", id);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      training.value = docSnap.data();
    } else {
      errors.value = "No such document!";
    }
    loading.value = 0;
  };

  const updateTraining = async (id) => {
    loading.value = 1;
    errors.value = "";
    const ref = doc(db, "trainings", id);
    if (training.value.newImage) {
      const desertRef = refStorage(storage, training.value.image);
      await deleteObject(desertRef)
        .then(() => {
          console.log("Deleted old file!");
        })
        .catch((error) => {
          errors.value = error.message;
        });

      training.value.image = new File(
        [training.value.newImage],
        `${new Date().getTime()}_${training.value.newImage.name}`
      );
      const storageRef = refStorage(
        storage,
        `training/${training.value.image.name}`
      );

      await uploadBytes(storageRef, training.value.image).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });

      await getImage(`training/${training.value.image.name}`).then((url) => {
        training.value.url = url;
      });

      await updateDoc(ref, {
        name: training.value.name,
        price: training.value.price,
        day: training.value.day,
        description: training.value.description,
        startHour: training.value.startHour,
        endHour: training.value.endHour,
        category: training.value.category,
        teacher: training.value.teacher,
        image: training.value.url,
      }).catch((err) => {
        errors.value = err.message;
      });
    } else {
      await updateDoc(ref, {
        name: training.value.name,
        price: training.value.price,
        day: training.value.day,
        description: training.value.description,
        startHour: training.value.startHour,
        endHour: training.value.endHour,
        teacher: training.value.teacher,
        category: training.value.category,
      }).catch((err) => {
        errors.value = err.message;
      });
    }
    router.push({ name: "admin.training.index" });
    loading.value = 0;
  };

  const getTrainingByCategory = async (id) => {
    loading.value = 1;
    trainings.value = [];
    const ref = collection(db, "trainings");

    const q = query(ref, where("category.id", "==", id));
    const querySnapshot = await getDocs(q).catch((err) => {
      console.log(err.message);
      errors.value = err.message;
    });
    querySnapshot.forEach((doc) => {
      let training = doc.data();
      training.id = doc.id;
      trainings.value.push(training);
    });
    loading.value = 0;
  };

  const registration = async (data) => {
    loading.value = 1;
    errors.value = "";
    const { reveal, onConfirm } = createConfirmDialog(
      ConfirmRegistrationModal,
      {
        question: "Are you sure you want to register for this course?",
      }
    );
    onConfirm(async () => {
      await addDoc(collection(db, "registrations"), data).catch((err) => {
        errors.value = err.message;
        loading.value = 0;
      });
      router.push({ name: "account" });
      loading.value = 0;
    });
    reveal();
  };

  const cleanErrors = () => {
    errors.value = "";
  };
  return {
    registration,
    getTrainingByCategory,
    updateTraining,
    getTraining,
    training,
    deleteTraining,
    toogleDeleteArray,
    checkAll,
    getTrainings,
    deleteArray,
    chks,
    chkAll,
    trainings,
    loading,
    errors,
    createTraining,
    cleanErrors,
  };
}

import { useRouter } from "vue-router";
import { ref } from "vue";
import { db } from "@/firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal.vue";
export default function useRegistrations() {
  const router = useRouter();
  const errors = ref("");
  const registrationColRef = collection(db, "registrations");
  const loading = ref(0);
  const registration = ref([]);
  const registrations = ref([]);
  const deleteArray = ref([]);
  const chks = ref([]);
  const chkAll = ref(false);
  const { reveal, onConfirm } = createConfirmDialog(ConfirmDeleteModal, {
    question:
      "Are you sure you want to delete its item(s)? All data will be permanently deleted. This action cannot be undone.",
  });

  const getRegistrationByUser = async (id) => {
    loading.value = 1;
    registrations.value = [];
    const ref = collection(db, "registrations");

    const q = query(ref, where("user.userId", "==", id));
    const querySnapshot = await getDocs(q).catch((err) => {
      console.log(err.message);
      errors.value = err.message;
    });
    querySnapshot.forEach((doc) => {
      let training = doc.data();
      training.id = doc.id;
      registrations.value.push(training);
    });
    loading.value = 0;
  };

  const getRegistrations = async () => {
    loading.value = 1;
    registrations.value = [];
    const registrationSnapshot = await getDocs(registrationColRef).catch(
      (err) => {
        errors.value = err.message;
      }
    );
    registrationSnapshot.forEach((doc) => {
      let registration = doc.data();
      registration.id = doc.id;
      registrations.value.push(registration);
      chks.value.push({
        id: registration.id,
        value: false,
      });
    });
    loading.value = 0;
  };

  const createRegistration = async (registration) => {
    loading.value = 1;
    errors.value = "";
    await addDoc(registrationColRef, registration).catch((err) => {
      errors.value = err.message;
      loading.value = 0;
    });
    loading.value = 0;
    router.push({
      name: "registration.index",
    });
  };

  const toogleDeleteArray = async (index) => {
    chks.value[index].value
      ? deleteArray.value.push(chks.value[index].id)
      : deleteArray.value.splice(index, 1);
  };

  const checkAll = async () => {
    if (chkAll.value) {
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

  const deleteRegistration = async () => {
    if (deleteArray.value.length != []) {
      reveal();
      onConfirm(async () => {
        for (const index in deleteArray.value) {
          await deleteDoc(
            doc(db, "registrations", deleteArray.value[index])
          ).catch((err) => {
            errors.value = err.message;
          });
        }
        getRegistrations();
      });
    }
    return;
  };

  const getRegistration = async (id) => {
    loading.value = 1;
    const ref = doc(db, "registrations", id);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      registration.value = docSnap.data();
    } else {
      errors.value = "No such document!";
    }
    loading.value = 0;
  };

  const updateRegistration = async (id) => {
    loading.value = 1;
    errors.value = "";
    const ref = doc(db, "registrations", id);
    await updateDoc(ref, {
      ...registration.value,
    }).catch((err) => {
      errors.value = err.message;
    });
    loading.value = 0;
    router.push({
      name: "registration.index",
    });
  };

  const cleanErrors = () => {
    errors.value = "";
  };
  return {
    getRegistrationByUser,
    updateRegistration,
    getRegistration,
    registration,
    deleteRegistration,
    toogleDeleteArray,
    checkAll,
    getRegistrations,
    deleteArray,
    chks,
    chkAll,
    registrations,
    loading,
    errors,
    createRegistration,
    cleanErrors,
  };
}

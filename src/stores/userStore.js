import { defineStore } from "pinia";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    currentUser: null,
  }),

  actions: {
    getCurrentUser() {
      return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
          auth,
          async (data) => {
            removeListener();
            if (data) {
              const ref = collection(db, "users");
              const q = query(ref, where("userId", "==", data.uid));
              const querySnapshot = await getDocs(q).catch((err) => {
                console.log(err.message);
              });
              querySnapshot.forEach((doc) => {
                this.currentUser = doc.data();
                this.currentUser.id = doc.id;
              });
            }
            // console.log(user)
            resolve(data);
          },
          reject
        );
      });
    },
    async logOut() {
      await signOut(auth).then(() => {
        console.log("Sucessful logged out ");
      });
    },
  },
  getters: {},
});

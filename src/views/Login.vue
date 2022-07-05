<script setup>
import { onMounted, reactive, ref } from "vue";
import useUsers from "@/composables/useUser";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";

const { cleanErrors, errors, loading, loginWithEmail, loginWithGoogle } =
  useUsers();
const userStore = useUserStore();
const router = useRouter();

onMounted(async () => {
  if (await userStore.getCurrentUser()) {
    router.push({
      name: "admin.dashboard",
    });
  }
});

const logInfo = reactive({
  email: "",
  password: "",
});

const loginEmail = async () => {
  await loginWithEmail({ ...logInfo });
};
</script>

<template>
  <GoBack />
  <div class="w-full max-w-sm p-6 m-auto bg-white rounded-md py-10">
    <h1
      class="text-3xl font-semibold text-center text-gray-700 dark:text-white"
    >
      Login
    </h1>
    <Error :errors="errors" @cleanErrors="cleanErrors" />
    <form class="mt-6" @submit.prevent="loginEmail()">
      <div>
        <label for="username" class="block text-sm text-gray-800">Email</label>
        <input
          type="email"
          v-model="logInfo.email"
          required
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm text-gray-800"
            >Password</label
          >
          <a href="#" class="text-xs text-gray-600 hover:underline"
            >Forget Password?</a
          >
        </div>

        <input
          type="password"
          v-model="logInfo.password"
          required
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-6">
        <button
          class="w-full px-4 py-2 tracking-wide flex justify-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          <span v-if="loading == 1">
            <Spin />
          </span>
          <span v-else>Login</span>
        </button>
      </div>
    </form>

    <div class="flex items-center justify-between mt-4">
      <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

      <a
        href="#"
        class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >or login with Social Media</a
      >

      <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>

    <div class="flex items-center mt-6 -mx-2">
      <button
        type="button"
        @click="loginWithGoogle()"
        class="flex items-center justify-center w-full px-6 py-3 border mx-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
      >
        <svg class="w-5 h-5 mx-2 fill-current" viewBox="0 0 40 40">
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#FFC107"
          />
          <path
            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
            fill="#FF3D00"
          />
          <path
            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
            fill="#4CAF50"
          />
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#1976D2"
          />
        </svg>

        <span class="hidden mx-2 sm:inline">Sign in with Google</span>
      </button>
    </div>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Don't have an account?
      <router-link
        :to="{ name: 'register' }"
        class="font-medium text-gray-700 hover:underline"
        >Create One</router-link
      >
    </p>
  </div>
</template>

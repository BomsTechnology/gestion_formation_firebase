<script setup>
import { computed, ref, onMounted } from "vue";
import { XIcon, MenuIcon } from "@heroicons/vue/solid";
import { useUserStore } from "@/stores/userStore.js";
import { CogIcon, LogoutIcon, UserCircleIcon } from "@heroicons/vue/outline";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const isLogged = ref(false);
onMounted(async () => {
  isLogged.value = (await userStore.getCurrentUser()) ? true : false;
});

const router = useRouter();
const open = ref(false);
const show = ref(false);
const logOut = () => {
  userStore.logOut();
  location.href = "/";
};
</script>

<template>
  <header>
    <div class="w-full bg-blue-500 p-4 flex justify-between px-10 items-center">
      <div>
        <router-link
          :to="{ name: 'home' }"
          class="text-white text-4xl font-bold"
        >
          Just Learn
        </router-link>
      </div>
      <div class="relative block sm:hidden" @click="open = !open">
        <transition-group
          enter-active-class="transition duration-500"
          enter-from-class="opacity-0 rotate-45"
          enter-to-class="opacity-1 rotate-0 "
          leave-active-class="transition duration-500 absolute"
          leave-from-class="opacity-1 rotate-0"
          leave-to-class="opacity-0 rotate-45"
          appear
        >
          <button
            v-if="!open"
            type="button"
            class="text-white hover:text-gray-100 focus:text-gray-100 focus:outline-none"
            aria-label="toggle menu"
          >
            <MenuIcon class="h-7 w-7 fill-current" />
          </button>
          <button
            v-if="open"
            type="button"
            class="text-white hover:text-gray-100 focus:text-gray-100 focus:outline-none"
            aria-label="toggle menu"
          >
            <XIcon class="h-7 w-7 fill-current" />
          </button>
        </transition-group>
      </div>
      <div
        v-if="isLogged"
        class="sm:flex justify-center items-center hidden relative"
      >
        <button
          @click="show = !show"
          v-if="userStore.currentUser"
          type="button"
          class="flex justify-center items-center"
        >
          <div
            v-if="userStore.currentUser.image"
            class="w-12 h-12 overflow-hidden rounded-full border"
          >
            <img
              :src="userStore.currentUser.image"
              class="w-full object-cover"
              alt=""
            />
          </div>
          <UserCircleIcon v-else class="w-12 h-12 text-white" />
        </button>
        <Transition
          enter-active-class="transition duration-500"
          enter-from-class="opacity-0 scale-75"
          enter-to-class="opacity-1 scale-100"
          leave-active-class="transition duration-500"
          leave-from-class="opacity-1 scale-100"
          leave-to-class="opacity-0 scale-75"
        >
          <div
            v-if="show"
            class="w-32 rounded-md bg-white absolute top-14 right-0 text-sm shadow-lg"
          >
            <router-link
              :to="{ name: 'admin.dashboard' }"
              class="w-full py-2 text-center flex px-4 items-center space-x-3 rounded-t-md text-gray-700 hover:bg-blue-500 hover:text-white"
            >
              <CogIcon class="w-5 h-5" />
              <span>Account</span>
            </router-link>
            <button
              @click="logOut"
              class="w-full px-4 space-x-3 py-2 text-center items-center rounded-b-md flex text-gray-700 hover:bg-blue-500 hover:text-white"
              type="button"
            >
              <LogoutIcon class="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </Transition>
      </div>
      <nav class="space-x-4 sm:block hidden" v-else>
        <router-link
          :to="{ name: 'login' }"
          class="text-white py-2 px-3 hover:bg-white hover:text-blue-500 rounded border border-white"
        >
          Login
        </router-link>
        <router-link
          :to="{ name: 'register' }"
          class="text-white py-2 px-3 hover:bg-white hover:text-blue-500 rounded border border-white"
        >
          Register
        </router-link>
      </nav>
    </div>
    <Transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-1 translate-x-0"
      leave-active-class="transition duration-500"
      leave-from-class="opacity-1 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <nav
        class="bg-white px-8 py-4 w-full space-x-4 flex justify-center items-center border-b"
        v-if="open"
      >
        <router-link
          :to="{ name: 'login' }"
          v-if="!isLogged"
          class="text-white py-2 px-3 text-lg hover:bg-white bg-blue-500 hover:text-blue-500 rounded"
        >
          Login
        </router-link>
        <router-link
          v-if="!isLogged"
          :to="{ name: 'register' }"
          class="text-white py-2 px-3 text-lg hover:bg-white bg-blue-500 hover:text-blue-500 rounded"
        >
          Register
        </router-link>
        <button
          v-if="isLogged && userStore.currentUser"
          type="button"
          class="flex justify-center items-center"
        >
          <div
            v-if="userStore.currentUser.image"
            class="w-14 h-14 overflow-hidden rounded-full border"
          >
            <img
              :src="userStore.currentUser.image"
              class="w-full object-cover"
              alt=""
            />
          </div>
          <UserCircleIcon v-else class="w-12 h-12 text-white" />
        </button>
        <router-link
          v-if="isLogged"
          :to="{ name: 'login' }"
          class="text-white py-2 flex items-center px-4 space-x-3 text-lg hover:bg-white bg-blue-500 hover:text-blue-500 rounded"
        >
          <CogIcon class="w-5 h-5" />
          <span>Account</span>
        </router-link>
        <button
          v-if="isLogged"
          type="button"
          @click="logOut"
          class="text-white py-2 px-4 flex text-lg items-center space-x-3 hover:bg-white bg-blue-500 hover:text-blue-500 rounded"
        >
          <LogoutIcon class="w-5 h-5" />
          <span>Logout</span>
        </button>
      </nav>
    </Transition>
  </header>
</template>

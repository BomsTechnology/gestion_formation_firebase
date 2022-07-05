<script setup>
import {
  UserCircleIcon,
  ClipboardListIcon,
  AdjustmentsIcon,
  LogoutIcon,
} from "@heroicons/vue/solid";

import { useUserStore } from "@/stores/userStore.js";
import { reactive, onMounted } from "vue";
import useRegistrations from "@/composables/useRegistration";

const {
  loading,
  errors,
  cleanErrors,

  getRegistrationByUser,

  registrations,
} = useRegistrations();

const userStore = useUserStore();
const open = reactive({
  registration: true,
  setting: false,
});
const logOut = () => {
  userStore.logOut();
  location.href = "/";
};
function changeTab(tab) {
  switch (tab) {
    case "registration":
      open.setting = false;
      open.registration = true;
      break;
    case "setting":
      open.registration = false;
      open.setting = true;
      break;
  }
}
onMounted(() => {
  getRegistrationByUser(userStore.currentUser.userId);
});
</script>

<template>
  <div class="px-4 md:px-28">
    <div
      class="flex w-full flex-col items-center justify-between rounded-lg bg-white py-2 px-8 lg:h-48 lg:flex-row"
    >
      <div
        class="flex flex-col items-center space-x-2 py-3 px-2 text-center lg:flex-row lg:text-left"
      >
        <div
          v-if="userStore.currentUser.image"
          class="mr-2 h-28 w-28 overflow-hidden rounded-full border"
        >
          <img
            :src="userStore.currentUser.image"
            class="w-full object-cover"
            alt=""
          />
        </div>
        <UserCircleIcon v-else class="w-28 h-28 text-gray-500" />

        <div>
          <h2 class="text-justify text-xl font-bold text-gray-800">
            {{ userStore.currentUser.name }}
          </h2>
        </div>
      </div>
      <div class="flex justify-center lg:flex-col">
        <button
          type="button"
          @click="logOut()"
          class="flex items-center justify-center space-x-2 rounded border border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white"
        >
          <LogoutIcon class="h-6 w-6" />
          <span class="hidden text-sm font-light lg:block">Logout</span>
        </button>
      </div>
    </div>

    <div class="border-b border-gray-200">
      <ul
        class="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-900"
      >
        <li class="mr-2">
          <button
            @click="changeTab('registration')"
            type="button"
            :class="[
              open.registration
                ? 'inline-flex rounded-t-lg border-b-2 border-blue-500 p-4 text-blue-500'
                : 'group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-blue-700 hover:text-blue-700',
            ]"
          >
            <span
              ><ClipboardListIcon
                :class="[
                  open.registration
                    ? 'mr-2 h-5 w-5 text-blue-500'
                    : 'mr-2 h-5 w-5 text-gray-700 group-hover:text-blue-700',
                ]"
            /></span>
            <span class="hidden md:block">Registration</span>
          </button>
        </li>
        <li class="mr-2">
          <button
            @click="changeTab('setting')"
            type="button"
            :class="[
              open.setting
                ? 'inline-flex rounded-t-lg border-b-2 border-blue-500 p-4 text-blue-500'
                : 'group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-blue-700 hover:text-blue-700',
            ]"
            aria-current="page"
          >
            <span
              ><AdjustmentsIcon
                :class="[
                  open.setting
                    ? 'mr-2 h-5 w-5 text-blue-500'
                    : 'mr-2 h-5 w-5 text-gray-700 group-hover:text-blue-700',
                ]"
            /></span>
            <span class="hidden md:block">Setting</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="relative h-[1000px]">
      <transition-group
        enter-active-class="transition duration-1000"
        enter-from-class="opacity-0 translate-x-20"
        enter-to-class="opacity-1 translate-x-0"
        leave-active-class="transition duration-1000 absolute ease-out"
        leave-from-class="opacity-1 translate-x-0"
        leave-to-class=" -translate-x-full opacity-0"
        mode="out-in"
      >
        <div v-if="open.registration">
          <div>
            <Error :errors="errors" @cleanErrors="cleanErrors" />
            <div class="items-center justify-between p-4 lg:flex mt-10">
              <div
                class="mt-1 items-center space-y-1 lg:flex lg:space-y-0 lg:space-x-2"
              >
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <svg
                      class="h-5 w-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="table-search"
                    class="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 lg:w-80"
                    placeholder="Search for items"
                  />
                </div>
              </div>
            </div>
            <table class="w-full text-left text-sm text-gray-500 shadow">
              <thead class="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" class="px-6 py-3">User</th>
                  <th scope="col" class="px-6 py-3">Email</th>
                  <th scope="col" class="px-6 py-3">Phone</th>
                  <th scope="col" class="px-6 py-3">Category</th>
                  <th scope="col" class="px-6 py-3">Training</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading == 1">
                  <th colspan="5" class="p-8">
                    <div class="flex justify-center">
                      <Spin
                        :color="'text-indigo-500'"
                        :width="'w-16'"
                        :height="'h-16'"
                      />
                    </div>
                  </th>
                </tr>
                <tr
                  v-else-if="registrations.length != []"
                  v-for="(registration, index) in registrations"
                  :key="registration.id"
                  class="border-b bg-white hover:bg-gray-50"
                >
                  <td
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    {{ registration.user.name }}
                  </td>
                  <td
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    {{ registration.user.email }}
                  </td>
                  <td
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    {{ registration.user.phone }}
                  </td>
                  <td class="px-6 py-4">
                    {{ registration.training.category.name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ registration.training.name }}
                  </td>
                </tr>
                <tr v-else>
                  <td
                    colspan="5"
                    class="whitespace-nowrap px-6 py-4 text-2xl text-center font-medium text-gray-900"
                  >
                    NO REGISTRATION
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="open.setting">
          <div>Comming Soon</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

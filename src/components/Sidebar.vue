<script setup>
import {
  CollectionIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ClipboardListIcon,
  ChevronUpIcon,
  AcademicCapIcon,
  UserIcon,
  HomeIcon,
  ViewGridIcon,
  MenuAlt2Icon,
} from "@heroicons/vue/solid";
import { CogIcon, LogoutIcon, UserCircleIcon } from "@heroicons/vue/outline";
import { reactive } from "vue";
import { useUserStore } from "@/stores/userStore.js";
import { useRouter } from "vue-router";
const router = useRouter();
const open = reactive({
  menu: true,
  training: false,
});
const userStore = useUserStore();
const logOut = () => {
  userStore.logOut();
  router.push({
    name: "home",
  });
};
</script>

<template>
  <div class="relative h-screen z-50">
    <transition
      enter-active-class="transition duration-1000 "
      enter-from-class="-translate-x-full"
      enter-to-class=" translate-x-0"
      leave-active-class="transition duration-1000 absolute ease-out"
      leave-from-class=" translate-x-0"
      leave-to-class=" -translate-x-full "
    >
      <div
        v-if="open.menu"
        class="flex flex-col w-64 h-screen overflow-y-auto overflow-x-hidden py-4 bg-blue-500"
      >
        <h2 class="text-3xl font-bold text-center text-white">Just Learn</h2>

        <div
          v-if="userStore.currentUser"
          class="flex flex-col items-center mt-6 -mx-2"
        >
          <img
            v-if="userStore.currentUser.image"
            class="object-cover w-24 h-24 mx-2 rounded-full"
            :src="userStore.currentUser.image"
            alt="avatar"
          />
          <UserCircleIcon v-else class="w-24 h-24 text-white" />
          <h4 class="mx-2 mt-2 font-medium text-white hover:underline">
            {{ userStore.currentUser.name }}
          </h4>
          <p class="mx-2 mt-2 text-sm font-medium text-white hover:underline">
            {{ userStore.currentUser.email }}
          </p>
          <div class="flex items-center mx-2 mt-2 space-x-4">
            <a
              href="#"
              title="setting account"
              class="text-white p-2 hover:bg-gray-50 rounded-full hover:text-gray-700"
              ><CogIcon class="w-6 h-6" /></a
            ><button
              type="button"
              @click="logOut()"
              title="logout"
              class="text-white p-2 hover:bg-gray-50 rounded-full hover:text-gray-700"
            >
              <LogoutIcon class="w-6 h-6" />
            </button>
          </div>
        </div>

        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <router-link
              :to="{ name: 'admin.dashboard' }"
              class="flex items-center px-4 py-2 text-white transition-colors duration-200 transform hover:bg-gray-200 hover:text-gray-700"
            >
              <HomeIcon class="w-5 h-5" />
              <span class="mx-4 font-medium">Dashboard</span>
            </router-link>
            <div>
              <button
                type="button"
                @click="open.training = !open.training"
                class="flex justify-between w-full items-center px-4 py-2 mt-2 text-white transition-colors duration-200 transform hover:bg-gray-200 hover:text-gray-700"
              >
                <div class="flex items-center">
                  <AcademicCapIcon class="w-5 h-5" />

                  <span class="mx-4 font-medium">Trainings</span>
                </div>

                <ChevronDownIcon v-if="!open.training" class="w-5 h-5" />
                <ChevronUpIcon v-if="open.training" class="w-5 h-5" />
              </button>
              <transition
                enter-active-class="transition duration-500"
                enter-from-class="-translate-y-20"
                enter-to-class=" translate-y-0"
                leave-active-class="transition duration-500 ease-out"
                leave-from-class=" translate-y-0"
                leave-to-class=" -translate-y-20 opacity-0"
                mode="out-in"
              >
                <div
                  v-if="open.training"
                  class="mx-4 rounded-lg my-5 bg-gray-50"
                >
                  <router-link
                    :to="{ name: 'admin.training.index' }"
                    class="flex items-center px-4 py-2 rounded-t-lg text-gray-700 transition-colors duration-200 transform hover:bg-gray-200 hover:text-gray-700"
                  >
                    <ViewGridIcon class="w-5 h-5" />

                    <span class="mx-4 font-medium">All Trainings</span>
                  </router-link>
                  <router-link
                    :to="{ name: 'admin.category' }"
                    class="flex items-center px-4 py-2 rounded-b-lg text-gray-700 transition-colors duration-200 transform hover:bg-gray-200 hover:text-gray-700"
                  >
                    <CollectionIcon class="w-5 h-5" />

                    <span class="mx-4 font-medium">Categories</span>
                  </router-link>
                </div>
              </transition>
            </div>

            <router-link
              :to="{ name: 'admin.user' }"
              class="flex items-center px-4 py-2 mt-2 text-white transition-colors duration-200 transform hover:bg-gray-200 hover:text-gray-700"
            >
              <UserGroupIcon class="w-5 h-5" />

              <span class="mx-4 font-medium">Users</span>
            </router-link>

            <router-link
              :to="{ name: 'admin.registration' }"
              class="flex items-center px-4 py-2 mt-2 text-white transition-colors duration-200 transform hover:bg-gray-200 hover:text-gray-700"
            >
              <ClipboardListIcon class="w-5 h-5" />

              <span class="mx-4 font-medium">Registration</span>
            </router-link>

            <router-link
              router-link
              :to="{ name: 'admin.teacher.index' }"
              class="flex items-center w-full px-4 py-2 mt-2 text-white transition-colors duration-200 transform hover:bg-gray-200 hover:text-gray-700"
            >
              <UserIcon class="w-5 h-5" />

              <span class="mx-4 font-medium">Teacher</span>
            </router-link>
          </nav>
        </div>
      </div>
    </transition>
    <button
      @click="open.menu = !open.menu"
      class="bg-blue-500 lg:hidden block p-2 text-white -right-10 rounded-r-lg absolute top-0"
    >
      <MenuAlt2Icon class="w-7 h-7" />
    </button>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-gray-50 text-gray-700;
}
</style>

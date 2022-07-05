<script setup>
import { onMounted } from "vue";
import useUsers from "@/composables/useUser";
import useTeachers from "@/composables/useTeacher";
import useTrainings from "@/composables/useTraining";
import {
  UserGroupIcon,
  ClipboardListIcon,
  AcademicCapIcon,
  UserIcon,
} from "@heroicons/vue/solid";
const { getTrainings, trainings } = useTrainings();
const { getUsers, users } = useUsers();
const { getTeachers, teachers } = useTeachers();
onMounted(() => {
  getUsers();
  getTeachers();
  getTrainings();
});
</script>
<template>
  <div class="p-8 h-full">
    <h1 class="font-bold text-3xl">DashBoard</h1>
    <div class="flex h-full flex-col space-y-4">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        <div
          class="p-4 bg-white rounded-lg h-36 shadow-lg text-blue-500 flex justify-center items-center space-x-8"
        >
          <div><UserGroupIcon class="w-14 h-14" /></div>
          <div class="text-center text-xl font-bold uppercase">
            <h1>{{ users.length }}</h1>
            <h1>Users</h1>
          </div>
        </div>
        <div
          class="p-4 bg-white rounded-lg h-36 shadow-lg text-amber-500 flex justify-center items-center space-x-8"
        >
          <div><UserIcon class="w-14 h-14" /></div>
          <div class="text-center text-xl font-bold uppercase">
            <h1>{{ teachers.length }}</h1>
            <h1>teachers</h1>
          </div>
        </div>
        <div
          class="p-4 bg-white rounded-lg h-36 shadow-lg text-green-500 flex justify-center items-center space-x-8"
        >
          <div><AcademicCapIcon class="w-14 h-14" /></div>
          <div class="text-center text-xl font-bold uppercase">
            <h1>{{ trainings.length }}</h1>
            <h1>trainings</h1>
          </div>
        </div>
        <div
          class="p-4 bg-white rounded-lg h-36 shadow-lg text-indigo-700 flex justify-center items-center space-x-8"
        >
          <div><ClipboardListIcon class="w-14 h-14" /></div>
          <div class="text-center text-xl font-bold uppercase">
            <h1>0</h1>
            <h1>registration</h1>
          </div>
        </div>
      </div>
      <div class="lg:flex grow lg:space-x-8 lg:space-y-0 space-y-8 py-8">
        <div
          class="bg-white w-full h-full overflow-auto rounded-lg shadow-lg"
        ></div>
        <div
          class="bg-white w-full h-full overflow-auto rounded-lg shadow-lg"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useTeachers from "@/composables/useTeacher";
const props = defineProps({
  id: String,
});
const { loading, updateTeacher, getTeacher, teacher, errors, cleanErrors } =
  useTeachers();

onMounted(async () => {
  await getTeacher(props.id);
});

const saveTeacher = async () => {
  await updateTeacher(props.id);
};

const file = ref(null);
const handelImage = () => {
  teacher.value.newImage = file.value.files[0];
};
</script>

<template>
  <div class="p-8 h-full">
    <h1 class="font-bold text-3xl">Create Teacher</h1>
    <div class="mt-10 lg:p-10 p-4 bg-white">
      <Error :errors="errors" @cleanErrors="cleanErrors" />
      <form @submit.prevent="saveTeacher()">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >FirstName</label
            >
            <input
              type="text"
              id="question"
              v-model="teacher.firstname"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >LastName</label
            >
            <input
              type="text"
              id="question"
              v-model="teacher.lastname"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Email</label
            >
            <input
              type="email"
              id="question"
              v-model="teacher.email"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Phone</label
            >
            <input
              type="text"
              id="question"
              v-model="teacher.phone"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div class="mt-4">
          <label
            for="question"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Image</label
          >
          <input
            ref="file"
            @change="handelImage()"
            class="block w-full text-sm text-gray-900 p-2 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            id="file_input"
            type="file"
          />
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Enter Date</label
            >
            <input
              type="date"
              id="question"
              v-model="teacher.enterDate"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Diploma</label
            >
            <input
              type="text"
              id="question"
              v-model="teacher.diploma"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div class="col-span-2 flex justify-end items-center py-2 px-3 mt-4">
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            <span v-if="loading == 1">
              <Spin />
            </span>
            <span v-else>Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useTrainings from "@/composables/useTraining";
import useTeachers from "@/composables/useTeacher";
import useCategories from "@/composables/useCategory";
const props = defineProps({
  id: String,
});
const { loading, updateTraining, getTraining, training, errors, cleanErrors } =
  useTrainings();
const { getTeachers, teachers } = useTeachers();
const { getCategories, categories } = useCategories();
onMounted(async () => {
  getTeachers();
  getCategories();
  await getTraining(props.id);
});

const saveTraining = async () => {
  await updateTraining(props.id);
};

const file = ref(null);
const handelImage = () => {
  training.value.newImage = file.value.files[0];
};
</script>

<template>
  <div class="p-8 h-full">
    <h1 class="font-bold text-3xl">Create Training</h1>
    <div class="mt-10 lg:p-10 p-4 bg-white">
      <Error :errors="errors" @cleanErrors="cleanErrors" />
      <form @submit.prevent="saveTraining()">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Name</label
            >
            <input
              type="text"
              id="question"
              v-model="training.name"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700"
              >Training Price</label
            >
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center p-2.5 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
              >
                XFA
              </span>
              <input
                type="number"
                v-model="training.price"
                id="price"
                autocomplete="price"
                class="focus:ring-indigo-500 border focus:border-indigo-500 p-2.5 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              />
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div class="">
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Category</label
            >
            <select
              autocomplete="brand-name"
              v-model="training.category"
              required
              class="mt-1 block w-full p-2.5 text-gray-700 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="">
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Teacher</label
            >
            <select
              autocomplete="brand-name"
              v-model="training.teacher"
              required
              class="mt-1 block w-full p-2.5 text-gray-700 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option
                v-for="teacher in teachers"
                :key="teacher.id"
                :value="teacher"
              >
                {{ teacher.firstname + " " + teacher.lastname }}
              </option>
            </select>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 mt-4 grid-cols-1 gap-4">
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Day</label
            >
            <select
              autocomplete="brand-name"
              v-model="training.day"
              class="mt-1 block w-full p-2.5 text-gray-700 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="monday">Monday</option>
              <option value="monday">Tuesday</option>
              <option value="monday">Wednesday</option>
              <option value="monday">Thursday</option>
              <option value="monday">Friday</option>
              <option value="monday">Saturday</option>
            </select>
          </div>
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Start Hour</label
            >
            <input
              type="time"
              id="question"
              v-model="training.startHour"
              class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              for="question"
              class="block mb-2 text-sm font-medium text-gray-900"
              >End Hour</label
            >
            <input
              type="time"
              id="question"
              v-model="training.endHour"
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
            required
            class="block w-full text-sm text-gray-900 p-2 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            id="file_input"
            type="file"
          />
        </div>

        <div class="mt-4">
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <div class="mt-1">
            <textarea
              id="description"
              v-model.trim="training.description"
              rows="3"
              class="shadow-sm focus:ring-indigo-500 p-2.5 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
          <p class="mt-2 text-sm text-gray-500">
            Brief description for this training.
          </p>
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

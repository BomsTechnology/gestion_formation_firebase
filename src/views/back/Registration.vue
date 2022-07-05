<script setup>
import { onMounted } from "vue";
import useRegistrations from "@/composables/useRegistration";

const {
  loading,
  errors,
  cleanErrors,

  getRegistrations,

  registrations,
} = useRegistrations();

onMounted(() => {
  getRegistrations();
});
</script>

<template>
  <DialogsWrapper />
  <div
    class="relative w-full p-8 h-full overflow-x-auto shadow-md sm:rounded-lg"
  >
    <div class="flex justify-between">
      <h1 class="font-bold text-4xl">Registrations</h1>
    </div>
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
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/solid";
import { onMounted } from "vue";
import useUsers from "@/composables/useUser";
import { UserCircleIcon } from "@heroicons/vue/outline";
const {
  loading,
  errors,
  cleanErrors,
  deleteUser,
  toogleDeleteArray,
  checkAll,
  getUsers,
  chks,
  chkAll,
  enabledUser,
  disableddUser,
  users,
} = useUsers();

onMounted(() => {
  getUsers();
});
</script>

<template>
  <DialogsWrapper />
  <div
    class="relative w-full p-8 h-full overflow-x-auto shadow-md sm:rounded-lg"
  >
    <div class="flex justify-between">
      <h1 class="font-bold text-4xl">Users</h1>
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
      <div class="mt-1 flex justify-end lg:mt-0 lg:block">
        <!-- <button
          type="button"
          @click="deleteUser()"
          title="options"
          class="flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"
        >
          <TrashIcon class="h-6 w-6" />
          <span class="hidden text-sm font-thin lg:block">Supprimer</span>
        </button> -->
      </div>
    </div>
    <table class="w-full text-left text-sm text-gray-500 shadow">
      <thead class="bg-gray-50 text-xs uppercase text-gray-700">
        <tr>
          <!-- <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                @change="checkAll()"
                v-model="chkAll"
                id="checkbox-all-search"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th> -->
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">State</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Phone</th>

          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading == 1">
          <th colspan="7" class="p-8">
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
          v-else-if="users.length != []"
          v-for="(user, index) in users"
          :key="user.id"
          class="border-b bg-white hover:bg-gray-50"
        >
          <!-- <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                v-model="chks[index].value"
                @change="toogleDeleteArray(index)"
                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td> -->
          <td
            scope="row"
            class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
          >
            <div
              v-if="user.image"
              class="h-10 w-10 overflow-hidden rounded-full"
            >
              <img :src="user.image" :alt="user.name" />
            </div>
            <UserCircleIcon v-else class="w-10 h-10 text-gray-500" />
          </td>
          <td class="px-6 py-4">
            {{
              user.name.lenght > 24
                ? user.name.substring(0, 24) + "..."
                : user.name
            }}
          </td>
          <td class="px-6 py-4">
            <span
              v-if="user.state == 1"
              class="bg-blue-500 text-white text-xs rounded-full p-1"
            >
              enabled
            </span>
            <span
              v-if="user.state != 1"
              class="bg-amber-500 text-white text-xs rounded-full p-1"
            >
              disabled
            </span>
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4">
            {{ user.type }}
          </td>
          <td class="px-6 py-4">
            {{ user.phone }}
          </td>

          <td class="px-6 py-4 text-right">
            <button type="button" class="font-medium hover:underline">
              <span
                @click="enabledUser(user.id)"
                v-if="user.state != 1"
                class="text-indigo-600"
                >Activate</span
              >
              <span
                @click="disableddUser(user.id)"
                v-if="user.state == 1"
                class="text-amber-600"
                >Deactivate</span
              >
            </button>
          </td>
        </tr>
        <tr v-else>
          <td
            colspan="8"
            class="whitespace-nowrap px-6 py-4 text-2xl text-center font-medium text-gray-900"
          >
            NO USER
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

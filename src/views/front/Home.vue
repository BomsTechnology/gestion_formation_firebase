<script setup>
import { onMounted, ref } from "vue";
import useCategories from "@/composables/useCategory";

const { getCategories, categories } = useCategories();

onMounted(() => {
  getCategories();
});
</script>
<template>
  <section class="lg:px-20 py-8 px-8">
    <h1 class="text-2xl font-semibold">
      Hello and welcome to
      <span
        class="text-blue-500 underline decoration-pink-500 decoration-dotted"
        >Just Learn</span
      >
      , the platform that allows you to register for our various training
      courses. :)
    </h1>
    <p class="mt-2">What type of training do you want to do?</p>

    <div
      v-if="categories.length != []"
      class="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-8"
    >
      <div
        v-for="(category, index) in categories"
        :key="category.id"
        class="shadow bg-white hover:scale-95 w-full rounded-lg"
      >
        <router-link :to="{ name: 'training', params: { id: category.id } }">
          <div class="h-32 overflow-hidden rounded-t-lg w-full">
            <img
              :src="category.image"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div class="p-4">
            <h1 class="font-semibold text-lg">
              {{ category.name }}
            </h1>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

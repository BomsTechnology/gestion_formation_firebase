<script setup>
import { ArrowCircleLeftIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="m-4">
    <button
      @click="goBack()"
      class="flex items-center space-x-1 rounded-full border border-primary-color bg-white px-2 py-1 text-blue-500 shadow transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:bg-primary-color focus:text-white"
    >
      <ArrowCircleLeftIcon class="h-5 w-5" />

      <span class="hidden text-sm md:block">Back</span>
    </button>
  </div>
</template>

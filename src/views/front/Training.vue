<script setup>
import { onMounted, ref } from "vue";
import useTrainings from "@/composables/useTraining";
import useCategories from "@/composables/useCategory";
const props = defineProps({
  id: String,
});
const { getTrainingByCategory, trainings } = useTrainings();
const { getCategory, category } = useCategories();

onMounted(async () => {
  await getCategory(props.id);
  await getTrainingByCategory(props.id);
});
</script>

<template>
  <GoBack />
  <section class="lg:px-20 py-8 px-8">
    <h1 class="text-2xl font-semibold">
      Training in
      <span
        class="text-blue-500 underline decoration-pink-500 decoration-dotted"
        >{{ category.name }}</span
      >
    </h1>

    <div
      v-if="trainings.length != []"
      class="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8"
    >
      <div
        v-for="(training, index) in trainings"
        :key="training.id"
        class="shadow bg-white hover:scale-95 w-full rounded-lg"
      >
        <router-link
          :to="{ name: 'training.detail', params: { id: training.id } }"
        >
          <div class="h-32 overflow-hidden rounded-t-lg w-full">
            <img
              :src="training.image"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div class="p-4 space-y-2">
            <h1 class="font-semibold text-lg">
              {{ training.name }}
            </h1>
            <h2>Price : {{ training.price + " XFA" }}</h2>
            <h2>
              Period :
              {{
                training.day +
                " " +
                training.startHour +
                " - " +
                training.endHour
              }}
            </h2>
            <div class="flex items-center space-x-2 text-sm">
              <div class="h-10 w-10 overflow-hidden rounded-full">
                <img
                  :src="training.teacher.image"
                  :alt="training.teacher.name"
                />
              </div>
              <h1>
                {{
                  training.teacher.firstname + " " + training.teacher.lastname
                }}
              </h1>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div
      v-else
      class="whitespace-nowrap px-6 py-4 text-2xl text-center font-medium text-gray-900"
    >
      NO TRAINING
    </div>
  </section>
</template>

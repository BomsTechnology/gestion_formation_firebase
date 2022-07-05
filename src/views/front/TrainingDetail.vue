<script setup>
import { onMounted, ref, reactive } from "vue";
import useTrainings from "@/composables/useTraining";
import { useUserStore } from "@/stores/userStore.js";

const userStore = useUserStore();
const isLogged = ref(false);
const data = reactive({
  user: null,
  training: null,
});

const props = defineProps({
  id: String,
});
const { getTraining, training, registration } = useTrainings();

onMounted(async () => {
  await getTraining(props.id);
  training.value.id = props.id;
  data.training = training.value;
  isLogged.value = (await userStore.getCurrentUser()) ? true : false;
  if (isLogged.value) {
    data.user = userStore.currentUser;
  }
});

const saveRegistration = async () => {
  await registration({ ...data });
};
</script>

<template>
  <DialogsWrapper />
  <GoBack />
  <section class="lg:px-20 py-8 px-8">
    <div
      v-if="training.length != []"
      class="shadow bg-white w-full lg:h-[500px] h-full overflow-y-auto rounded-lg lg:flex"
    >
      <div class="lg:h-full h-96 w-full lg:w-96 overflow-hidden rounded-l-lg">
        <img :src="training.image" class="w-full h-full object-cover" alt="" />
      </div>
      <div
        class="py-4 px-8 space-y-2 bg-gray-50 w-full h-full flex items-start justify-center flex-col"
      >
        <h1 class="font-semibold text-3xl">
          {{ training.name }}
        </h1>
        <h2>Price : {{ training.price + " XFA" }}</h2>
        <h2>
          Period :
          {{
            training.day + " " + training.startHour + " - " + training.endHour
          }}
        </h2>
        <p class="py-4 font-light text-justify">
          {{ training.description }}
        </p>
        <button
          v-if="isLogged"
          type="button"
          @click="saveRegistration()"
          class="bg-blue-500 px-4 py-3 w-full text-white rounded-md hover:bg-blue-700"
        >
          Registration
        </button>
        <router-link
          v-else
          :to="{ name: 'login' }"
          class="bg-blue-500 px-4 py-3 w-full text-center text-white rounded-md hover:bg-blue-700"
        >
          Registration
        </router-link>
        <div class="flex items-center space-x-2 text-sm pt-8">
          <div class="h-10 w-10 overflow-hidden rounded-full">
            <img :src="training.teacher.image" :alt="training.teacher.name" />
          </div>
          <h1>
            {{ training.teacher.firstname + " " + training.teacher.lastname }}
          </h1>
        </div>
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

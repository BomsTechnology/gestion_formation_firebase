import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import * as ConfirmDialog from "vuejs-confirm-dialog";
import Error from "@/components/Error.vue";
import Spin from "@/components/Spin.vue";
import GoBack from "@/components/GoBack.vue";
import { initializeFirebase } from "@/firebase";
import "./index.css";

const pinia = createPinia();
initializeFirebase;

const app = createApp(App);
app.component("Error", Error);
app.component("Spin", Spin);
app.component("GoBack", GoBack);
app.use(router);
app.use(ConfirmDialog);
app.use(pinia);
app.mount("#app");

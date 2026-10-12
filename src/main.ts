import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/index.css";

//Routing
import DiceView from "./components/DiceView.vue";
import EncountersView from "./components/EncountersView.vue";
import NotesView from "./components/NotesView.vue";
import PlayersView from "./components/PlayersView.vue";
import LoginView from "./components/LoginView.vue";
import SignupView from "./components/SignupView.vue";

const routes = [
  { path: "/dice", component: DiceView },
  { path: "/encounters", component: EncountersView },
  { path: "/notes", component: NotesView },
  { path: "/players", component: PlayersView },
  { path: "/login", component: LoginView },
  { path: "/signup", component: SignupView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");

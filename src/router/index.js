import { createRouter, createWebHistory } from "vue-router";
import TamilMovies from "@/views/TamilMovies.vue";
import TeluguMovies from "@/views/TeluguMovies.vue";
import KannadaMovies from "@/views/KannadaMovies.vue";
import MalyalamMovies from "@/views/MalyalamMovies.vue";
import HindiMovies from "@/views/HindiMovies.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "Tamilmovies ",
    component: TamilMovies,
  },
  {
    path: "/tamilmovies",
    name: "TamilMovies",
    component: TamilMovies,
  },
  {
    path: "/telugumovies",
    name: "TeluguMovies",
    component: TeluguMovies,
  },
  {
    path: "/kannadamovies",
    name: "KannadaMovies",
    component: KannadaMovies,
  },
  {
    path: "/malyalammovies",
    name: "MalyalamMovies",
    component: MalyalamMovies,
  },
  {
    path: "/hindimovies",
    name: "HindiMovies",
    component: HindiMovies,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;

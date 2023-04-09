import { createRouter, createWebHistory } from "vue-router";
import TamilMovies from "@/views/TamilMovies.vue";
import TeluguMovies from "@/views/TeluguMovies.vue";
import KannadaMovies from "@/views/KannadaMovies.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
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
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
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

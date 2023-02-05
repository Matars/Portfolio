import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EducationView from "../views/EducationView.vue";
import AnimeCalView from "../views/AnimeCalView.vue";
import ProcessingSketchesView from "../views/ProcessingSketchesView.vue";
import ClocksView from "../views/ClocksView.vue";
import HotellView from "../views/HotellView.vue";
import GalleryView from "../views/GalleryView.vue";
import CvViewVue from "@/views/CvView.vue";
import ECommerceViewVue from "@/views/ECommerceView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Education",
    name: "Education",
    component: EducationView,
  },
  {
    path: "/projects/AnimeCal",
    name: "AnimeCal",
    component: AnimeCalView,
  },
  {
    path: "/projects/ProcessingSketches",
    name: "ProcessingSketches",
    component: ProcessingSketchesView,
  },
  {
    path: "/projects/Gallery",
    name: "Gallery",
    component: GalleryView,
  },
  {
    path: "/projects/Clocks",
    name: "Clocks",
    component: ClocksView,
  },
  {
    path: "/projects/Hotell",
    name: "Hotell",
    component: HotellView,
  },
  {
    path: "/CV",
    name: "CV",
    component: CvViewVue,
  },
  {
    path: "/projects/ECommerce",
    name: "ECommerce",
    component: ECommerceViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

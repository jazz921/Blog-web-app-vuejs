import { createRouter, createWebHistory } from "vue-router";
import { Home, Details, Create, Tag } from "../views/";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "details",
    component: Details,
    props: true,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
  {
    path: "/tags/:tag",
    name: "tags",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

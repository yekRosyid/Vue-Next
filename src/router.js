import { createRouter, createWebHistory } from "vue-router";
import CourseList from "./components/CourseList";
import Calendar from "./components/Calendar";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/course-list",
    component: CourseList,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

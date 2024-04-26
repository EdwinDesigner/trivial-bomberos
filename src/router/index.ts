import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LayoutAuth from "../views/layouts/auth.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "LayoutAuth",
    path: "/layout-auth",
    redirect: "/",
    component: LayoutAuth,
    children: [
      {
        path: "/",
        name: "login",
        component: () => import("@/views/pages/login.vue" as string),
        meta: { title: "Iniciar Sesión" },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

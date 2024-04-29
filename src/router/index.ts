import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LayoutAuth from "../views/layouts/auth.vue";
import Layout from "../views/layouts/interno.vue";
import isAuthenticatedGuard from "./auth-guard";

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
  {
    name: "Layout",
    path: "/layout",
    component: Layout,
    children: [
      {
        path: "/game-mode",
        name: "game-mode",
        component: () => import("@/views/pages/game-mode.vue" as string),
        meta: { title: "Modo de Juego" },
        beforeEnter: [isAuthenticatedGuard],
      },
      {
        path: "/historial",
        name: "historial",
        component: () => import("@/views/pages/historial.vue" as string),
        meta: { title: "Historial de partidas" },
        beforeEnter: [isAuthenticatedGuard],
      },
      {
        path: "/categoria-sin-tablero",
        name: "categoria-sin-tablero",
        component: () => import("@/views/pages/categoria-sin-tablero.vue" as string),
        meta: { title: "Categoría - Sin tablero" },
        beforeEnter: [isAuthenticatedGuard],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

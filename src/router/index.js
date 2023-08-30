import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/universities",
            name: "Universities",
            component: () => import("../views/Universities.vue"),
        },
        {
            path: "/modulemapping",
            name: "ModuleMapping",
            component: () => import("../views/ModuleMapping.vue"),
        },
    ],
});

export default router;

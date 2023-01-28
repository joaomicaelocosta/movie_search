import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Search",
        component: () => import("../pages/Search.vue"),
    },
    {
        path: "/list",
        name: "List",
        component: () => import("../pages/List.vue"),
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
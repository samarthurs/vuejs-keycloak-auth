import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "../components/Admin";
import Home from "../components/Home";
import Forbidden from "../components/Forbidden";
import {store} from "../store/store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/admin",
        component: Admin,
        beforeEnter(to, from, next) {
            if(store.state.userData.roles?.includes("admin")) {
                next()
            } else {
                next("/forbidden")
            }
    }},
    {
        path: "/forbidden",
        component: Forbidden
    }
    
]

const router = new VueRouter({
    routes,
    mode: 'history',
  });
  
export default router;
import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userData: {
            username: "",
            firstname: "",
            lastname: "",
            roles: []
        }
    },
    mutations: {
        store_username(state, data) {
            state.userData.username = data;
        },
        store_firstname(state, data) {
            state.userData.firstname = data;
        },
        store_lastname(state, data) {
            state.userData.lastname = data;
        },
        store_roles(state, data) {
            state.userData.roles = data;
        }
    },
    mode: 'history'
})
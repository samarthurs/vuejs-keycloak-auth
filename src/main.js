import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index';
import Keycloak from "keycloak-js";
import VueJwtDecode from "vue-jwt-decode";
import {store} from './store/store';

Vue.config.productionTip = false

// letting the vue app to know information about the Auth provider which is Keycloak
let initOptions = {
  url: 'http://127.0.0.1:8094/auth', realm: 'keycloak-demo', clientId: 'app-vue', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);
Vue.prototype.$keycloak = keycloak;

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    console.log("Authenticated");

    new Vue({
      vuetify,
      router,
      store,
      render: h => h(App, { props: { keycloak: keycloak } })
    }).$mount('#app')
  }

  console.log(keycloak.token);
  const decoded_token = VueJwtDecode.decode(keycloak.token);
  console.log(decoded_token);

  const firstname = decoded_token.given_name;
  const lastname = decoded_token.family_name;
  const username = decoded_token.preferred_username;
  const roles = decoded_token.realm_access.roles;
  
  console.log(firstname);
  console.log(lastname);
  console.log(roles);


  store.commit("store_username", username);
  store.commit("store_firstname", firstname);
  store.commit("store_lastname", lastname);
  store.commit("store_roles", roles);

  
//Token Refresh
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        console.log('Token refreshed' + refreshed);
      } else {
        console.log('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      console.log('Failed to refresh token');
    });
  }, 6000)

}).catch(() => {
  console.log("Authenticated Failed");
});
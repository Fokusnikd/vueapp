import Vue from "vue";
import App from "./App.vue";
import router from "../src/route/router";
import store from "./store";
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min';
import * as fb from 'firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyDSjw3se7kI1Hz8LAt935S_aV38RBtoZzc",
      authDomain: "myapp-692a2.firebaseapp.com",
      databaseURL: "https://myapp-692a2.firebaseio.com",
      projectId: "myapp-692a2",
      storageBucket: "",
      messagingSenderId: "809325279298",
      appId: "1:809325279298:web:2355510bf0f2ae5b"
    });
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    })
  }

}).$mount("#app");
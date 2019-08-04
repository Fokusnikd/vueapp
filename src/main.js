import Vue from "vue";
import App from "./App.vue";
import router from "../src/route/router";
import store from "./store";
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
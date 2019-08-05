import Vue from "vue";
import Vuex from "vuex";
import Ads from './store/adsStore';
import User from './store/userStore';
import Common from './store/commonStore';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Ads,
    User,
    Common

  }

});
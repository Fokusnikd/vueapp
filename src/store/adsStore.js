export default {
  state: {
    ads: [{
        title: "first ad",
        discription: "first",
        promo: false,
        id: "1111",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        title: "second ad",
        discription: "second",
        promo: true,
        id: "2111",
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        title: "third ad",
        discription: "third",
        promo: true,
        id: "1121",
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        title: "fourth ad",
        discription: "fourth",
        promo: true,
        id: "1411",
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    }
  },
  actions: {
    createAd({
      commit
    }, payload) {
      payload.id = "222";
      commit('createAd', payload);
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo;
      });
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId);
      }
    }
  }
}
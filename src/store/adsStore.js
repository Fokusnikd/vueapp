import * as fb from 'firebase';
class Ad {
  constructor(title, discription, ownerId, src = "", promo = false, id = null, ) {
    this.title = title,
      this.discription = discription,
      this.src = src,
      this.ownerId = ownerId,
      this.promo = promo,
      this.id = id

  }
}
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
    async createAd({
      commit,
      getters
    }, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newAd = new Ad(
          payload.title,
          payload.discription,
          getters.user.id,
          payload.src,
          payload.promo
        )
        const fbValue = await fb.database().ref('ads').push(newAd);
        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: fbValue.key
        })
      } catch (error) {
        commit('setError', error.mesage);
        commit('setLoading', false)
        throw error
      }

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
<template>
  <div>
    <v-container fluid>
      <v-layout row w>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="(ad,i) in promoAds" :key="i" :src="ad.src">
              <div class="car-link">
                <v-btn class="error" :to="'/ad/'+ad.id">{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-lg>
      <v-layout wrap>
        <v-flex xs6 lg3 v-for="(ad,i) in ads" :key="i">
          <v-card class="mx-auto">
            <v-img class="white--text" height="200px" :src="ad.src">
              <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-text>
              <span>{{ad.title}}</span>
              <br />
              <span class="text--primary">
                <span>{{ad.discription}}</span>
                <br />
                <span>Whitsunday Island, Whitsunday Islands</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/'+ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    }
  }
};
</script>
<style scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>

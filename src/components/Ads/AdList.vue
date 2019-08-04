<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card class="mb-3" :elevation="11" v-for="(ad,i) in myAds" :key="i">
          <v-layout wrap>
            <v-flex xs4 sm4>
              <v-img class="white--text" height="150px" :src="ad.src"></v-img>
            </v-flex>
            <v-flex xs8 sm8>
              <v-card-text>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ad.discription}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="`/ad/${ad.id}`" class="info">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    }
  }
};
</script>

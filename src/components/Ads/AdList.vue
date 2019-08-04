<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card class="mb-3" :elevation="11" v-for="(item,i) in items" :key="i">
          <v-layout wrap>
            <v-flex xs4 sm4>
              <v-img class="white--text" height="150px" :src="item.src"></v-img>
            </v-flex>
            <v-flex xs8 sm8>
              <v-card-text>
                <h2 class="text--primary">{{item.title}}</h2>
                <p>{{item.discription}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="`/ad/${item.id}`" class="info">Open</v-btn>
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
  data() {
    return {
      items: [
        {
          title: "first ad",
          discription: "first",
          promo: false,
          id: "1111",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
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
    };
  }
};
</script>

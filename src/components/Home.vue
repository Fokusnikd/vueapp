<template>
  <div>
    <v-container fluid>
      <v-layout row w>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
              <div class="car-link">
                <v-btn class="error" :to="'/ad/'+item.id">{{item.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs6 lg3 v-for="(item,i) in items" :key="i">
          <v-card class="mx-auto">
            <v-img class="white--text" height="200px" :src="item.src">
              <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-text>
              <span>{{item.title}}</span>
              <br />
              <span class="text--primary">
                <span>{{item.discription}}</span>
                <br />
                <span>Whitsunday Island, Whitsunday Islands</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/'+item.id">Open</v-btn>
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
    };
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

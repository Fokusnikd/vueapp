<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line flat>
          <v-list-item-group multiple>
            <v-list-item v-for="(order,i) in orders" :key="i">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="order.done" @change="markDone(order)"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :to="`/ad/${order.adId}`" class="primary">Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "fds3",
          name: "Vladilen",
          phone: "9-333-333-33-33",
          adId: "123",
          done: false
        },
        {
          id: "fds3",
          name: "Vladilen",
          phone: "9-333-333-33-33",
          adId: "123",
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order) {
      order.done = !order.done;
    }
  }
};
</script>

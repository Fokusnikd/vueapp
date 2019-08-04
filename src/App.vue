<template>
  <div class="app">
    <v-app>
      <v-navigation-drawer dark temporary app v-model="drawer">
        <v-list>
          <v-list-item v-for="link of links" :key="link.title" :to="link.url" @click>
            <v-list-item-icon>
              <v-icon color="pink">{{link.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content v-text="link.title">
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app dark>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

        <v-toolbar-title class="pointer">
          <router-link to="/" tag="span">AD application</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="link of links" :key="link.title" :to="link.url" text>
            <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Login", icon: "mdi-star", url: "/login" },
        { title: "Registration", icon: "mdi-lock", url: "/registration" },
        { title: "Orders", icon: "mdi-key", url: "/orders" },
        { title: "New", icon: "mdi-new", url: "/new" },
        { title: "list", icon: "mdi-list", url: "/list" }
      ]
    };
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>

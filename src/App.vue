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

          <v-list-item v-if="isUserLoggedIn" @click="onLogout">
            <v-list-item-icon>
              <v-icon color="pink">mdi-exit-to-app</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
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

          <v-btn v-if="isUserLoggedIn" @click="onLogout">
            <v-icon left>mdi-exit-to-app</v-icon>Log out
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <template v-if="error">
        <v-snackbar
          color="color"
          @input="closeError"
          :value="true"
          :multi-line="true"
          :timeout="5000"
        >
          {{error}}
          <v-btn color="error" @click="closeError">Close</v-btn>
        </v-snackbar>
      </template>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    onLogout() {
      this.$store.dispatch("logOut");
      this.$route.push("/");
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Orders", icon: "mdi-key", url: "/orders" },
          { title: "New", icon: "mdi-new-box", url: "/new" },
          {
            title: "List",
            icon: "mdi-format-list-bulleted-square",
            url: "/list"
          }
        ];
      }

      {
        return [
          { title: "Login", icon: "mdi-star", url: "/login" },
          { title: "Registration", icon: "mdi-lock", url: "/registration" }
        ];
      }
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>

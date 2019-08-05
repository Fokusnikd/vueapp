<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary">New ad</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            v-model="title"
            :rules="[v=> !!v|| 'Title is required']"
            required
          ></v-text-field>

          <v-textarea
            label="Discription"
            name="discription"
            type="text"
            v-model="discription"
            rows="1"
            :rules="[v=> !!v|| 'Discription is required']"
            required
            auto-grow
          ></v-textarea>
        </v-form>
        <v-layout wrap class="mb-3">
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="warning">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs12>
            <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="200" />
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs12>
            <v-switch v-model="promo" label="Add to promo"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" @click="createAd">Create</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      title: "",
      discription: "",
      promo: false,
      valid: false
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          discription: this.discription,
          promo: this.promo,
          src: "https://cdn.shazoo.ru/309070_dYM2kid3qv_19_12.jpg"
        };
        this.$store.dispatch("createAd", ad);
      }
    }
  }
};
</script>


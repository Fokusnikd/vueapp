<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center wrap>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" validation>
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account-circle"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :rules="passwordRules"
                :counter="8"
                requied
              ></v-text-field>
              <v-text-field
                label="confirmPassword"
                name="confirmPassword"
                prepend-icon="mdi-lock"
                type="password"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                :counter="8"
                requied
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              dark
              @click="onSubmit"
              :loading="loading"
              :disabled="!valid||loading"
            >Create account</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Name must be less than 8 characters"
      ],
      confirmPasswordRules: [
        v => !!v || "Password is required",
        v => v === this.password || "Passwords should match"
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("registerUser", user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(err => console.log(err));
      }
      //logic
    }
  }
};
</script>
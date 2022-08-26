<template>
  <NavBar :authenticated="authenticated"/>
  <div class="auth">
    <div class="auth-from">
      <h1>Login</h1>
      <form class="form" method="post">
        <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        <my-input
          id="email"
          label="Email"
          type="email"
          required
          autocomplete="username"
          v-model.trim="email"
        />

        <my-input
          id="password"
          label="Password"
          type="password"
          required
          autocomplete="new-password"
          v-model.trim="password"
        />

        <my-button
          title="Login"
          :click="submitLogin"
          type="submit"
        />

        <p class="no-profile">
          No profile yet?
          <router-link to="/register" class="link">Sign up here</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/atoms/MyButton.vue";
import MyInput from "../components/atoms/MyInput.vue";
import NavBar from "../components/organisms/NavBar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { MyInput, MyButton, NavBar },
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    errors() {
      if (!this.submitted) return;

      let errors = [];

      if (!this.email) errors.push("Email is required");

      if (!this.password) errors.push("Password is required");

      if (this.error) errors.push(this.error);

      return errors;
    },
    ...mapGetters({
      authenticated: "auth/authenticated",
      error: "auth/error",
      isLoading: "auth/isLoading",
    }),
  },
  methods: {
    ...mapActions({
      login: "auth/login",
      emptyError: "auth/emptyError",
    }),
    async submitLogin() {
      this.submitted = true;

      if (this.errors.length === 0) {
        await this.login({
          email: this.email,
          password: this.password,
        });
      }
    },
  },
  watch: {
    authenticated() {
      this.$router.push({ name: "home" });
    },
    email() {
      this.emptyError();
    },
    password() {
      this.emptyError();
    },
  },
  created() {
    this.emptyError();
  }
};

</script>

<style scoped lang="scss">
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
</style>

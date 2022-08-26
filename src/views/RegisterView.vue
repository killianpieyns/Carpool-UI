<template>
  <NavBar :authenticated="authenticated"/>
    <div class="register-form">
      <h1>Register</h1>
      <form class="login-form" method="post">
        <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        <my-input
          id="name"
          label="Name"
          type="text"
          required
          autocomplete="name"
          v-model.trim="name"
        />

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

        <my-input
          id="password-confirmation"
          label="Confirm password"
          type="password"
          required
          autocomplete="new-password"
          v-model.trim="password_confirmation"
        />

        <my-button
          title="Register"
          :click="submitRegister"
          type="submit"
          :disabled="isLoading"
        />
        <p class="no-profile">
          Already signed in?
          <router-link to="/login" class="link">Login here</router-link>
        </p>
      </form>
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      submitted: false,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      error: "auth/error",
      isLoading: "auth/isLoading",
    }),
    errors() {
      if (!this.submitted) return;

      let errors = [];

      if (!this.name) errors.push("Name is required");

      let emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

      if (!this.email) errors.push("Email is required");
      else if (!emailRegex.test(this.email)) {
        errors.push(
          "The email provided does not follow the pattern name@domain.extension"
        );
      }

      if (!this.password) errors.push("Password is required");
      else if (this.password !== this.password_confirmation) {
        errors.push("Passwords do not match");
      }

      if (this.error) errors.push(this.error);

      return errors;
    },

  },
  methods: {
    ...mapActions({
      register: "auth/register",
      emptyError: "auth/emptyError",
    }),
    async submitRegister() {
      this.submitted = true;

      if (this.errors.length === 0) {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });
      }
    },
  },
  watch: {
    authenticated() {
        this.$router.push({ name: "home" });
    },
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

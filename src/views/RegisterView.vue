<template>
  <NavBar />
  <div class="auth">
    <div class="auth-from">
      <h2>Register</h2>
      <form class="login-form" method="post">
        <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        <my-input
          id="voornaam"
          label="Voornaam"
          type="text"
          required
          autocomplete="John"
          v-model.trim="email"
        />

        <my-input
          id="achternaam"
          label="Achternaam"
          type="text"
          required
          autocomplete="Doe"
          v-model.trim="email"
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
          label="Password Comfirmation"
          type="password"
          required
          autocomplete="new-password"
          v-model.trim="password"
        />

        <my-button
          title="Register"
          :click="tryRegister"
          type="submit"
          :disabled="isLoading"
        />
        <p class="no-profile">
          Already signed in?
          <router-link to="/login" class="link">Login here</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/atoms/MyButton.vue";
import MyInput from "../components/atoms/MyInput.vue";
import NavBar from "../components/organisms/NavBar.vue";

export default {
  components: { MyInput, MyButton, NavBar },
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
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

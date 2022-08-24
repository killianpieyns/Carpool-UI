<template>
  <NavBar/>
  <div class="auth">
    <div class="auth-from">
      <h2>Login</h2>
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
          :click="tryLogin"
          type="submit"
          :disabled="isLoading"
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
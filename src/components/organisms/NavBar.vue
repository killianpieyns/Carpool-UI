<template>
  <header>

    <h1 class="logo"><router-link :to="{ name: 'home' }" class="link">Carpool</router-link></h1>
    <nav>

      <ul class="nav__links">
        <li>
          <router-link :to="{ name: 'home' }" class="link">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'rides' }" class="link">Rides</router-link>
        </li>
        <li v-if="!this.authenticated">
          <router-link :to="{ name: 'login' }" class="link">Login</router-link>
        </li>
        <li v-if="!this.authenticated">
          <router-link :to="{ name: 'register' }" class="link">Register</router-link>
        </li>
      </ul>
    </nav>
    <a href="#main-content" class="skiplink"> Skip to main content </a>
    <div class="user" v-if="this.authenticated">
          {{ user.name }}
      </div>
    <div class="logout" v-if="this.authenticated">
        <my-button @click="this.logout" title="Logout" />
    </div>

  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MyButton from "../atoms/MyButton.vue";


export default {
  components: {MyButton},
  props:{
    authenticated: {
      type: Boolean,
      required: true
    }
  },
  computed: {
      ...mapGetters({
        user: "auth/user",
      })
  },
  methods: {
    ...mapActions({
        logout: "auth/logout",
    }),
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #24252A;
}

li, .link, .skiplink, button {
  font: 500 "Montserrat" sans-serif 16px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  height: 1px;
}

.logo {
  cursor: pointer;
  color: #edf0f1;
}

.nav__links {
  list-style: none;

  & li {
    display: inline-block;
    padding: 0px 20px;

    .link{
      transition: all 0.3s ease 0s;

      &:hover {
        color: #0088a9;
      }
    }
  }
}

a .skiplink {
  margin-left: 20px;
  padding: 9px 25px;
  background-color: rgba(0,136,169,1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: rgba(0,136,169,0.8);
  }
}

.user {
  color: #edf0f1;
}

</style>

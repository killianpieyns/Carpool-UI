<template>
  <nav>
    <a href="#main-content" class="skiplink"> Skip to main content </a>
    <div class="header-nav">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'rides' }">Rides</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'register' }">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MyButton from "../atoms/MyButton.vue";

export default {
  components: { MyButton },
};
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 1rem;
  border-bottom: solid #e0e0e0 1px;
  filter: drop-shadow(0px 2px 3px rgba(150, 150, 150, 0.25));

  .header-nav {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      padding: 0;
      list-style: none;

      .small-logo {
        margin-right: 2.5rem;
      }

      li {
        margin-right: 2rem;

        a {
          color: #969696;
          text-decoration: none;
        }

        a:hover,
        .active {
          color: #000000;
        }
      }
    }

    .logout {
      margin: 0;
    }
  }
}
</style>

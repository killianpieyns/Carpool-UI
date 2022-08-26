<template>
  <NavBar :authenticated="authenticated"/>
  <div id="Container">
    <MyMap />
  </div>
</template>

<script>
import MyMap from "../components/molecules/MyMap.vue";
import NavBar from "../components/organisms/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyMap, NavBar },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
  watch: {
    authenticated() {
      this.$router.push({ name: "login" });
    },
  },

};
</script>

<style scoped lang="scss">

</style>

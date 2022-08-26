<template>
  <nav-bar :authenticated="authenticated"/>
  <my-loader v-if="isLoading" />
  <div id="main-content">
    <h1>Rides</h1>
    <my-table v-if="this.errors == 0" class="myTable" :fields="fields" :rides="rides" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NavBar from "../components/organisms/NavBar.vue";
import MyTable from "../components/molecules/MyTable.vue";
import MyLoader from "../components/atoms/MyLoader.vue";


export default {
  name: "App",
  components: { NavBar, MyTable, MyLoader },
  data() {
    return {
      fields: ['id', 'user_id', 'time_departure', 'time_arrival', 'latitude_departure', 'longitude_departure', 'latitude_arrival', 'longitude_arrival', 'status', 'type', 'action'],
    }
    
  },
  computed: {
    ...mapGetters({
      rides: "rides/rides",
      isLoading: "rides/isLoading",
      errors: "rides/errors",
      authenticated: "auth/authenticated"
    }),
  },

  methods: {
    ...mapActions({
      fetchRides: "rides/fetchRides",
    }),
  },
  created() {
    this.fetchRides();
  },
  watch: {
    authenticated() {
      this.$router.push({ name: "login" });
    },
  }

};
</script>

<style scoped lang="scss">
  a.skiplink {
    position: absolute;
    top: -100%;
    left: 0;

    &:focus {
      top: 0;
    }
  }

#main-content{
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
        
</style>

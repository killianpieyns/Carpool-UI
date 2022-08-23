<template>
  <NavBar/>
  <div id="Container">
    <MyMap />
  </div>
</template>

<script>
import MyMap from "../components/molecules/MyMap.vue";
import NavBar from "../components/organisms/NavBar.vue";

export default {
    components: { MyMap, NavBar },
  };
</script>

<style scoped></style>

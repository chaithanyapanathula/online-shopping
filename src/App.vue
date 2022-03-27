<template>
  <div id="app" >
    <TheNavigation />
    <router-view> </router-view>
    <br>
    <br>
    <footerDetails />
  </div>
</template>

<script>
import TheNavigation from "./components/Navigation.vue";
import footerDetails from "./components/footerDetails.vue";
export default {
  name: "App",
  components: {
    TheNavigation,
    footerDetails,
  },
};

</script>

<style>
#app {
  background-color:white;
 
}
</style>

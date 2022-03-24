<template>
  <div class="cardsBox">
    <div class="card">
      <router-link :to="{ name: 'HomePage' }"
        ><div>
          <img
            src="./images/petrol.jpg"
            alt="PETROL"
            style="width: 300px; height: 300px"
          />
          <div class="container">
            <h4><b>PETROL</b></h4>
          </div>
        </div></router-link
      >
    </div>
    <div class="card">
      <router-link :to="{ name: 'HomePage' }"
        ><div>
          <img
            src="./images/diesel.jpg"
            alt="DIESEL"
            style="width: 300px; height: 300px"
          />
          <div class="container">
            <h4><b>DIESEL</b></h4>
          </div>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "fuelPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
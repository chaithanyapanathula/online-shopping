<template>
  <div>
    <SliderShow />
    <hr />
    <div class="productsheading">OUR PRODUCTS</div>
    <br />
    <div class="cardsBox">
      <div class="card">
        <router-link class='routerLink' :to="{ name: 'ProductComponent' }"
          ><div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/assets.hplubricants/s3fs-public/automotive-1.png"
              alt="LUBRICANT"
              style="width: 250px; height: 150px"
            />
            <div class="container">
              <h4><b>LUBRICANT</b></h4>
            </div>
             <p>
          A lubricant is a substance that helps to reduce friction between
          surfaces in mutual contact.
        </p>
          </div></router-link
        >
       
      </div>
      <div class="card">
         <router-link  class='routerLink' :to="{ name: 'fuelPage' }"  >
       
       
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/assets.hplubricants/s3fs-public/specialities-1.png"
              alt="FUEL"
              style="width: 250px; height: 150px"
            />
            <div class="container">
              <h4><b>FUEL</b></h4>
            </div>
             <p>
          An energy source for engines, power plants, or reactors: Kerosene is
          used as jet engine fuel.
        </p>
          </div></router-link 
        >
      </div>
    </div>
    <br />
    <br />
    <marquee> We are available all over India 24/7*. </marquee>
    <br />
    <hr />
    <div class="productsheading">OUR MOBILE APPLICATION</div>
    <br>
    <br>
    <div class="video">
      <iframe
        width="700"
        height="350"
        src="https://www.youtube.com/embed/0IkIiDVP-QQ?playlist=0IkIiDVP-QQ&autoplay=1&controls=0&loop=1&mute=1"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import SliderShow from "./SliderShow.vue";

export default {
  name: "HomePage",
  components: {
    SliderShow,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.cardsBox {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 50%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.video {
  margin-left: 20px;
}
.heading {
  justify-content: center;
}
.productsheading {
  color: rgb(92, 87, 87);
  font-family: "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
}
.card:hover {
  background-color: rgb(184, 198, 202);
}
.routerLink{
     text-decoration: none;
 }
</style>
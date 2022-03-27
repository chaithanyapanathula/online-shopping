<template>
  <div class="cartProductsdetails">
    <div class="cartProductDetail">
    <img class="photo" :src="cart.imgurl" alt="" />

    <p class="category details">CATEGORY: {{ cart.catogoryName }}</p>

    <p class="id details">ID: {{ cart.productId }}</p>

    <p class="price details">PRICE: ${{ cart.price }}</p>

    <button class="cart-btn" @click="Checkout()">Check Out</button>
    </div>
  </div>



</template>

<script>
export default {
  name: "CartPage",
   created() {
    const cartId = this.$route.params.id;
    console.log(cartId)

    this.axios
      .get(`http://10.20.2.214:8087/cart?userId=${cartId}`)
      .then((resp) => {
        this.cart = resp.data;
      });
   console.log("hlo");
    console.log(this.cart);
  },

  data() {
    return {
      cart: {},
     
    };

  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
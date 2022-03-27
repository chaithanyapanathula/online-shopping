<template>
  <div style="padding: 25px">
    <div class="container">
      <div class="row">
        <div
          class="ProductDetails"
          v-for="product in products"
          :key="product.productid"
        >
          <img :src="product.imgurl" class="product-image" />
          <div class="productname">Name:{{ product.name }}</div>
          <div class="productrate">Rating:{{ product.rating }}</div>
          <div class="productprice">Price:{{ product.price }}</div>
          <div class="row">
            <button class="" @click="handleProductClick(product.productid)"> Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductComponent",
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  components: {},
  methods: {
    ...mapActions(["getProducts"]),

    fetchPosts() {
      this.getProducts();
    },
    handleProductClick(postId){

this.$router.push(`DetailsComponent/${postId}`)

console.log(postId)

}
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 20px;
  
}
.ProductDetails {
  background-color: lavenderblush;
  text-align: center;

  
}
img {
  height: 250px;
  width: 250px;
}
.cartButton {
  background-color: lavender;
}
</style>
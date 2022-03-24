<template>
  <div style="padding: 25px">
    <div class="container">
      <div class="row">
        <div
          class="ProductDetails"
          v-for="product in products"
          :key="product.id"
        >
          <img :src="product.imgurl" class="product-image" />
          <div class="productname">Name:{{ product.name }}</div>
          <div class="productrate">Rating:{{ product.rating }}</div>
          <div class="productprice">Price:{{ product.price }}</div>
          <div class="row">
            <router-link
              tag="button"
              class="cartButton"
              :to="'/details/' + product.id"
              >DETAILS</router-link
            >
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
.product-image {
  max-height: 300px;
  max-width: 300px;
}
.cartButton {
  background-color: lavender;
}
</style>
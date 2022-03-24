<template>
  <div class="card mb-4 shadow-sm">
    <img :src="product.imageUrl" class="card-img-top product-image" />
    <div class="card-body">
      <h5 class="card-title text-left">{{ product.name }}</h5>
      <div class="row">
        <router-link
          type="button"
          class="btn btn-primary btn-lg"
          :to="'/details/' + product.id"
        >details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "ProductCard",
    props: ["product"],
    

  methods: {
    ...mapActions("products", ["Productcomponent"]),
  },
};

</script>

<style scoped>
.card .product-image {
  height: 300px;
}
</style>
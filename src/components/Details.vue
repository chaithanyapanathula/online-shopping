<template>
  <div>
    <img class="photo" :src="post.imgurl" alt="" />

    <p class="category details">Category: {{ post.content }}</p>

    <p class="id details">{{ post.id }}</p>

    <p class="title details">{{ post.title }}</p>

    <p class="price details">Price: ${{ post.price }}</p>

    <button class="cart-btn" @click="addToCart()">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "DetailsComponent",

  created() {
    const postId = this.$route.params.id;

    this.axios.get(`http://localhost:8081/product/productbyid?id=${postId}`).then((resp) => {
      this.post = resp.data;
    });

    console.log(this.post);
  },

  data() {
    return {
      post: {},
    };
  },
};
</script>
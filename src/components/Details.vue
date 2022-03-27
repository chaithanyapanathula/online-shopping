<template>
  <div class="productsdetails">
    <div class="productDetailIndividual">
    <img class="photo" :src="post.imgurl" alt="" />

    <p class="category details">CATEGORY: {{ post.category }}</p>

    <p class="id details">ID: {{ post.productid }}</p>

    <p class="title details">DESCRIPTION: {{ post.description }}</p>

    <p class="price details">PRICE: ${{ post.price }}</p>

    <button class="cart-btn" @click="addToCart(post.productid)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsComponent",

  created() {
    const postId = this.$route.params.id;
    console.log(postId)

    this.axios
      .get(`http://localhost:8080/product/byId?id=${postId}`)
      .then((resp) => {
        this.post = resp.data;
      });
    console.log(this.post);
  },

  data() {
    return {
      post: {},
     
    };

  },
  methods: {
   

    
    addToCart(Id){

this.$router.push(`CartPage/${Id}`)

console.log(Id)

}
  },
};
</script>
<style scoped>
.productsdetails{
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
   
  background-color: white;
  padding: 2px 16px;
  


  

}
.productsdetails:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.productDetailIndividual{
  
  max-width: 400px;
 
  text-align: center;
 
  

}
.cart-btn{
 
  
  margin-right: auto;
  padding: 15px 30px;
  border: none;
  background-color: #555;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 60px;
}

.cart:hover {
  background-color:  #555;
  transform: translateY(-2px);
}
p{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}




</style>
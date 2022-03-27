<template>

<div class="signupFrm">
  <form @submit="postdata" method="post" class="form">
      <label>Id</label><br><br>
      <input type="text" name="id"  placeholder="id" v-model="posts.id" ><br><br>
      <label>Merchant_id</label><br><br>
      <input type="text" name="merchant_id"  placeholder="merchant_id" v-model="posts.merchant_id"><br><br>
      <label>Product_id</label><br><br>
      <input type="text" name="product_id"  placeholder="product_id" v-model="posts.product_id"><br><br>
      <label>Product_name</label><br><br>
      <input type="text" name="product_name"  placeholder="product_name" v-model="posts.product_name"><br><br>
      <label>ImageUrl</label><br><br>
      <input type="text" name="ImageUrl"  placeholder="ImageUrl" v-model="posts.ImageUrl"><br><br>
      <label>Description</label><br><br>
      <input type="text" name="Description"  placeholder="Description" v-model="posts.Description"><br><br>
      <label>Price</label><br><br>
      <input type="text" name="price"  placeholder="Price" v-model="posts.price"><br><br>
      <label>Stock</label><br><br>
      <input type="text" name="stock"  placeholder="stock" v-model="posts.stock" ><br><br>
    
      <button class ="signupbutton" type="submit" @click="submit">Submit</button>

  </form>
</div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios)
export default {
 name:'MerchantComponentPage',
 data()
 {
 return {
     posts:{
        //  id:null,
         product_id:null,
         product_name:null,
         ImageUrl:null,
         Description:null,
         merchant_id:null,
         price:null,
         stock:null,
       
     }
 }
 },
 methods:{
     postdata(e)
     {  
         this.axios.post("http://10.20.2.213:8085/merchant/add1",this.posts)
         .then((result) => console.warn(result))  
         e.preventDefault();
     },
     submit()
     {
         alert("Your Product Has been Successfully Added .....Thank You...Visit Again ")
     },

 }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.signupFrm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form {
  background-color: white;
  width: 400px;
  border-radius: 10px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  text-align: center;
  font-size: 16px;
}

::placeholder {
  color: transparent;
}
.label {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: #dadce0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
}

.signupbutton {
  
  background-color: purple;
  color: white;
  border: none;
  font-size: 16px;
   cursor: pointer;
   margin-top: 40px;
   border-radius: 6px;
   padding: 15px 30px;
    margin-right: auto;
   
}

.signupbutton:hover {
  background-color: #9867c5;
  transform: translateY(-2px);
}

</style>
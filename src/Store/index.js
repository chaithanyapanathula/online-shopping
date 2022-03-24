//import axios from "axios"
import Vue from 'vue'
const store={
    state:{
       
            products: [],
            product: {},
            cart: []
          
    },
    getters:{
         products (state) {
            return state.products
        },
        
       product (state) {
            return state.product
        },
        
         cart (state) {
             return state.cart
        },
        
    },
    mutations:{
         setProducts(state, val) {
            state.products = val
        },
        
        setProduct(state, val) {
            state.product = val
        },
        
        setLoad(state, val) {
            state.uploadingData = val
        },
        
        setCart(state, val) {
            state.cart = val
        },
        


    },
    actions:{


       

getProducts({ commit }) {
    let url = "http://localhost:8081/product/products";
    Vue.axios.get(url).then((response) => {
        commit("setProducts", response.data);
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
},

 productDetails({ commit }, id) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    Vue.axios.get(url, { params: { id: id } }).then((response) => {
        commit("setProduct", response.data[0]);
    }).catch(function (error) {
        console.log(error);
    });
},

addCart({ commit, getters }, payload) {
    let cart = getters.cart
    let data = payload.product
    data["quantity"] = payload.quantity
    cart.push(data)
    commit("setCart", cart)
},

 removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
},

    }

}

export default store
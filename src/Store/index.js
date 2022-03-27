//import axios from "axios"
import Vue from 'vue'
const store={
    state:{
       
            products: [],
            Login: {},
            cart: []
          
    },
    getters:{
         products (state) {
            return state.products
        },
        
       Login (state) {
            return state.Login
        },
        
         cart (state) {
             return state.cart
        },
        
    },
    mutations:{
         setProducts(state, val) {
            state.products = val
        },
        
        setLogin(state, val) {
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
    let url = "http://localhost:8080/product/products";
    Vue.axios.get(url).then((response) => {
        commit("setProducts", response.data.data);
        console.log(response.data.data);
    }).catch(error => {
        console.log(error);
    });
},

 loginDetails({ commit }, username,password) {
    let url = "http://10.20.2.213:8083/api/auth/signin";
    Vue.axios.get(url, { params: { username,password } }).then((response) => {
        commit("setLogin", response.data);
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
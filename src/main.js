
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import routes from '@/Router'
import store from './Store'
Vue.use(Vuex);
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({ 
    store: new Vuex.Store(store), 
    router: new VueRouter({ routes, mode: 'history' }), 
    render: h => h(App), 
}).$mount('#app')




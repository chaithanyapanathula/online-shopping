
import lubricantPage from "../components/lubricant"
import fuelPage from "../components/fuel"
import HomePage from "../components/HomePage"
import AboutPage from "../components/AboutPage"
import UserLogin from "../components/UserLogin"
import ContactPage from "../components/ContactPage"
import CartPage from "../components/CartPage"
import LoginPortal from "../components/LoginPortal"
import SellerLogin from "../components/Sellerlogin"

import ProductComponent from "../components/Product"
import UserSignup from "../components/UserSignup"
import SellerSignup from "../components/SellerSignup"
import DetailsComponent from "../components/Details"
import MerchantComponentPage from "../components/MerchantDetails"

const routes=[
    {
        name:"HomePage",
        component:HomePage,
        path:"/"
    },
   
    {
        name:"lubricantPage",
        component:lubricantPage,
        path:"/lubricantPage"
    },
    {
        name:"fuelPage",
        component:fuelPage,
        path:"/fuelPage"
    },
    {
        name:"AboutPage",
        component:AboutPage,
        path:"/AboutPage"
    },
    {
        name:"UserLogin",
        component:UserLogin,
        path:"/UserLogin"
    },
    {
        name:"SellerLogin",
        component:SellerLogin,
        path:"/SellerLogin"
    },

    {
        name:"LoginPortal",
        component:LoginPortal,
        path:"/LoginPortal"
    },
    {
        name:"ContactPage",
        component:ContactPage,
        path:"/ContactPage"
    }
    ,
    {
        name:"CartPage",
        component:CartPage,
        path:"/CartPage/:id"
    },
    {
        name:"ProductComponent",
        component:ProductComponent,
        path:"/ProductComponent"
    },
    
    {
        name:"UserSignup",
        component:UserSignup,
        path:"/UserSignup"
    },
    {
        name:"SellerSignup",
        component:SellerSignup,
        path:"/SellerSignup"
    },
    {
        name:"DetailsComponent",
        component:DetailsComponent,
        path:"/DetailsComponent/:id"
    },
    {
        name:"MerchantComponentPage",
        component:MerchantComponentPage,
        path:"/MerchantComponentPage"
    },
];

export default routes
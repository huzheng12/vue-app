import Vue from 'vue'
import VueRouter from 'vue-router'

import Vant from 'vant';
Vue.use(Vant);

import Home from './views/Home.vue'
Vue.use(VueRouter)

const router=new VueRouter({
    routes:  [
        {path:"/",redirect:{name:'guide'}},
        {path:'/guide',name:'guide',component:()=>import("@/views/guide.vue")},
        {path:'/index',name:'index',component:()=>import("@/views/index.vue"),
        children:[
            {path:'home',name:'home',component:Home},
            {path:'cart',name:'cart',component:()=>import("@/views/cart.vue")},
            {path:'classify',name:'classify',component:()=>import("@/views/classify.vue")},
            {path:'my',name:'my',component:()=>import("@/views/my.vue")},

        ]
    },
    {path:'/search',name:'search',component:()=>import("@/views/search.vue")},
    {path:'/login',name:'login',component:()=>import("@/views/login.vue")},
    {path:'/good/detail/:goodId',name:'good',component:()=>import("@/views/good.vue")},
    {path:"*",redirect:{name:'home'}}
],
mode:"hash",
base:'/'

})
  
    

export default router


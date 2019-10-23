import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Head from "@/components/head.vue";
Vue.component('Head',Head);

import Foot from "@/components/foot.vue";
Vue.component('Foot',Foot);

import Swiper from "@/components/swiper.vue";
Vue.component('Swiper',Swiper);

import List from "@/components/list.vue";
Vue.component('List',List);

import "@/styles/index.scss";

import { bus } from "@/utils/bus.js";

import ajax from "@/utils/ajax.js"
Vue.prototype.$axios=ajax

new Vue({
  router,
  watch: {
    "$route":function(to){
      console.log(to)
      bus.$emit("active",to.name)
    }
  },
  store,
  render: h => h(App)
}).$mount('#app')

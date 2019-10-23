<template>
    <div class="foot">
       <van-tabbar v-model="active" fixed>
  <van-tabbar-item :icon="a.icon" v-for="(a,i) in arr" :key="i" :to="{name:a.name}" :name="a.name">{{a.txt}}</van-tabbar-item>

</van-tabbar>
       
    </div>
</template>

<script>
import { bus } from "@/utils/bus.js";
export default {
    name:'Foot',
      data() {
    return {
        arr:[
            {txt:"首页",path:"/index/home",name:"home",icon:"friends-o"},
            {txt:"分类",path:"/index/classify",name:"classify",icon:"send-gift-o"},
            {txt:"购物车",path:"/index/cart",name:"cart",icon:"shopping-cart-o"},
            {txt:"我",path:"/index/my",name:"my",icon:"manager-o"}
        ],
      active: 'home',
    }
  },
    
    mounted() {
    this.active=this.$route.name
    // console.log(this.$route)
    bus.$on('active',res=>{
        this.active=res
    })
    },
    
}
</script>
<style lang="scss" scoped>
.foot{
  position: relative;
 height: 50px;
}
</style>

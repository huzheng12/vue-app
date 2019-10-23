<template>
    <div class="list_move">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul v-if="goods.length>0">
            <router-link to=""></router-link>
            <li v-for="(a,i) in goods" :key="i">
           
            <Item :a="a"></Item>
            </li>
        </ul>
        </van-pull-refresh>
    </div>
</template>
 <script>
 import Item from "./Item"
export default {
    components:{
        Item
    },
    name:'List',
    props:["goods"],

      data() {
    return {
      isLoading: false
    }
  },

  methods: {
    onRefresh() {
        setTimeout(() => {
        this.goods=this.goods.reverse()
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  }
}
</script>
<style lang="scss" scoped>
.list_move{
    // animation: zoomInDown .8s;
    animation: zoomInDown .8s;
}
</style>

<template>
    <div>
        <Head title="分类"></Head>
    <van-tabs v-model="active" animated >
  <van-tab :title="a.type.text" v-for="(a,i) in data.types" :key="i">
              <List 
              :goods="data.types.filter(item=>item.type.text==a.type.text)"
              ></List>
      
  </van-tab>
</van-tabs>

    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    name:'classify',
    data() {
        return {
            active:2,
           
        }
    },
    computed: {
        ...mapState(["data"])
    },
    methods: {
       ...mapActions(['getType'])
    },
    mounted() {
        console.log(this.$store)  
        this.getType({
                url:"/vue/getGoods"
            })
    },
}
</script>
<style lang="css" scoped>
 .van-tabs__wrap {
    position: fixed;
    top: 46px;
    right: 0;
    left: 0;
    z-index: 99;
    overflow: hidden;
}
</style>

<template>
    <div>
        <Head title="搜索"></Head>
   <van-search
   
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action   
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch" >搜索</div>
</van-search>
   <List :goods="goods"></List>
    </div>
</template>
<script>

export default {
    name:'Search',
   
    data() {
        return {
            value:"",
            goods:[]
        }
    },
    methods: {
        onSearch(){
        
            this.$axios.get('/vue/getGoods',{
                params:{keyword:this.value}
                }).then(res=>{
                    console.log(res)
                    this.goods=res.data.result
                })
            // this.value=""
            },
        
    },
}
</script>
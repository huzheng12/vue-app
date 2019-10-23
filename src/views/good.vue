<template>
    <div>
        <Head :title="$route.query.name"></Head>

         <img :src="good.data.result.img" alt="" width="100%" height="50%">
            <h1>{{good.data.result.name}}-----{{good.data.result.type.text}}</h1>
            <p>价格：￥{{good.data.result.price}}</p>
            <van-goods-action>
             <van-goods-action-button
                type="warning"
                text="加入购物车"
                 @click="onClickButton"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                 @click="onClickButton"
            />
            </van-goods-action>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    name:'good',
    data() {
        return {
            good:{}
        }
    },
    mounted() {
        this.$axios.get('/vue/goodOne',{
            params:{
                goodId:this.$route.params.goodId
            }
        }).then(res=>{
            this.good=res
        })
    },
    methods: {
        onClickIcon() {
      
    },
    onClickButton() {
      Dialog.confirm({
  title: '提示',
  message: '是否跳转购物车'
}).then(() => {
  this.$router.push({name:'cart'})
}).catch(() => {
  // on cancel
});
    }
    },
}
</script>
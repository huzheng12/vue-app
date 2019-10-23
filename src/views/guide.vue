<template>
    <div>


<van-swipe :autoplay="3000" indicator-color="white" :loop="false" class="guide">
    <van-swipe-item v-for="(img,i) in imgs" :key="i">
      <img :src="img.src" alt="" @click="loge(i)">
  </van-swipe-item>
</van-swipe>


    </div>
</template>

<script>

export default {
    name:'guide',
    data() {
        return {
            imgs:[
                {src:require('@/assets/images/girlbig1.jpg')},
                {src:require('@/assets/images/girlbig2.jpg')},
                {src:require('@/assets/images/girlbig3.jpg')},
                {src:require('@/assets/images/girlbig4.jpg')}
            ]
        }
    },
    methods: {
        loge(id){
            if(id==this.imgs.length-1){
                this.$router.push({name:'home'})
            }
        }
    },
    mounted() {
        if(localStorage.visitCount){
            localStorage.visitCount++;
            if(localStorage.visitCount>3){
                this.$router.push({name:'home'})
            }
        }else{
            localStorage.visitCount = 1;
        }
    },
}
</script>

<style lang="scss" scoped>

.guide{
    width: 100%;
    height: 100%;
    img{
        width: 100%;
    height: 100%;
    }
}

</style>

<template>
    <div>
        <Head title="我的"></Head>

         <div v-if="islogin">
            <upload></upload>
            <h2 >username</h2>
        </div>
        <div v-else>
            <van-button type="info" @click="gologin">马上登陆</van-button>
        </div>

        <Swiper id="banner" :options="options" >
            <div class="swiper-slide" v-for="(a,i) in banner" :key="i">
                <img :src="a.src" alt="">
                </div>
        </Swiper>
        <Swiper id="banner1" :options="options" >
            <div class="swiper-slide" v-for="(a,i) in movie" :key="i">
                <img :src='a.images.large' alt="">
             
                </div>
        </Swiper>
   
    </div>
</template>

<script>
import upload from "@/components/uploadImg.vue"
import { Toast } from 'vant';
export default {
    name:'my',
    components:{
        upload
    },
    data() {
        return {
            islogin:sessionStorage.user,
            

            options:{
                  autoplay: {
        delay: 1000,//1秒切换一次
      },
      loop:true,
                effect : 'cube',
    cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 100,
    shadowScale: 0.6
            },
            
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
            },

            banner:[
                {src:require('@/assets/images/girlbig1.jpg')},
                {src:require('@/assets/images/girlbig2.jpg')},
                {src:require('@/assets/images/girlbig3.jpg')},
                {src:require('@/assets/images/girlbig4.jpg')}
            ],
            movie:[],
        }
    },
    methods: {
        gologin(){
           
            this.$router.push({name:'login'})
        }
    },
    mounted() {
        Toast.loading({
  mask: true,
  message: '加载中...',
  mask:false
});
        this.$axios.get("/vue/movie",{
            params:{ limit:10}
        }).then( (res)=> {
          console.log(res.data.result)
             this.$nextTick(()=>{
                 this.movie=res.data.result;
             })
           
        })
    },

}
</script>

<style lang="sass" scoped>

</style>

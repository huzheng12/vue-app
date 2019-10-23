<template>
    <div class="aaaa">
      
         <div class="swiper-container" :id="id" >
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        </div>

    </div>
</template>

<script>
export default {
    name:'Swiper',
    props:["id",'options'],
    mounted() {
         var mySwiper = new Swiper ('#'+this.id,this.options)
    },
    updated() {
        this.$nextTick(()=>{

            var mySwiper = new Swiper ('#'+this.id,this.options)
        })
    },
}
</script>

<style lang="css" scoped>
       .swiper-container {
        width: 60%;
    height: 60%;
}  
.swiper-container img{
    width: 100%;
    height: 100%;
}

</style>

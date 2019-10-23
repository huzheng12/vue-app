<template>
    <div class="head">
       <van-nav-bar :title="title" left-text="返回" @click-left="onClickLeft" @click-right="onClickRight" fixed>
  <van-icon name="search" :slot="right" />
</van-nav-bar>
    </div>
</template>

<script>
export default {
    name:'Head',
    props:["title",'show'],
    data() {
        return {
            right:'right'
        }
    },
    methods: {
      onClickLeft(){
          history.go(-1)
      },
      onClickRight(){
          this.$router.push({name:'search'})
      }
    },
    mounted() {
        if(this.$route.name=='search'){
           this.right=""
        }
        
    },
}
</script>

<style lang="scss" scoped>
.head{
    position: relative;
  height: 46px;
}
</style>

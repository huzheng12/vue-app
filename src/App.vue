<template>
  <div id="app">
    <transition :name="transitionName">
    
    <router-view class="main-box" ></router-view>
    </transition>

  </div>
</template>
<script>
export default {
  watch: {
    "$route":function(to,from){
      var tolength=to.path.split('/').length;
      var fromLength=from.path.split('/').length;
      // console.log(tolength)
      // console.log(fromLength)
      this.transitionName=tolength>fromLength?"slide-detail":'slide-list'
    }
  },
 data() {
   return {
     transitionName:'slide-detail'
   }
 },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

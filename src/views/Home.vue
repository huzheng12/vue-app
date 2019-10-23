<template>
  <div class="home">
    <Head title="首页"></Head>
    <img alt="Vue logo" src="../assets/logo.png" v-if="false">
    <hr>
    <Demo></Demo>
  </div>
</template>

<script>
// @ is an alias to /src
import Demo from '@/components/demo.vue'

export default {
  name: 'home',
  components: {
    Demo
  }
}
</script>

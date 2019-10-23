<template>
    <div>
        <Head title="登陆/注册"></Head>
        <van-tabs type="card">
  <van-tab title="登陆">
      <van-cell-group>
  <van-field v-model="login.username" placeholder="请输入用户名" label="用户名"/>
</van-cell-group>
<van-cell-group>
  <van-field v-model="login.password" placeholder="请输入密码 " label="密码" type="password"/>
</van-cell-group>
<van-button type="primary" size="large" @click="denglu">登陆</van-button>
  </van-tab>

  <van-tab title="注册">
          <van-cell-group>
  <van-field v-model="register.username" placeholder="请输入用户名" label="用户名"/>
</van-cell-group>
<van-cell-group>
  <van-field v-model="register.password" placeholder="请输入密码 " label="密码" type="password"/>
</van-cell-group>
<van-button type="primary" size="large">注册</van-button>
  </van-tab>
</van-tabs>
    </div>
</template>

<script>
export default {
    name:'login',
    data() {
        return {
           
            login:{},
            register:{}
        }
    },

    methods: {
      denglu(){


        console.log(this.login)
        this.$axios.post('/vue/login',this.login).then(res=>{

          alert(res.data.msg);
          if(!!res.data.type){
            sessionStorage.user=JSON.stringify({token:res.data.token})
            this.$router.push({name:"my"})
          }else{
            this.login={}
            this.register={}
            sessionStorage.removeItem('user')
          }
         
        })
      }
    },


}
</script>
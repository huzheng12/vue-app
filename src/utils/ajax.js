


import axios from "axios";

// axios.defaults.baseURL="http://localhost:1902/";

import { Toast } from 'vant';

var token="";
axios.defaults.withCredentials=false;
axios.defaults.headers.common['token'] = token;   //请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

import router from "@/router"
//请求拦截器
axios.interceptors.request.use(function(config){
    let user=window.sessionStorage.user||'';
    if(user){
        user=JSON.parse(user)
    }
    let token=user.token
    config.headers.common['token'] = token;
    
    // ajax请求发送之前
    Toast.loading({
        mask: true,
        message: '加载中...',
        mask:false
      });
          
    return config;
},function(error){
    Toast.fail('未知错误');

    //ajax请求无法发送
    return Promise.reject(error)
})


//响应拦截
axios.interceptors.response.use(function(response){
    //成功接受后台返回的数据
    // console.log(response)
    if(response.data.code=='401'){
        // 默认token 失效  
        router.push({name:'login'})
    }

    if(!!response.data.type){
        Toast.success(response.data.msg);
    }else{
        Toast.fail(response.data.msg);
    }

    return response
},function(error){
    // 后台返回的数据失败
    Toast.fail('未知错误');
    return Promise.reject(error)
})

export default axios
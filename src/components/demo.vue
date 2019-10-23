<template>
    <div>
        <h1>dome----dome--</h1>
        <p><input type="text" v-model.lazy="word"></p>
        <button @click="change">加</button>
        <Child ref="one" msg="propr" :word="word"
        v-on:send="get"
        >
        <div>
            <h3 v-for="(a,i) in arr" :key="i">{{a}}---1</h3>
        </div>
        </Child>

        <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
    </div>
</template>

<script>
import Child from "./child"
export default {
    data() {
        return {
            arr:["勤勤恳恳","乐意效劳"],
            word:'qqqqqqqqqqq',
        }
    },
    methods: {
        change(){
            this.$refs.one.count+=10;
        },
        get(data){
            this.word=data
        }
    },
    components:{
        Child
    }
}
</script>
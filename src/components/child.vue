<template>
    <div>
        <h1>child-{{count}}-----{{msg}}</h1>
        <h2>{{word}}</h2>
        <button @click="send">修改</button>
        <slot></slot>
    </div>
</template>

<script>

export default {
    props:["msg","word"],
    data() {
        return {
            count:10
        }
    },
    methods: {
        send(){
            this.$emit('send','赞赞赞赞赞赞赞赞赞赞赞赞赞赞赞')
        }
    },
}
</script>
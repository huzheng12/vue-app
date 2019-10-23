<template>
    <div class="item-move">
        <router-link :to="{name:'good',params:{goodId:a.id},query:{name:a.name}}">
        <img :src="a.img" alt="" width="100%" height="100%">
            <h1>{{a.name}}-----{{a.type.text}}</h1>
            <p>价格：￥{{a.price}}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"item",
     props:["a"],
}
</script>

<style scoped>
.item{
    width:100%;
    padding: 10px;
    box-sizing: border-box;
    display: block;
    border-bottom:2px dotted darkgoldenrod;
}
.h2{
    height:40px;
    color:darkmagenta;
    font-size:.3rem;
}

.item-move{
    animation: zoomInDown .8s;
}
</style>
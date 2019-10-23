<template>
    <div>
        <div id="photo">
            <img :src="touxiang" alt="上传头像" @click.stop="upload" class="tou">
            <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hidden">
        </div>
    </div>
</template>
<script>
export default {
    name:'avatar',
    data() {
        return {
            touxiang:"",
            avatar:'',
            username:''
            
        }
    },
     mounted(){
        if(localStorage.touxiang){
            this.touxiang = localStorage.touxiang;
        }else{
            this.touxiang = require('@/assets/images/girlbig2.jpg');
        }
    },
    methods: {
        upload(){
            this.$refs.one.click();
        },
        shangchuan(){
            console.log("准备上传");
            let file=this.$refs.one.files[0];
            let data=new FormData();
            data.append('avatar',file);

            this.$axios({
                url:'/vue/upload',
                method:'POST',
                contentType:false,
                processData:false,
                data:data
            }).then(res=>{
                console.log(res)
                this.username=data.username
                 this.touxiang = res.data.avatarurl.replace(/public/,'http://localhost:1902/');
                 localStorage.touxiang = this.touxiang;
            })
        }

    },
}
</script>
<style scoped>
.tou{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
}
.hidden{
    display: none;
}
</style>

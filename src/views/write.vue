<template>
    <div>
        <div>
            <button class="btn btn-success">按钮</button>
            <br>
            <!--info是数据,作为data的属性,必须要在data中定义-->
            <my-btn :type="info" :num="number" title="hello mybtn" @zs="updatenum"></my-btn>
            <!--info是字符串-->
            <my-btn :num="number" type="info" @zs="updatenum"></my-btn>
            <my-btn :num="number" @zs="updatenum"></my-btn>
        </div>
    </div>
</template>

<script>
    //引入mybtn子组件
    import MyBtn from '../components/mybtn';

    export default {
        name: "write",
        //局部注册组件
        components: {
            MyBtn
        },
        data: function () {
            return {
                number: 10,
                info: 'default'
            }
        },
        methods: {
            updatenum() {
                this.number++;
            }
        }
    }
</script>

<style scoped>
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);

</style>
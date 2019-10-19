<template>
    <!--父子组件通信-->
    <button :class="['btn','btn-'+type]" @click="countclick">{{num}}{{title}}</button>

</template>

<script>
    export default {
        name: "mybtn",
        // props:['type','title'],
        //父组件向子组件传递数据
        props: {
            //父组件不传type时显示的默认信息
            type: {
                default: 'primary',
            },
            //父组件不传title时显示的默认信息
            title: {
                default: '这是一个默认的按钮',
            },
            num: {
                //必传
                required: true,
                type: Number,
            }
        },
        data: function () {
            return {
                count: 1,
                msg: 'my-btn'
            }
        },
        methods: {
            countclick() {
                //通知父组件改数据
                this.$emit('zs');
                // this.count++;
            }
        },
        computed: {
            uppermsg() {
                return this.msg.charAt([0]).toUpperCase();
            }
        }
    }

</script>

<style scoped>
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);

</style>
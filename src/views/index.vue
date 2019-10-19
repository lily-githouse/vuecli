<template>
    <!--    模板结构-->
    <div>
        <div class="nav">
            <input type="text" v-model="content">
            <button @click="inserttodolist">插入</button>
        </div>
        <div class="panel">
            <ul class="list-group">
                <!--            必须：key写的是初始数据类型-->
                <li class="list-group-item" v-for="item in todolist" :key="item.id">
                    <!--                状态切换-->
                    <input type="checkbox" v-model="item.status">
                    {{item.content}}
                    <span @click="deletelist(item.id)">X</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<!--定义组件的逻辑和数据-->
<script>
    export default {
        name: "index",
        //组件里的data必须写成函数
        data: function () {
            return {
                todolist: [
                    {id: 1, content: '开题报告,任务书,下周一', status: false},
                    {id: 2, content: '简历,下周四', status: false},
                    {id: 3, content: '协同开发计划,下周一', status: false},
                    {id: 4, content: '评审,下周六', status: false},
                    {id: 5, content: '过程化项目', status: true},
                ],
                content: ''
            }
        },
        methods: {
            inserttodolist() {
                let obj = {};
                obj.id = this.todolist[this.todolist.length - 1].id + 1;
                obj.content = this.content;
                obj.status = false;
                this.todolist.push(obj);
            },
            deletelist(id) {
                //找到数组元素对应的下标
                let index = this.todolist.findIndex(ele => ele.id == id);
                this.todolist.splice(index, 1);//删除一条对应的数据
            },
            //存数据
            savelist() {
                localStorage.todolist = JSON.stringify(this.todolist);
            }
        },
        //监听数据是否变化
        //监听--1.监听的属性,2.回调函数(监听到变化时执行的操作)
        watch: {
            //深度监听(数组属性发生改变)
            todolist: {
                handler: function () {
                    this.savelist();
                },
                deep: true,
            },


            // todolist()
            // {
            //     this.savelist();
            // }
        },

    }


</script>

<!--样式-->
<style scoped>
    /*@import url"";*/
    .panel {
        width: 400px;
        height: auto;
        borer: solid 4px #ff6700;
    }

    .list-group {

    }
</style>
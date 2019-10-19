//入口文件


import Vue from 'vue'
import App from './App.vue'
//1.引入模块(是个插件)
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);

//1.定义(引入)组件
import index from './views/index';
import write from './views/write';


//2.映射路由，创建router实例
let router = new VueRouter({
    routes: [
        {path: '/', component: index},
        {path: '/write', component: write},
    ]
})

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')

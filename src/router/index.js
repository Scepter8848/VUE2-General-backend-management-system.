// 这个文件用来配置路由器
import Vue from 'vue'
// 首先你要引入vue-router,然后才能使用new创建一个管理所有路由的路由器
import VueRouter from 'vue-router'
// 引入你创建的路由组件，才可以进行配置
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Mall from '../views/Mall.vue'
import User from '../views/User.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
// 使用new来创建一个路由器
export default new VueRouter({
    
    routes:[
        // 主路由：
            {
                path:'/',//这个是路径，你在网址输入栏那边要输入的地址：http://localhost:8080/#/
                component:Main,//这个是给哪个路由组件配置相关设置
                name:'Main',
                redirect:'/home',
                // 子路由：
                children:[
                    //子路由
                    // {path:'home',name:'home', component:Home},//首页
                    // {path:'user',name:'user',component:User},//用户管理
                    // {path:'mall',name:'mall',component:Mall},//商品管理
                    // {path:'page1',name:'page1',component:PageOne},
                    // {path:'page2',name:'page2',component:PageTwo},
                ]
            },
            {
                path:'/login',
                name:'login',
                component:Login,
            }
        ]
})
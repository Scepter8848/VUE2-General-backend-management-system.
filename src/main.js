// 这个是入口文件，你使用vue-router或者Element UI等都需要先在这里引入
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'



Vue.config.productionTip = false

//全局引入
Vue.use(ElementUI)

//添加全局前置导航守卫
router.beforeEach((to,from,next) => {
  //判断token存不存在
  const token = Cookie.get('token')
  //token不存在，说明当前用户未登录，应该跳转到登录页
  if(!token && to.name !== 'login'){
    next({name:'login'})
  } else if(token && to.name === 'login'){
    //如果token存在，说明用户已经登陆了，此时应该跳转到首页
    next({name:'home'})
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router:router,//可以在整个应用程序中使用 this.$router 来访问 Vue Router 的实例，以及使用 this.$router.push() 等方法进行路由导航。
  store,
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')

<template>
  <div id="app">
    <router-view></router-view>
  </div> 
</template>

<script>
import LeftMenu from './components/LeftMenu.vue'

export default {

  name: 'App',
  components: {
    LeftMenu,
  }
}
</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
html,body,p{
  margin: 0;
  padding: 0;
}
</style>

<template>
  <div id="app">
    <el-container>
      <el-aside width="auto">
        <LeftMenu/>
      </el-aside>
      <el-container>
        <el-header><Header/></el-header>
          <CommonTag/>
        <el-main>
          <!-- 路由出口 -->
         <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div> 
</template>

<script>
import Header from '@/components/Header.vue'
import LeftMenu from '@/components/LeftMenu.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
    name:'Main',
    components:{
        Header,LeftMenu,CommonTag
    }
}
</script>


<style lang="less" scoped>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    // line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    // line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
 .el-header{
    padding: 0 0;
 }
</style>

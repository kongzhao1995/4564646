<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="background-color: #000;height:100%">
        <div class="logo"><img src="./assets/logo.jpeg" alt=""></div>
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="orange">
          <el-submenu index="" v-for="item in list" :key='item.id'>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.name}}</span>
            </template>
              <el-menu-item @click="open(item2.path)" :index="item2.path" style="text-align: center;" v-for="item2 in item.data" :key='item2.name'>{{item2.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height='80px' style="background-color: #ccc">Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list: [
        {name: '系统首页', id : '1',data: [{name: '消防首页'}]},
        {name: '告警反馈', id : '2',data: [{name: '告警统计'}]},
        {name: '隐患反馈', id : '3',data: [{name: '隐患统计',path: '/dangerAlarm'}]},
        {name: '角色查询', id : '4',data: [{name: '用户管理'}]}
      ]
    }
  },
  methods: {

    open(path) {
      console.log(path)
    }
  }
}
</script>

<style>
body,html {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
.el-container {
  height: 100%;
}
.logo {
  height: 140px;
  background-color: blue;
}
</style>

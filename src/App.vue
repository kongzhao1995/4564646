<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="background-color: #000;height:100%">
        <div class="logo"><img src="./assets/logo.jpeg" alt=""></div>
        <el-menu
          :router="true"
          :default-active="newPath"
          unique-opened
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          style="border-right: none"
          active-text-color="orange">
          <el-submenu :index="item.id" v-for="item in list" :key='item.id'>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.name}}</span>
            </template>
              <el-menu-item @click="navigation(item)" :index="item2.path" style="text-align: center;" v-for="item2 in item.data" :key='item2.name'>{{item2.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header-bg" height='60px' style="background-color: #eee;">
          <div style="float:left;margin-top:20px">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="item in newArr" :key='item'>{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="float: right;margin-top: 20px">
            <el-dropdown>
              <span class="el-dropdown-link">
                习大大<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="personalCenter">个人中心</el-dropdown-item>
                <el-dropdown-item @click.native="administrativePark">管辖园区</el-dropdown-item>
                <el-dropdown-item @click.native="personalization">个性设置</el-dropdown-item>
                <el-dropdown-item>使用帮助</el-dropdown-item>
                <el-dropdown-item @click.native="signout">退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main style="backgroundcolor: #fff"><router-view></router-view></el-main>
      </el-container>
    </el-container>
    <!-- 个人中心对话框 -->
    <el-dialog
      title="个人中心"
      :visible.sync="persondialogVisible"
      width="40%">
      <span>这是一段信息</span>
    </el-dialog>
    <!-- 管辖园区对话框 -->
    <el-dialog
      title="管辖园区"
      :visible.sync="parkdialogVisible"
      width="40%">
      <span>这是一段信息</span>
    </el-dialog>
    <!-- 个性设置对话框 -->
    <el-dialog
      title="个性设置"
      :visible.sync="PersonalizationdialogVisible"
      width="40%">
      <span>这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list: [
        {name: '系统首页', id : '1',data: [{name: '消防首页',path: '/system'}]},
        {name: '告警管理', id : '2',data: [{name: '告警统计',path: '/firerAlarm'}]},
        {name: '隐患管理', id : '3',data: [{name: '隐患统计',path: '/dangerAlarm'}]},
        {name: '角色查询', id : '4',data: [{name: '用户管理',path: '/user'}]}
      ],
      newPath: '',
      navArr: [],
      newArr: [],
      persondialogVisible: false,
      parkdialogVisible: false,
      PersonalizationdialogVisible: false
    }
  },
  mounted() {
    let path = window.location.href
    this.newPath = path.split('#')[1]
    console.log(this.newPath)
    if (this.newPath == '/') {
      this.newPath = '/system'
    }
    this.list.forEach(v=>{
      v.data.forEach(j=>{
        if (j.path == this.newPath) {
          this.newArr.push(v.name)
          this.newArr.push(j.name)
        }
      })
    })
  },
  methods: {
    navigation(obj) {
      this.navArr = []
      this.newArr = []
      this.navArr.push(obj)
      this.navArr.forEach(v=>{
        this.newArr.push(v.name)
        v.data.forEach(newV=>{
          this.newArr.push(newV.name)
        })
      })
    },
    // 个人中心
    personalCenter() {
      this.persondialogVisible = true
    },
    // 管辖园区
    administrativePark() {
      this.parkdialogVisible = true
    },
    // 个性设置
    personalization() {
      this.PersonalizationdialogVisible = true
    },
    // 退出登陆
    signout() {

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
  background-color: #ddd;
}
.el-container {
  height: 100%;
}
.logo {
  height: 140px;
  background-color: blue;
}
.el-main {
  background-color: #fff;
  margin: 20px 20px 0;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="background-color: blue;height:100%">Aside</el-aside>
      <el-container>
        <el-header height='80px' style="background-color: red">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

    }
}
</script>

<style lang="less">
body,html {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
  width: 100%;
  background-color: #ddd;
}
</style>

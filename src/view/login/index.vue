<template>
    <div class="login">
      <div class="login-containter">
        <div class="top">登 录</div>
        <div class="bottom">
          <el-input
            placeholder="用户名"
            prefix-icon="el-icon-user"
            size="small"
            v-model="inputUsername">
          </el-input>
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-help"
            size="small"
            show-password
            v-model="inputPassword">
          </el-input>
          <el-button type="primary" size="small" @click="login">登录</el-button>
        </div>
      </div>
    </div>
</template>>

<script>
export default {
    data() {
        return {
          inputUsername: '',
          inputPassword: ''
        }
    },
    mounted() {
    },
    methods: {
      login() {
        if (!this.inputPassword || !this.inputUsername) {
            this.$message({
              message: '账号或密码不能为空',
              type: 'warning',
              duration: 1500
            })
        } else {
          if (this.inputUsername === 'admin' && this.inputPassword === '123456') {
            this.$router.push({path: 'home'})
          } else {
                this.$message({
                  message: '账号或密码不正确',
                  type: 'warning',
                  duration: 1500
                })
          }
        }
      }

    }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: rgba(160,159,159,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-containter {
    width: 320px;
    height: 340px;
    box-shadow: 0 0 50px rgb(151, 179, 216);
    background: #fff;
    padding: 32px;
    box-sizing: border-box;
    .top {
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin-bottom: 20px;
    }
    .el-input {
      margin-bottom: 20px;
    }
    .el-button {
      width: 100%;
    }
  }
}
    
</style>
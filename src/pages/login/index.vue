<template>
  <div class="dd_login">
    <Header  title="当当登录" icon/>

    <div class="login_section">
      <div class="login_user">
        <p class="active">账号密码登录</p>
        <p>短信快捷登录</p>
      </div>

      <div class="login_input">
        <div>
          <p class="iconfont">&#xe66e;</p>
          <input type="text" placeholder="请输入手机号/邮箱/昵称" v-model="username"/>
        </div>
        <div>
          <p class="iconfont">&#xe603;</p>
          <input type="text" placeholder="请输入密码" v-model="pwd"/>
        </div>
      </div>

      <v-touch tag="button" class="login_btn" @tap="handleLogin()">登录</v-touch>

      <div class="login_wjmm">
        <p>忘记密码？</p>
        <router-link tag="p" to="/register">立即注册</router-link>
      </div>

      <div class="login_qwz">
        <ul>
          <li>
            <a href="#" class="iconfont">&#xe631;</a>
          </li>
          <li>
            <a href="#" class="iconfont">&#xe6b2;</a>
          </li>
          <li>
            <a href="#" class="iconfont">&#xe65f;</a>
          </li>
        </ul>
        <p>
          <a href="#">安全问题</a>|
          <span>登录代表您已同意</span>
          <a href="#">《当当隐私政策》</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {loginApi} from "@api/username"
export default {
  name:"login",
  data(){
    return{
      username:"",
      pwd:""
    }
  },
  methods:{
    async handleLogin(){
      let data=await loginApi(this.username,this.pwd)
        if(data.data.status===1){
            alert(data.data.info);
            this.$router.push("/mine")
        }else{
            alert(data.data.info);
        }
    }
  }
};
</script>

<style>
.dd_login {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding-top: 0.367rem;
  background: #fafafa;
}

/* login_header */
.login_header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.367rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.083rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}

.login_header p {
  font-size: 0.233rem;
  line-height: 0.367rem;
}

.login_header p:nth-child(2) {
  font-size: 0.167rem;
  line-height: 0.367rem;
}

/* login_section */

.login_section {
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  padding: 0.504rem 0.325rem 0 0.325rem;
}

.login_user {
  width: 100%;
  height: 0.483rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
}

.login_user p {
  font-size: 0.167rem;
  line-height: 0.483rem;
  color: #afafaf;
  font-weight: 900;
}

.active {
  border-bottom: 2px solid #323232;
  color: #323232 !important;
}

.login_input div {
  width: 100%;
  height: 0.267rem;
  padding-top: 0.25rem;
  border-bottom: 1px solid #ccc;
  display: flex;
}

.login_input div p {
  padding-top: 0.042rem;
  padding-right: 0.125rem;
}

.login_input div input {
  outline: none;
  border: none;
  background: #fafafa;
}

.login_btn {
  width: 100%;
  height: 0.375rem;
  text-align: center;
  line-height: 0.375rem;
  background: rgb(251, 177, 182);
  border: none;
  margin: 0.28rem 0 0.28rem 0;
  color: #fff;
  font-size: 0.15rem;
}

.login_wjmm {
  width: 100%;
  height: 0.158rem;
  padding-bottom: 0.15rem;
  display: flex;
  justify-content: space-between;
}

.login_wjmm p {
  color: #f3344a;
}

.login_qwz {
  width: 100%;
  height: 0.767rem;
  padding: 0.083rem;
}
.login_qwz ul {
  width: 100%;
  height: 0.375rem;
  padding-bottom: 0.183rem;
  display: flex;
  justify-content: space-between;
}
.login_qwz ul li:nth-child(1) a {
  font-size: 0.35rem;
  color: rgb(89, 183, 226);
}
.login_qwz ul li:nth-child(2) a {
  font-size: 0.35rem;
  color: rgb(230, 130, 130);
}
.login_qwz ul li:nth-child(3) a {
  font-size: 0.35rem;
  color: rgb(26, 65, 83);
}
.login_qwz p a {
  color: #999;
}
</style>
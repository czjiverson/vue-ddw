<template>
  <div class="dd_register">
    <Header title="当当注册" icon />

    <div class="register_section">
      <h1>注册新用户</h1>

      <!-- register_input -->
      <div class="register_input">
        <div class="form-group">
          <input type="text" placeholder="请输入用户名" v-model="username"/>
        </div>
        <div class="form-group">
          <input type="password" placeholder="请输入密码" v-model="pwd"/>
        </div>
      </div>

      <!-- register_btn -->
      <v-touch class="register_btn" tag="button" @tap="handleRegister()">立即注册</v-touch>

      <a href="#">《当当隐私政策》</a>
    </div>
  </div>
</template>

<script>
import {registerApi} from "@api/username"
export default {
  name: "register",
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  methods:{
      async handleRegister(){
        let data=await registerApi(this.username,this.pwd)
        if(data.data.status===1){
            alert(data.data.info);
            this.$router.push("/login")
        }else{
            alert(data.data.info);
        }
      }
  }
};
</script>

<style>
.dd_register {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding-top: 0.367rem;
  background: #fafafa;
}

/* register_header */
.register_header {
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

.register_header p {
  font-size: 0.233rem;
  line-height: 0.367rem;
}

.register_header p:nth-child(2) {
  font-size: 0.167rem;
  line-height: 0.367rem;
}

/* register_section */
.register_section {
  width: 100%;
  height: 3.15rem;
  box-sizing: border-box;
  padding: 0.504rem 0.325rem 0 0.325rem;
}
.register_section h1 {
  font-size: 0.167rem;
  padding-bottom: 0.217rem;
}
.register_input div {
  width: 100%;
  height: 0.267rem;
  padding-top: 0.15rem;
  border-bottom: 1px solid #ccc;
  display: flex;
}

.register_input div p {
  padding-top: 0.042rem;
  padding-right: 0.125rem;
}

.register_input div input {
  outline: none;
  border: none;
  background: #fafafa;
}

.register_btn {
  width: 100%;
  height: 0.375rem;
  text-align: center;
  line-height: 0.375rem;
  background: rgb(251, 177, 182);
  border: none;
  margin: 0.28rem 0 0.28rem 0;
  color: #fff;
  font-size: 0.15rem;
  outline: none;
}

.register_section > a {
  color: #666;
}
</style>
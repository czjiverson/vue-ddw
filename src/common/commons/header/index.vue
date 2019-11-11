<template>
  <div class="mydd_header">
    <div>
      <p v-show="icon" @tap="handleBack()">&lt;</p>
    </div>
    <span>{{title}}</span>
    <p class="iconfont">&#xe86d;</p>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    title:{
      type:String,
      default:"首页"
    },
    icon:{
      type:Boolean
    }
  },
  methods:{
    handleBack(){
      console.log(111);
      this.$router.back();
    }
  }

};
</script>

<style>
.mydd_header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.367rem;
  padding: 0 0.083rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
  text-align: center;
}

.mydd_header p {
  font-size: 0.233rem;
  line-height: 0.367rem;
}

.mydd_header div:nth-child(1){
  float: left;
  width: .117rem;
  height:100%;
}

.mydd_header span:nth-child(2) {
  font-size: 0.167rem;
  line-height: 0.367rem;
}

.mydd_header p:nth-child(3){
  float: right;
}
</style>
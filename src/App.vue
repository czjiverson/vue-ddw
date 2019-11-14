<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  <Footer v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from "@common/commons/tabBar"

export default {
  name:"App",
  components:{
    Footer
  },
}
</script>

<style>
#app{
  width:100%;
  height:100%;
}
.page{
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  top:0;
  padding-bottom:.392rem;
}
</style>

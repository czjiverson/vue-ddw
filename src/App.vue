<template>
  <div id="app">
<<<<<<< HEAD
    <keep-alive exclude="/tushuLists/">
=======
    <keep-alive>
>>>>>>> mao
      <router-view></router-view>
    </keep-alive>
  <Footer v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from "@common/commons/tabBar"
<<<<<<< HEAD
=======

>>>>>>> mao
export default {
  name:"App",
  components:{
    Footer
<<<<<<< HEAD
  }
};
=======
  },
}
>>>>>>> mao
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

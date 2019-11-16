<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="flag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Bscroll",
  data(){
      return {
          flag:false,
          pullingDown:false
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1,
      pullDownRefresh:{
        threshold:40,
        stop:0,
      },
      pullUpLoad:true,
      tag:true,
      click:true,

    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 40 && !(this.pullingDown)) {
          this.flag=true;
        }
      });
    },
    handlepullingDown(callback){
        this.scroll.on("pullingDown",()=>{
            this.pullingDown=true;
            callback()
        })
    },
    handleRefresh(){
      this.scroll.refresh();
      this.scroll.finishPullDown();
      setTimeout(()=>{
        this.flag=false;
        this.pullingDown=false;
      },1500)
    },


    handlepullingUp(callback){
      this.scroll.on("pullingUp",()=>{
        this.pullingDown=true;
        // console.log(111)
        callback()
      })
    },
    handlefinishPullUp(){
      this.scroll.refresh();
      this.scroll.finishPullUp();
      // setTimeout(()=>{
      //   this.flag=false;
        this.pullingDown=false;
      // },1500)
    }
  }
};
</script>

<style>
.wrapper,.scroll_container {
  height: 100%;
}
.scroll_loading{
    display: flex;
    justify-content: center;
    align-items:center;
    height:.25rem;
}
.scroll_loading i{
    font-size: .167rem;
}
</style>
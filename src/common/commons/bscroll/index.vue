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
          flag:false
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1,
      pullDownRefresh:true
    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 30) {
          this.flag=true;
        }
      });
    },
    handlepullingDown(){
        this.scroll.on("pullingDown",()=>{
            console.log(1111)
        })
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
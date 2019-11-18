<template>
  <div class="dd_fenlei page">
    <Header title="分类" icon />
    <div class="classify-box2">
        
      <nav class="class_nav">
        <ul>
           <Bscroll ref="scroll">
          <div>
          <router-link
            v-for="(item,index) in arr" :key="index"
            tag="li"
            :to="'/fenlei/fenleiTuShu/'+index"
          >
          {{item}}
          </router-link>
          </div>
         </Bscroll>
        </ul>
      </nav>


      <keep-alive>
          <router-view></router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>
export default {
  name: "Fenlei",
  data(){
    return{
      arr:[ "图书","童书","电子书",
            "听书","网络文学","女装","男装","男女装",
            "童装童鞋","内衣配饰","母婴玩具","食品新鲜","美妆个护","手机数码",
            "电脑办公","家用电器","运动户外","珠宝饰品","箱包皮具"
          ],
      titler:[],
      
    }
  },

};
</script>

<style>
.dd_fenlei {
  padding-top: 0.367rem;
}
.classify-box2 {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.class_nav {
  background: white;
  margin: 0;
  width: 21.4%;
  float: left;
  height: 100%;
  z-index: 5;
  position: relative;;
}
.class_nav > ul {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.class_nav>ul .router-link-active{
  background-color: #eff4fa;
}
.class_nav > ul >div>div>div> li {
  border: 0.008rem solid transparent;
  border-left: 0.025rem solid transparent;
  border-right-color: #eff4fa;
   /* background-color: #eff4fa; */
  margin: -0.008rem 0;
  padding-right: 0.025rem;
  font-size: 0.117rem;
  height: 0.375rem;
  line-height: 0.375rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>

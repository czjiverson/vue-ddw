<template>
  <div class="dd_fenlei page">
    <Header title="推荐" icon />
      <section class="section-four">
        <div class="section-four_one">
          <span>浏览此商品的顾客也同时浏览</span>
        </div>
         <Bscroll ref="scroll">
        <ul class="ul2">
          <li v-for="(item,index) in list" :key="index">
            <div>
              <img :src="item.image_url" alt />
            </div>
            <span>{{item.name}}</span>
            <div class="ul2_box">
              <div class="ul2_box-one">当当自营</div>
              <div class="ul2_box-two">券</div>
              <div class="ul2_box-three">限时抢</div>
            </div>
            <div class="pingjia">￥{{item.price}}</div>
            <div class="ul2_box-four">{{item.shop_id}}人评价</div>
          </li>
          
        </ul>
         </Bscroll>
      </section>
     
  </div>
</template>

<script>
import {tuijianApi} from "@api/tiujian"
export default {
  name: "tiujian",
  data(){
      return{
          list:[],
      }
  },
    async created(){
        let date= await tuijianApi();
        this.list=date.reco_list;
        console.log(this.list)
    }
};
</script>

<style>
.dd_fenlei {
  padding-top: 0.367rem;
  background: #fff;
}
.section-four {
  padding-top: 0.375rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}
.section-four_one {
  padding: 0.125rem 0px 0.1rem 0px;
  background: white;
}
.section-four_one > span {
  display: block;
  border-left: 0.025rem solid rgb(0, 0, 0);
  padding-left: 0.042rem;
  font-size: 0.1rem;
  color: rgb(50, 50, 50);
  font-weight: bold;
  line-height: 0.108rem;
}
.ul2 {
  margin-top: 0.029rem;
  overflow: auto;
}
.ul2 > li {
  padding-right: 0.017rem;
  margin-bottom: 0.025rem;
  box-sizing: border-box;
  float: left;
  width: 50%;
  height: 2.458rem;
  padding-left: 0;
  border: 0.008rem solid #e4e4e4;
}
.ul2 > li > div {
  overflow: hidden;
  position: relative;
}
.ul2 > li > div > img {
  float: left;
  width: 1.55rem;
  height: auto;
}
.ul2 > li > span {
  float: left;
  font-size: 0.108rem;
  line-height: 0.15rem;
  min-height: 0.3rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0.083rem 0.083rem 0rem 0.083rem;
  border: 0;
}
.ul2_box {
  overflow: hidden;
  height: 0.15rem;
  padding-left: 0.067rem;
  padding-top: 0.042rem;
}
.ul2_box-one {
  float: left;
  border: 0.008rem solid #f2303c;
  padding: 0 0.017rem;
  padding-top: 0.008rem;
  box-sizing: border-box;
  margin-right: 0.017rem;
  font-size: 0.092rem;
  color: #f2303c;
  border-radius: 0.017rem;
  line-height: 0.1rem;
}
.ul2_box-two,
.ul2_box-three {
  float: left;
  border: 1px solid #f2303c;
  padding: 0 2px;
  padding-top: 1px;
  box-sizing: border-box;
  margin-right: 0.05rem;
  font-size: 0.092rem;
  color: #fff;
  border-radius: 0.017rem;
  line-height: 0.1rem;
  background: #f2303c;
}
.pingjia {
  display: block;
  overflow: hidden;
  height: 0.133rem;
  margin-left: 0.067rem;
  float: left;
  color: #ff463c;
  font-size: 0.125rem;
  line-height: 0.133rem;
}
.ul2_box-four {
  clear: both;
  float: left;
  font-size: 0.092rem;
  color: #b4b4b4;
  padding: 0 0.008rem;
  margin: 0.033rem 0.083rem;
  line-height: 0.133rem;
}
</style>
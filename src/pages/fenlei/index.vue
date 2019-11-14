<template>
  <div class="dd_fenlei page">
    <Header title="分类" icon />
    <div class="classify-box2">
      <nav class="class_nav">
        <ul>
          <router-link
            v-for="(item,index) in arr" :key="index"
            tag="li"
            :to="'/fenlei/fenleiTuShu/'+index"
          >
          {{item}}
          </router-link>
           <!-- <router-link
            tag="li"
            to="/fenlei/fenleiTongShu"
          >
          童书
          </router-link>
           <router-link
            tag="li"
            to="/fenlei/fenleiDianZiShu"
          >
          电子书
          </router-link> -->
        </ul>
      </nav>


      <keep-alive>
          <router-view></router-view>
      </keep-alive>
<!-- 
      <div class="class_div">
        <div class="class_div-one">
          <div class="class_div-over">
            <div class="rr1">
              <img
                src="http://img63.ddimg.cn/upload_img/00803/1/886x315_wzh_20191107-1573118749.jpg"
              />
            </div>
            <div class="rr2">
              <div class="rr2_one" v-for="(item,index) in fenleiList" :key="index" >
                <span class="title1">
                  <span>{{item.promo_title}}</span>
                  <span>{{item.promo_text}}</span>
                </span>
                <span class="title2">></span>
              </div>
            </div>
           
            <div class="xiaoshuo" v-for="(item,index) in fenleiLists" :key="index">
              <h3>
                <span>{{item.group_name}}></span>
                <span>{{item.more}}></span>
              </h3>
              <ul >
                <li v-for="(items,indexs) in item.detail" :key="indexs">  
                  <img :src="items.icon" alt />
                  <p>{{items.title}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import {fenleiOneApi} from "@api/fenlei"
export default {
  name: "Fenlei",
  data(){
    return{
      // fenleiList:[],
      // fenleiLists:[],
      arr:[ "图书","童书","电子书",
            "听书","网络文学","女装","男装","男女装",
            "童装童鞋","内衣配饰","母婴玩具","食品新鲜","美妆个护","手机数码",
            "电脑办公","家用电器","运动户外","珠宝饰品","箱包皮具"
          ],
      titler:[],
      
    }
  },
  // async created(){

  //     let data=await fenleiOneApi();
  //     console.log(data)
      // this.titler.push(data.content);
      // console.log(this.titler)
      // this.fenleiList=data.content.mini_banner.content;
      // this.fenleiLists=data.content.pile[0].group;
      // console.log(this.fenleiLists)
//   },
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
.class_nav > ul > li {
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

/* .active{
   
} */
/* .class_div {
  width: 78.6%;
  background-color: #eff4fa;
  height: 100%;
  overflow: hidden;
  float: left;
  position: relative;
}
.class_div-one {
  border-left: none;
  background-color: #eff4fa;
  padding: 0 0 0 0.067rem;
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.class_div-over {
  padding-bottom: 0.4rem;
}
.rr1 {
  overflow: hidden;
  position: relative;
  padding-top: 0;
  width: 2.383rem;
  height: 0.842rem;
}
.rr1 > img {
  height: auto;
  width: 100%;
}
.rr2 {
  padding: 0.067rem 0 0 0;
  overflow: hidden;
}
.rr2 > .rr2_one {
  width: 49%;
  float: left;
  background: white;
  position: relative;
}
.rr2 > .rr2_two {
  background: white;
  width: 49%;
  float: right;
}
.title1 {
  padding-left: 0.108rem;
  padding-top: 0.108rem;
  padding: 0.125rem 0.292rem 0.125rem 0.083rem;
  padding-bottom: 0.108rem;
  display: block;
}
.title1 > span:nth-of-type(1) {
  color: #212121;
  line-height: 0.133rem;
  margin-bottom: 0.025rem;
  font-size: 0.117rem;
  font-weight: bold;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title1 > span:nth-of-type(2) {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a6a6a6;
  line-height: 0.117rem;
  font-size: 0.1rem;
}
.title2 {
  float: right;
  display: block;
  width: 0.292rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 0.5rem;
}
.rr2_two {
  float: right;
}
.xiaoshuo {
  background: white;
  margin-top: 0.067rem;
}
.xiaoshuo > h3 {
  line-height: 0.15rem;
  padding-left: 0.117rem;
  padding-top: 0.058rem;
  font-size: 0.108rem;
  color: #4d525d;
  position: relative;
  overflow: hidden;
}
.xiaoshuo > h3 > span:nth-of-type(2) {
  float: right;
  font-weight: 100;
  margin-right: 0.083rem;
  font-size: 0.092rem;
  width: 0.767rem;
  margin-bottom: 0.083rem;
}
.xiaoshuo > ul {
  margin-bottom: 0;
  padding: 0 0.042rem 0.05rem;
  background: #fff;
  overflow: hidden;
}
.xiaoshuo > ul > li{
  width: 0.767rem;
  float: left;
  margin-bottom: 0.083rem;
}
.xiaoshuo > ul > li > img {
  float: left;
  display: block;
  width: 0.567rem;
  margin-left: 0.083rem;
}
.xiaoshuo > ul > li > p {
  text-align: center;
  font-size: 0.092rem;
  color: #4d525d;
  line-height: 0.45rem;
  float: left;
  display: block;
  width: 0.717rem;
  height: 0.4rem;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.4rem;
  border-bottom: 0.008rem solid #ececec;
} */
</style>

<template>
  <div class="dd_fenlei page">
    <Header title="分类" icon />
    <div class="classify-box2">
      <nav class="class_nav">
        <ul>
<<<<<<< HEAD
          <li>图书</li>
          <li>童书</li>
          <li>电子书</li>
          <li>听书</li>
          <li>网络文学</li>
          <li>女装</li>
        </ul>
      </nav>

=======
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
>>>>>>> mao
      <div class="class_div">
        <div class="class_div-one">
          <div class="class_div-over">
            <div class="rr1">
              <img
                src="http://img63.ddimg.cn/upload_img/00803/1/886x315_wzh_20191107-1573118749.jpg"
<<<<<<< HEAD
                alt
              />
            </div>
            <div class="rr2">
              <div class="rr2_one">
                <span class="title1">
                  <span>进入当当书城</span>
                  <span>特价低至1.9折</span>
                </span>
                <span class="title2">></span>
              </div>
              <div class="rr2_one rr2_two">
                <span class="title1">
                  <span>进入童书馆</span>
                  <span>精选少儿读物</span>
=======
              />
            </div>
            <div class="rr2">
              <div class="rr2_one" v-for="(item,index) in fenleiList" :key="index" >
                <span class="title1">
                  <span>{{item.promo_title}}</span>
                  <span>{{item.promo_text}}</span>
>>>>>>> mao
                </span>
                <span class="title2">></span>
              </div>
            </div>
<<<<<<< HEAD
            <div class="bangdan">
              <h3>榜单</h3>
              <ul>
                <li>
                  <img src="http://img61.ddimg.cn/upload_img/00791/xmj/tu-1568871813.png" alt />
                  <p>总榜</p>
                </li>
                <li>
                  <img src="http://img61.ddimg.cn/upload_img/00791/xmj/tu-1568871813.png" alt />
                  <p>总榜</p>
                </li>
                <li>
                  <img src="http://img61.ddimg.cn/upload_img/00791/xmj/tu-1568871813.png" alt />
                  <p>总榜</p>
                </li>
              </ul>
            </div>
            <div class="xiaoshuo">
              <h3>
                <span>小说></span>
                <span>畅销榜></span>
              </h3>
              <ul>
                <li>社会</li>
                <li>侦探/悬疑/推理</li>
                <li>情感</li>
                <li>世界名著</li>
                <li>历史</li>
                <li>下拉</li>
=======
           
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
>>>>>>> mao
              </ul>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
      </div> -->
>>>>>>> mao
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "Fenlei"
=======
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
>>>>>>> mao
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
<<<<<<< HEAD
  overflow: hidden;
}
.class_nav > ul {
  padding-bottom: 0.367rem;
=======
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
>>>>>>> mao
}
.class_nav > ul > li {
  border: 0.008rem solid transparent;
  border-left: 0.025rem solid transparent;
  border-right-color: #eff4fa;
<<<<<<< HEAD
  background-color: #eff4fa;
=======
   /* background-color: #eff4fa; */
>>>>>>> mao
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
<<<<<<< HEAD
.class_div {
=======

/* .active{
   
} */
/* .class_div {
>>>>>>> mao
  width: 78.6%;
  background-color: #eff4fa;
  height: 100%;
  overflow: hidden;
  float: left;
<<<<<<< HEAD
=======
  position: relative;
>>>>>>> mao
}
.class_div-one {
  border-left: none;
  background-color: #eff4fa;
  padding: 0 0 0 0.067rem;
<<<<<<< HEAD
=======
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
>>>>>>> mao
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
<<<<<<< HEAD
  /* background: url(img/4.png) no-repeat center */
=======
>>>>>>> mao
  text-align: center;
  line-height: 0.5rem;
}
.rr2_two {
  float: right;
}
<<<<<<< HEAD
.bangdan {
  background: white;
  margin-top: 0.067rem;
}
.bangdan > h3 {
=======
.xiaoshuo {
  background: white;
  margin-top: 0.067rem;
}
.xiaoshuo > h3 {
>>>>>>> mao
  line-height: 0.15rem;
  padding-left: 0.117rem;
  padding-top: 0.058rem;
  font-size: 0.108rem;
  color: #4d525d;
  position: relative;
  overflow: hidden;
}
<<<<<<< HEAD
.bangdan > ul {
  margin-bottom: 0;
  padding: 0 0.042rem 0.05rem;
  overflow: hidden;
}
.bangdan > ul > li {
=======
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
>>>>>>> mao
  width: 0.767rem;
  float: left;
  margin-bottom: 0.083rem;
}
<<<<<<< HEAD
.bangdan > ul > li > img {
  display: block;
  width: 0.567rem;
  height: 0.567rem;
  margin-left: 0.083rem;
}
.bangdan > ul > li > p {
=======
.xiaoshuo > ul > li > img {
  float: left;
  display: block;
  width: 0.567rem;
  margin-left: 0.083rem;
}
.xiaoshuo > ul > li > p {
>>>>>>> mao
  text-align: center;
  font-size: 0.092rem;
  color: #4d525d;
  line-height: 0.45rem;
<<<<<<< HEAD
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
}
.xiaoshuo > ul {
  margin-bottom: 0;
  padding: 0 0.042rem 0.05rem;
  background: #fff;
  overflow: hidden;
}
.xiaoshuo > ul > li {
=======
>>>>>>> mao
  float: left;
  display: block;
  width: 0.717rem;
  height: 0.4rem;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.4rem;
  border-bottom: 0.008rem solid #ececec;
<<<<<<< HEAD
}
=======
} */
>>>>>>> mao
</style>

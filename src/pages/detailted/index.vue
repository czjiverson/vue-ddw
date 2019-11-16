<template>
  <div class="dd_fenlei page">
    <Header title="详情" icon />
      <section class="section">
        <div class="play">
          <a href="#">免费在线读</a>
          <img :src="content.image_url" alt />
        </div>
        <div class="baiwan">
          <img src="http://img63.ddimg.cn/2019/11/7/2019110710340645284.jpg" class="image" />
        </div>
        <div class="introduce">
          <p>{{content.name}} {{content.author_name}}</p>
          <div
            class="jianjie"
          >{{content.subtitle}}</div>
          <a href="#">
            <u>店庆遇上11.11 10万童书 5折封顶>></u>
          </a>
          <div class="new_style">
            <div class="new_style-one">
              <div class="new_style-left">
                <b>￥</b>
                <span>{{Math.floor(content.price/3).toFixed(2)}}</span>
                <i>((3.90折))</i>
                <u>降价通知</u>
              </div>
              <div class="new_style-right">
                <del>
                  定价
                  <span>￥{{content.price}}</span>
                </del>
              </div>
              <div class="new_style-top">
                <span>限时抢</span>
              </div>
            </div>
          </div>
        </div>
        <div class="discuss">
          <div class="books">
            <div class="books_one">
              <p class="books_one-p1">
                <span>9.3分</span>
              </p>
              <p class="books_one-p2">
                36732人评分
                <span>精彩评分送积分</span>
              </p>
            </div>
            <div class="books_two">
              <span>我要写评论</span>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>


<script>
import {detaListApi} from "@api/detailted"
export default {
  name: "detailted",
    data(){
        return{
            i:0,
            list:[],
            content:""
        }
    },
    methods:{
      async handleDateList(){
        this.i=this.$route.params.i
        let data= await detaListApi();
        this.list=data.reco_list;
        this.list.forEach(item=>{
          if(item.product_id==this.i){
            this.content=item;
            
          }
        })
        console.log(this.content)
      }
    },
     created(){
       this.handleDateList();
    }
}
</script>

<style>
.dd_fenlei {
  padding-top: 0.367rem;
}



/* 内容 */
.section {
  height: 100%;
  width: 100%;
  overflow: auto;
}
.play {
  width: 3.125rem;
  height: 3.125rem;
  position: relative;
}
.play > img {
  width: 100%;
  height: 100%;
}
.play > a {
  display: block;
  font-size: 0.117rem;
  position: absolute;
  right: 0;
  bottom: 0.133rem;
  border: 1px solid #d00;
  padding: 0.033rem 0.033rem;
  border-right: none;
  border-radius: 0.117rem 0 0 0.117rem;
  color: #d00;
}
.image {
  width: 3.125rem;
  height: 0.417rem;
}
.baiwan {
  width: 3.125rem;
  height: 0.425rem;
}
.introduce {
  border-top: 0.008rem solid #ddd;
  margin-bottom: 0.11rem;
  background-color: white;
  padding-top: 0.05rem;
  position: relative;
}
.introduce > p {
  font-size: 0.117rem;
  color: #4d525d;
  margin: 0.042rem 0.083rem 0.033rem 0.083rem;
}
.jianjie {
  font-size: 0.1rem;
  color: rgb(150, 150, 150);
  line-height: 0.167rem;
  overflow: hidden;
  margin: 0.042rem 0.083rem 0.033rem 0.083rem;
}
.introduce > a {
  display: block;
  font-size: 0.092rem;
  margin: -0.033rem 0.083rem 0.083rem 0.083rem;
  color: rgb(255, 70, 60);
  text-decoration: none;
}
.new_style {
  display: block;
  overflow: hidden;
  margin: 0rem 0.083rem;
}
.new_style-one {
  display: block;
  overflow: hidden;
  margin-top: 0.083rem;
}
.new_style-left {
  float: left;
  color: #d00;
}
.new_style-left > b {
  float: left;
  font-size: 0.1rem;
  font-weight: 100;
  padding-top: 0.083rem;
}
.new_style-left > span {
  float: left;
  font-size: 0.167rem;
  padding-left: 0.025rem;
  padding-right: 0.042rem;
}
.new_style-left > i {
  float: left;
  font-size: 0.083rem;
  font-style: normal;
  padding-top: 0.067rem;
}
.new_style-left > u {
  float: left;
  font-size: 0.133rem;
  color: #000;
  margin-left: 0.167rem;
  text-decoration: none;
  border: 1px solid #000;
  padding: 0.033rem 0.033rem 0.033rem 0.167rem;
  border-radius: 0.083rem;
  /* background: url(img/8.png) no-repeat 0rem 0.05rem; */
}
.new_style-right {
  clear: both;
  padding-top: 0.05rem;
  color: #969696;
  font-size: 0.108rem;
}
.new_style-top {
  font-size: 0.092rem;
  color: #f2303c;
  line-height: 0.1rem;
  margin-top: 0.05rem;
  height: 0.15rem;
}
.new_style-top > span {
  border: 1px solid #d00;
  box-sizing: border-box;
}
.discuss {
  border: 0rem;
  background-color: rgb(248, 248, 248);
  margin-top: -0.083rem;
  padding-top: 0.033rem;
}
.books {
  overflow: hidden;
  padding: 0.052rem 0rem;
}
.books_one {
  float: left;
}
.books_two {
  float: right;
}
.books_one-p1 {
  width: 1.25rem;
  height: 0.125rem;
  overflow: hidden;
  padding-top: 0rem;
  padding-bottom: 0.025rem;
  /* background: url(img/9.png) no-repeat 0.267rem; */
}
.books_one-p1 > span {
  display: block;
  float: left;
  height: 0.117rem;
  font-size: 0.125rem;
  font-weight: bold;
  color: #ff8161;
}
.books_one-p2 {
  padding-top: 0.05rem;
  font-size: 0.1rem;
  line-height: 0.108rem;
  color: #b4b4b4;
}
.books_one-p2 > span {
  color: #ff8161;
  padding-left: 0.025rem;
}
.books_two {
  float: right;
  padding-top: 0.05rem;
}
.books_two > span {
  display: block;
  line-height: 0.2rem;
  border: 1px solid #ff8161;
  background-color: #fff2ef;
  color: #ff8161;
  font-size: 0.1rem;
  padding: 0rem 0.083rem;
  border-radius: 0.1rem;
  margin-right: 0.083rem;
}
</style>
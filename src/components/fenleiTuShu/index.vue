<template>
    <div class="fenleiTuShu">
        
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
                        <span>{{item.more}}</span>
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
            </div>
    </div>
</template>

<script>
import {fenleiOneApi} from "@api/fenlei"
export default {
    name:"fenleiTuShu",
     data(){
    return{ 
      fenleiList:[],
      fenleiLists:[],
      titler:[],
      list:[
        {
          title:"%E5%9B%BE%E4%B9%A6",
          pageid:712231
        },
        {
          title:"%E7%AB%A5%E4%B9%A6",
          pageid:712675
        },
        {
          title:"%E7%94%B5%E5%AD%90%E4%B9%A6",
          pageid:712239
        },
         {
          title:"%E5%90%AC%E4%B9%A6&",
          pageid:712636
        },
         {
          title:"%E7%BD%91%E7%BB%9C%E6%96%87%E5%AD%A6",
          pageid:712648
        },
         {
          title:"%E5%A5%B3%E8%A3%85",
          pageid:713046
        },
         {
          title:"%E7%94%B7%E8%A3%85",
          pageid:713109
        },
         {
          title:"%E7%94%B7%E5%A5%B3%E9%9E%8B",
          pageid:713178
        },
         {
          title:"%E7%AB%A5%E8%A3%85%E7%AB%A5%E9%9E%8B",
          pageid:712821
        },
         {
          title:"%E5%86%85%E8%A1%A3%E9%85%8D%E9%A5%B0",
          pageid:713213
        },
         {
          title:"%E6%AF%8D%E5%A9%B4%E7%8E%A9%E5%85%B7",
          pageid:712954
        },
         {
          title:"%E9%A3%9F%E5%93%81%E7%94%9F%E9%B2%9C",
          pageid:713260
        },
         {
          title:"%E7%BE%8E%E5%A6%86%E4%B8%AA%E6%8A%A4",
          pageid:713244
        },
         {
          title:"%E6%89%8B%E6%9C%BA%E6%95%B0%E7%A0%81",
          pageid:713343
        },
         {
          title:"%E7%94%B5%E8%84%91%E5%8A%9E%E5%85%AC",
          pageid:713359
        },
         {
          title:"%E5%AE%B6%E7%94%A8%E7%94%B5%E5%99%A8",
          pageid:713362
        },
         {
          title:"%E8%BF%90%E5%8A%A8%E6%88%B7%E5%A4%96",
          pageid:713189
        },
         {
          title:"%E7%8F%A0%E5%AE%9D%E9%A5%B0%E5%93%81",
          pageid:713233
        },
         {
          title:"%E7%AE%B1%E5%8C%85%E7%9A%AE%E5%85%B7",
          pageid:713209
        },
      ] ,
      i:0,     
    }
  },
  methods:{
    async handleUpdate(){
      let data=await fenleiOneApi(this.list[this.i].title,this.list[this.i].pageid);
      // console.log(data)
      this.titler.push(data.content);
      // console.log(this.titler)
      this.fenleiList=data.content.mini_banner.content;
      this.fenleiLists=data.content.pile[0].group;
      // console.log(this.fenleiLists)
    }
  },
   created(){
      this.i=this.$route.params.i;
      this.handleUpdate()
  },
  beforeRouteUpdate(to,from,next){
    next()
    this.i=this.$route.params.i;
    this.handleUpdate()
  }
}
</script>

<style>
    .fenleiTuShu{
        height: 100%;
    }
    .class_div {
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
  width: 100%;
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
  /* background: url(img/4.png) no-repeat center */
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
}
</style>


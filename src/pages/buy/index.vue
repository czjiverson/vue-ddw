<template>
  <div class="dd_buy page">
    <Header title="值得买" icon />
    <div class="buy_section">
      <!-- buy_section-nav -->
      <div class="buy_section-nav">
        <ul>
          <li>
            <a href="#" v-for="(item,index) in arr" :key="index">
              <img :src="item.image" alt />
            </a>
          </li>
        </ul>
      </div>

      <!-- buy_section-box1 -->
      <div class="buy_section-box1">
        <h1>促销专场</h1>
        <a href="#">更多></a>
        <div class="buy_section-list1">
          <a href="#" v-for="(item,index) in buyList" :key="index">
            <p>
              {{item.title}}
              <br />
              <span>{{item.txt}}</span>
            </p>
            <img :src="item.imgUrl" alt />
          </a>
        </div>
      </div>

      <!-- buy_section-box2 -->
      <div class="buy_section-box2" 
      v-for="(item,index) in buyListe" 
      :key="index"
      >
        <h1>{{item.navName}}</h1>
        <a href="#">更多></a>
        <div class="buy_section-list2">
          <ul>
              <li href="#" v-for="(items,index) in item.infos" :key="index">
                <img :src="items.productImageUrl" alt />
                <p>{{items.productName}}</p>
                <i>
                  <span>
                    <span>￥{{items.salePrice}}</span>
                  </span>
                  <br />
                  <span>
                    <del>
                      <span>￥{{items.originPrice}}</span>
                    </del>
                  </span>
                </i>
              </li>
          </ul>
        </div>

        <div class="bangdan" v-for="(items,indexs) in arr1[index]" :key="indexs">
          <div class="bangdan_img">
            <p>畅销榜第{{items.infos[0].num}}名</p>
            <img :src="items.infos[0].productImageUrl" alt />
          </div>
          <div class="bangdan_right">
            <p>更多></p>
            <p>{{items.infos[0].productName}}</p>
            <p>满额减</p>
            <p>
              折后价
              <span>￥{{items.infos[0].cheapWord || items.infos[0].salePrice}}</span>
            </p>
            <p>
              {{items.infos[0].salePrice}}
              <del>{{items.infos[0].originPrice}}</del>
            </p>
            <p>
              <span class="iconfont">&#xe6cd;{{items.infos[0].commentCount}}</span>
              <span class="iconfont">&#xe634;{{items.infos[0].averageScore}}</span>
              <span class="iconfont">&#xe621;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { buyApi, buysApi } from "@api/buy";
export default {
  name: "Buy",
  data() {
    return {
      arr: [
        {
          image: "https://img61.ddimg.cn/2018/8/25/20180825153505715.png"
        },
        {
          image: "https://img61.ddimg.cn/2018/8/25/2018082515383576435.png"
        },
        {
          image: "https://img61.ddimg.cn/2018/8/25/2018082515395286917.png"
        },
        {
          image: "https://img63.ddimg.cn/2018/8/31/2018083116044590576.png"
        },
        {
          image: "http://img63.ddimg.cn/upload_img/00660/h5/ddpp-1537350824.png"
        },
        {
          image: "https://img62.ddimg.cn/2018/8/31/2018083116363087335.png"
        },
        {
          image: "https://img62.ddimg.cn/2018/8/31/2018083116355544875.png"
        },
        {
          image: "https://img61.ddimg.cn/2018/8/31/2018083116365438226.png"
        },
        {
          image: "https://img62.ddimg.cn/2018/8/31/2018083116373380162.png"
        },
        {
          image:
            "http://img60.ddimg.cn/upload_img/00782/h5/coupon-1537505152.png"
        }
      ],
      buyList: [],
      buyListe: [],
      buyLists:[],
      arr1:[[],[],[],[]]
    };
  },
  methods: {
    async handleBuy() {
      let date = await buyApi();
      this.buyList = date.infos1;
    },
    async handleBuys() {
      let date1 = await buysApi();
      // console.log(date1.result.columns);
      for(var i=0;i<date1.result.columns.length;i++){
        if(date1.result.columns[i].navType!==1){
          this.buyListe.push(date1.result.columns[i])
        }else{
          this.buyLists.push(date1.result.columns[i])
        }
      }
      // console.log(this.buyListe)
      // console.log(this.buyLists)
      for(var i=0;i<4;i++){
        for(var n=i*4;n<i*4+4;n++){
          this.arr1[i].push(this.buyLists[n])
        }
      }
      // console.log(this.arr1)
    }
  },
  created() {
    this.handleBuy();
    this.handleBuys();
  }
};
</script>

<style>
.dd_buy {
  padding-top: 0.367rem;
}
.buy_section {
  width: 100%;
  height: 100%;
  overflow: auto;
}

/* buy_section-nav */
.buy_section-nav {
  display: flex;
  flex-direction: row-reverse;
}

.buy_section-nav > ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.buy_section-nav ul li img {
  width: 0.625rem;
  display: inline-block;
}

/* buy_section-box1 */
.buy_section-box1 {
  padding: 0 0.108rem;
  min-height: 0.417rem;
  background: url("http://z.dangdang.com/static/img/%E4%B9%9D%E5%AE%AB%E6%A0%BC.5e5e35d.png")
    no-repeat;
  background-size: 100% 100%;
  text-align: center;
  position: relative;
}

.buy_section-box1 h1 {
  color: #fff;
  font-size: 0.183rem;
  padding: 0.133rem 0 0.042rem 0;
}

.buy_section-box1 > a {
  font-size: 0.117rem;
  position: absolute;
  color: #fff;
  right: 0.108rem;
  padding: 0.133rem 0 0.042rem 0;
  top: 0;
}

.buy_section-list1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 10px;
}

.buy_section-list1 a {
  display: block;
  width: 0.767rem;
  height: 1.025rem;
  background: #fff;
  padding: 0.083rem 0.083rem 0.042rem 0.083rem;
  border-radius: 8px;
  margin-bottom: 5px;
}

.buy_section-list1 a > p {
  width: 92px;
  color: #000;
  font-size: 0.1rem;
  line-height: 0.167rem;
}
.buy_section-list1 a > p span {
  color: #943dff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 0.75rem;
  display: block;
  text-align: center;
}

.buy_section-list1 a img {
  width: 0.617rem;
  height: 0.617rem;
  margin-left: 0.083rem;
  margin-top: 0.083rem;
}

/* buy_section-box2 */
.buy_section-box2 {
  padding: 0 0.108rem;
  min-height: 0.417rem;
  background: url("http://z.dangdang.com/static/img/9.9-background.d4afbba.png")
    no-repeat;
  background-size: 100% 1.973rem;
  text-align: center;
  position: relative;
}

.buy_section-box2 h1 {
  color: #fff;
  font-size: 0.183rem;
  padding: 0.133rem 0 0.042rem 0;
}

.buy_section-box2 > a {
  font-size: 0.117rem;
  position: absolute;
  color: #fff;
  right: 0.108rem;
  padding: 0.133rem 0 0.042rem 0;
  top: 0;
}
.buy_section-list2 {
  width: 100%;
  height: 1.442rem;
  overflow: scroll;
}

.buy_section-list2 ul {
  height: 1.442rem;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}

.buy_section-list2 ul li  {
  display: block;
  width: 0.8rem;
  text-align: center;
  margin: 0 5px;
  background: #fff;
  border-radius: 0.067rem;
  float: left;
}

.buy_section-list2 ul li  img {
  width: 0.8rem;
  height: 0.8rem;
  display: inline-block;
}

.buy_section-list2 ul li  > p {
  width: 0.7rem;
  font-size: 0.1rem;
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}

.buy_section-list2 ul li  i {
  font-style: normal;
}

.buy_section-list2 ul li  i > span:nth-child(1) {
  color: #f3344a;
  font-size: 0.1rem;
  padding-left: 5px;
  line-height: 0.233rem;
}
.buy_section-list2 ul li  i > span:nth-child(3) {
  color: #bababa;
  padding-left: 5px;
}
.bangdan {
  width: 100%;
  height: 1.433rem;
  padding: 0.063rem 0;
  margin-top: 0.063rem;
  overflow: hidden;
  text-align: left;
}
.bangdan .bangdan_img {
  width: 0.917rem;
  float: left;
}
.bangdan .bangdan_img p {
  background-image: linear-gradient(133deg, #f296bd, #ee3b31);
  display: inline-block;
  color: #fff;
  padding: 0.017rem 0.083rem;
  border-radius: 0 0 0.083rem 0;
  margin-bottom: 0.063rem;
}
.bangdan .bangdan_img img {
  width: 0.917rem;
  height: 0.917rem;
}
.bangdan .bangdan_right {
  width: 1.958rem;
  float: right;
  box-sizing: border-box;
  padding-left: 0.042rem;
}
.bangdan_right p:nth-child(1) {
  float: right;
  margin-right: 0.067rem;
  color: #a1a1a1;
  font-size: 0.1rem;
}
.bangdan_right p:nth-child(2) {
  color: #383838;
  margin-top: 0.042rem;
  height: 0.167rem;
  width: 2rem;
  padding-top: .217rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bangdan_right p:nth-child(3) {
  font-size: 0.117rem;
  line-height: .2rem;
  padding: 0.013rem 0.008rem;
  border-radius: 0.013rem;
  background: #f2303c;
  color: #fff;
  display: inline;
}

.bangdan_right p:nth-child(4) {
  color: #f2303c;
  margin-top: 0.042rem;
  height: 0.167rem;
  font-size:.117rem;
  width: 2rem;
}
.bangdan_right p:nth-child(4) span {
  font-weight: 900;
}

.bangdan_right p:nth-child(5) {
  color: #f23440;
  margin-top: 0.042rem;
  font-size: .117rem;
}
.bangdan_right p:nth-child(5) del{
  padding: 0 .083rem 0 .1rem;
    font-size: 12px;
    color: #777;
}
.bangdan_right p:nth-child(6) {
  margin-top: .083rem;
    font-size: .083rem;
    height: .142rem;
    display: flex;
    justify-content: flex-end;
}


.bangdan_right p:nth-child(6) span{
  margin-left: .083rem;
    color: #98a6aa;
    font-size: .1rem
}
.bangdan_right p:nth-child(6) span:nth-child(3){
  margin-left:.042rem;
  color: #f22b2b;
    border: 1px solid #d5d5d5;
    border-radius: .042rem;
    padding: .027rem;
    font-size: .117rem;
}
</style>
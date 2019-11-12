<template>
  <div class="dd_fenlei page">
    <Header title="分类" icon />
    <div class="classify-box2">
      <nav class="class_nav">
        <ul>
          <li>图书</li>
          <li>童书</li>
          <li>电子书</li>
          <li>听书</li>
          <li>网络文学</li>
          <li>女装</li>
        </ul>
      </nav>

      <div class="class_div">
        <div class="class_div-one">
          <div class="class_div-over">
            <div class="rr1">
              <img
                src="http://img63.ddimg.cn/upload_img/00803/1/886x315_wzh_20191107-1573118749.jpg"
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
                </span>
                <span class="title2">></span>
              </div>
            </div>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fenlei"
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
  overflow: hidden;
}
.class_nav > ul {
  padding-bottom: 0.367rem;
}
.class_nav > ul > li {
  border: 0.008rem solid transparent;
  border-left: 0.025rem solid transparent;
  border-right-color: #eff4fa;
  background-color: #eff4fa;
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
.class_div {
  width: 78.6%;
  background-color: #eff4fa;
  height: 100%;
  overflow: hidden;
  float: left;
}
.class_div-one {
  border-left: none;
  background-color: #eff4fa;
  padding: 0 0 0 0.067rem;
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
  /* background: url(img/4.png) no-repeat center */
  text-align: center;
  line-height: 0.5rem;
}
.rr2_two {
  float: right;
}
.bangdan {
  background: white;
  margin-top: 0.067rem;
}
.bangdan > h3 {
  line-height: 0.15rem;
  padding-left: 0.117rem;
  padding-top: 0.058rem;
  font-size: 0.108rem;
  color: #4d525d;
  position: relative;
  overflow: hidden;
}
.bangdan > ul {
  margin-bottom: 0;
  padding: 0 0.042rem 0.05rem;
  overflow: hidden;
}
.bangdan > ul > li {
  width: 0.767rem;
  float: left;
  margin-bottom: 0.083rem;
}
.bangdan > ul > li > img {
  display: block;
  width: 0.567rem;
  height: 0.567rem;
  margin-left: 0.083rem;
}
.bangdan > ul > li > p {
  text-align: center;
  font-size: 0.092rem;
  color: #4d525d;
  line-height: 0.45rem;
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

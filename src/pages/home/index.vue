<template>
  <div class="dd_home page">
    <Header title="当当网" />

    <!-- section -->
    <div class="dd_home-section">
      <!-- section_banners -->
      <div class="section_banners">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="http://img62.ddimg.cn/upload_img/00803/1/1242x366_1111-1573543573.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://img60.ddimg.cn/upload_img/00271/jiangyan/1242-366-1573627784.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://img61.ddimg.cn/upload_img/00628/dangdang/1242-366-1573357079.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://img55.ddimg.cn/214240062240885_y.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://img61.ddimg.cn/upload_img/00785/ts1113_1117/1242x366-1573531427.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://img59.ddimg.cn/219790073687899_y.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://img61.ddimg.cn/upload_img/00727/123/1242x366-1573629099.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://img61.ddimg.cn/ddreader/dangebook/11ynew1242x366.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- section_nav -->
      <div class="section_nav">
        <ul v-for="(item,index) in images" :key="index">
          <router-link tag="li" v-for="(image,index) in item" :key="index" :to="image.path">
            <img :src="image.img" alt />
          </router-link>
        </ul>
      </div>

      <!-- home_nav2 -->
      <div class="home_nav2">
        <div class="home_nav2_city">
          <router-link tag="span" to="/city">北京</router-link>
          <i></i>
        </div>
        <ul class="home_nav2_switch">
          <router-link tag="li" to="/home/homeLeft">热门书籍</router-link>
          <router-link tag="li" to="/home/homeRight">最新书籍</router-link>
        </ul>
        <div class="home_nav2_search">
          <router-link class="iconfont" tag="i" to="/search">&#xe613;</router-link>
        </div>
      </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        [
          {
            img:
              "http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png",
            path: "/tushuList"
          },
          {
            img:
              "http://img61.ddimg.cn/upload_img/00796/1/xinshu-1563173497.png",
            path: "/tushuList"
          },
          {
            img:
              "http://img62.ddimg.cn/upload_img/00702/B/SY-iCON-3-5.10-1557488951.png",
            path: "/tushuList"
          },
          {
            img:
              "http://img60.ddimg.cn/upload_img/00702/T/icon-cx-1559818801.png",
            path: "/tushuList"
          },
          {
            img:
              "http://img62.ddimg.cn/upload_img/00705/B/icon-5.28-1559032809.png",
            path: "/tushuList"
          }
        ],
        [
          {
            img: "http://img50.ddimg.cn/116550067538580_y.jpg",
            path: "/tushuList"
          },
          {
            img:
              "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png",
            path: "/tushuList"
          },
          {
            img:
              "http://img61.ddimg.cn/upload_img/00528/000/00000-1564393723.png",
            path: "/tushuList"
          },
          {
            img:
              "http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png",
            path: "/tushuList"
          },
          {
            img:
              "http://img63.ddimg.cn/upload_img/00528/0000/12311-1556245256.jpg",
            path: "/tushuList"
          }
        ]
      ]
    };
  }
};
</script>

<style>
.dd_home {
  padding-top: 0.367rem;
}
.dd_home-section {
  width: 100%;
  height: 100%;
  overflow: auto;
}

/* section_banners */
.section_banners {
  width: 100%;
  height: 0.917rem;
  position: relative;
  z-index: 5;
}

.section_banners .van-swipe {
  width: 100%;
  height: 100%;overflow: hidden;
}
.section_banners .van-swipe .van-swipe-item {
  width: 100%;
  height: 100%;
}
.van-swipe__track {
  height: 100%;
}
.van-swipe-item {
  float: left;
}
.van-swipe-item img {
  height: 100%;
}

/* section_nav */
.section_nav {
  display: flex;
  flex-direction: column;
  border-bottom: 0.083rem solid #eee;
  position: relative;
  z-index: 5;
}

.section_nav ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.section_nav ul li img {
  width: 0.625rem;
}

/* home_nav2 */
.home_nav2 {
  padding: 0 0.083rem;
  height: 0.233rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  position: relative;
  z-index: 5;
  background: #fff;
}

.home_nav2_city {
  width: 0.333rem;
  height: 100%;
  font-size: 0.117rem;
  line-height: 0.233rem;
  padding-left: 0.083rem;
}

.home_nav2_city i {
  width: 0.083rem;
  height: 0.083rem;
  float: right;
  box-sizing: border-box;
  border: 0.042rem solid #ccc;
  border-color: transparent;
  border-top-color: #ccc;
  margin-top: 0.1rem;
}

.home_nav2_switch {
  display: flex;
}
.home_nav2_switch li {
  line-height: 0.233rem;
  font-size: 0.125rem;
  padding: 0 0.125rem;
}

.home_nav2_search {
  width: 0.233rem;
  height: 100%;
  text-align: center;
  line-height: 0.233rem;
}
</style>
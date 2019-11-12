<template>
  <div class="dd_home page">
    <Header title="首页" icon />

    <!-- section -->
    <div class="dd_home-section">
      <!-- section_banners -->
      <div class="section_banners">
        <img
          src="http://img61.ddimg.cn/upload_img/00785/ts1108_1111/1242x366_dl_1106-1573120161.jpg"
          alt
        />
      </div>
      <!-- section_banner -->
      <div class="section_banner">
        <img src="http://img60.ddimg.cn/upload_img/00609/mao/banner1242&524-1573035645.jpg" alt />
      </div>
      <!-- section_nav -->
      <div class="section_nav">
        <ul>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt />
            </a>
          </li>
        </ul>
      </div>
      <!-- section_ss -->
      <div class="section_ss">
        <div class="section_ss-title">
          <a href="#">
            <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt />
          </a>
        </div>
        <div class="section_ss-box">
          <a href="#">
            <span>00</span>
            <span>时</span>
            <span>00</span>
            <span>分</span>
            <span>00</span>
            <span>秒</span>
          </a>
        </div>
        <div class="section_ss-lists">
          <ul>
            <li>
              <a href="#">
                <img src="http://img3m9.ddimg.cn/38/12/1542778319-1_h_1.jpg" alt />
                <p>1元秒杀，限量抢购，抢完即止！</p>
                <i>
                  <span>
                    <span>￥</span>1
                  </span>
                  <br />
                  <span>
                    <del>
                      <span>￥</span>1234.00
                    </del>
                  </span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="http://img3m9.ddimg.cn/38/12/1542778319-1_h_1.jpg" alt />
                <p>1元秒杀，限量抢购，抢完即止！</p>
                <i>
                  <span>
                    <span>￥</span>1
                  </span>
                  <br />
                  <span>
                    <del>
                      <span>￥</span>1234.00
                    </del>
                  </span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="http://img3m9.ddimg.cn/38/12/1542778319-1_h_1.jpg" alt />
                <p>1元秒杀，限量抢购，抢完即止！</p>
                <i>
                  <span>
                    <span>￥</span>1
                  </span>
                  <br />
                  <span>
                    <del>
                      <span>￥</span>1234.00
                    </del>
                  </span>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="http://img3m9.ddimg.cn/38/12/1542778319-1_h_1.jpg" alt />
                <p>1元秒杀，限量抢购，抢完即止！</p>
                <i>
                  <span>
                    <span>￥</span>1
                  </span>
                  <br />
                  <span>
                    <del>
                      <span>￥</span>1234.00
                    </del>
                  </span>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {homeApi} from "@api/home"
export default {
  name: "Home",
  data(){
    return {
      ms:""
    }
  },
  async created(){
    let data = await homeApi();
    this.ms=data;
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
}

.section_banners img {
  width: 100%;
  height: 100%;
}

/* section_banner */
.section_banner {
  width: 100%;
  height: 1.308rem;
}

.section_banner img {
  width: 100%;
  height: 100%;
}

/* section_nav */
.section_nav {
  display: flex;
  flex-direction: column;
  border-bottom: 0.083rem solid #eee;
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

/* sections_ss */
.section_ss {
  width: 100%;
  height: 2.25rem;
  border-bottom: 0.083rem solid #eee;
}

.section_ss-title {
  width: 100%;
  height: 0.342rem;
}

.section_ss-title a img {
  width: 100%;
  height: 100%;
}

.section_ss-box {
  width: 100%;
}

.section_ss-box > a {
  display: block;
  width: 100%;
  height: 0.208rem;
  padding-top: 2px;
  padding-bottom: 0.183rem;
  text-align: center;
}

.section_ss-box > a span {
  display: inline-block;
  height: 0.192rem;
  line-height: 0.192rem;
}

.section_ss-box > a span:nth-child(2n + 1) {
  background: #323232;
  border-radius: 5px;
  width: 16px;
  color: #fff;
}

.section_ss-box > a span:nth-child(5) {
  background: #f3344a;
}

.section_ss-box > a span:nth-child(2n) {
  padding: 0 3px;
}

.section_ss-lists {
  width: 100%;
  height: 1.492rem;
}

.section_ss-lists ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}

.section_ss-lists ul li a {
  display: block;
  width: 0.883rem;
  text-align: center;
  padding: 0 5px;
}

.section_ss-lists ul li a img {
  width: 0.8rem;
  height: 0.8rem;
  display: inline-block;
}

.section_ss-lists ul li a p {
  width: 0.8rem;
  font-size: 0.1rem;
  color: #323232;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.section_ss-lists ul li a i {
  font-style: normal;
  display: block;
  text-align: left;
}

.section_ss-lists ul li a i > span:nth-child(1) {
  color: #f3344a;
  font-size: 0.133rem;
  padding-left: 5px;
  line-height: 0.233rem;
}

.section_ss-lists ul li a i > span:nth-child(3) {
  color: #bababa;
  padding-left: 5px;
}
</style>
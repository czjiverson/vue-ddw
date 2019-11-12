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


</style>
<template>
  <div class="dd_buy page">
    <Header title="值得买" icon />
    <div class="buy_section">
      <!-- buy_section-nav -->
      <div class="buy_section-nav">
        <ul>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt />
            </a>
          </li>
        </ul>
      </div>

      <!-- buy_section-box1 -->
      <div class="buy_section-box1">
        <h1>促销专场</h1>
        <a href="#">更多></a>
        <div class="buy_section-list1">
          <a href="#">
            <p>店庆遇上双11-玩具2件5折</p>
            <img src="http://img3m0.ddimg.cn/71/23/25278830-1_b_6.jpg" alt />
          </a>
          <a href="#">
            <p>店庆遇上双11-玩具2件5折</p>
            <img src="http://img3m0.ddimg.cn/71/23/25278830-1_b_6.jpg" alt />
          </a>
          <a href="#">
            <p>店庆遇上双11-玩具2件5折</p>
            <img src="http://img3m0.ddimg.cn/71/23/25278830-1_b_6.jpg" alt />
          </a>
          <a href="#">
            <p>店庆遇上双11-玩具2件5折</p>
            <img src="http://img3m0.ddimg.cn/71/23/25278830-1_b_6.jpg" alt />
          </a>
          <a href="#">
            <p>店庆遇上双11-玩具2件5折</p>
            <img src="http://img3m0.ddimg.cn/71/23/25278830-1_b_6.jpg" alt />
          </a>
          <a href="#">
            <p>店庆遇上双11-玩具2件5折</p>
            <img src="http://img3m0.ddimg.cn/71/23/25278830-1_b_6.jpg" alt />
          </a>
        </div>
      </div>

      <!-- buy_section-box2 -->
      <div class="buy_section-box2">
        <h1>促销专场</h1>
        <a href="#">更多></a>
        <div class="buy_section-list2">
          <ul>
            <li>
              <a href="#">
                <img src="http://img3m9.ddimg.cn/38/12/1542778319-1_h_1.jpg" alt />
                <p>1元秒杀，限量抢购，抢完即止！</p>
                <i>
                  <span>
                    <span>￥</span>1.00
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
                    <span>￥</span>1.00
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
                    <span>￥</span>1.00
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
                    <span>￥</span>1.00
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
export default {
  name: "Buy"
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
  flex-direction: column;
}

.buy_section-nav ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.buy_section-nav ul li img {
  width: 0.625rem;
}

/* buy_section-box1 */
.buy_section-box1 {
  padding: 0 0.108rem;
  min-height: 0.417rem;
  background: url("http://z.dangdang.com/static/img/%E4%B9%9D%E5%AE%AB%E6%A0%BC.5e5e35d.png") no-repeat;
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

.buy_section-list1 a p {
  width: 92px;
  color: #943dff;
  font-size: 0.117rem;
  line-height: 0.167rem;
}

.buy_section-list1 a img {
  width: 0.617rem;
  height: 0.617rem;
  margin-top: 10px;
}

/* buy_section-box2 */
.buy_section-box2 {
  padding: 0 0.108rem;
  min-height: 0.417rem;
  background: url("http://z.dangdang.com/static/img/9.9-background.d4afbba.png") no-repeat;
  background-size: 100% 100%;
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
}

.buy_section-list2 ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}

.buy_section-list2 ul li a {
  display: block;
  width: 0.8rem;
  text-align: center;
  margin: 0 5px;
  background: #fff;
  border-radius: 0.067rem;
}

.buy_section-list2 ul li a img {
  width: 0.8rem;
  height: 0.8rem;
  display: inline-block;
}

.buy_section-list2 ul li a p {
  width: 0.7rem;
  font-size: 0.1rem;
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}

.buy_section-list2 ul li a i {
  font-style: normal;
}

.buy_section-list2 ul li a i > span:nth-child(1) {
  color: #f3344a;
  font-size: 0.1rem;
  padding-left: 5px;
  line-height: 0.233rem;
}

.buy_section-list2 ul li a i > span:nth-child(3) {
  color: #bababa;
  padding-left: 5px;
}
</style>
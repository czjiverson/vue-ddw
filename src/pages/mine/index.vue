<template>
  <div class="dd_mine page">
    <Header title="我的" icon/>
      <!-- mydd_section -->
        <div class="mydd_section">
            <!-- mydd_section-info -->
            <div class="mydd_section-info">
                <div class="mydd_section-basic">
                    <img src="http://img61.ddimg.cn/upload_img/00610/home/user-bg.jpg" alt="">
<<<<<<< HEAD
                    <router-link tag="span" to="/login">登录/注册</router-link>
=======
                    <a href="#">登录/注册</a>
>>>>>>> mao
                </div>
                <div class="mydd_section-stat">
                    <a href="#">
                        <p>0</p>
                        <p>收藏的仓库</p>
                    </a>
                    <a href="#">
                        <p>0</p>
                        <p>收藏的仓库</p>
                    </a>
                    <a href="#">
                        <p>0</p>
                        <p>收藏的仓库</p>
                    </a>
                </div>
            </div>

            <!-- mydd_section-order -->
            <div class="mydd_section-order">
                <a href="#" class="mydd_section-top">
                    <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-1.png" alt="">
                    <p>我的订单</p>
                    <p>查看全部购买的商品></p>
                </a>
                <div class="mydd_section-nav">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="http://img60.ddimg.cn/upload_img/00487/11111/fukuan-07.png" alt="">
                                <p>代付款</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="http://img60.ddimg.cn/upload_img/00487/11111/fukuan-07.png" alt="">
                                <p>代付款</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="http://img60.ddimg.cn/upload_img/00487/11111/fukuan-07.png" alt="">
                                <p>代付款</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- mydd_section-vip -->
            <div class="mydd_section-vip">
<<<<<<< HEAD
                <h6 v-for="(item,index) in mine" :key="index">
                    <img :src="item.image" alt="">
                    <p>{{item.name}}</p>
                    <p>></p>
                </h6>
=======
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
                <a href="#">
                    <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt="">
                    <p>我的订单</p>
                    <p>></p>
                </a>
>>>>>>> mao
            </div>
        </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
    name:"Mine",
    data(){
        return{
            mine:[
                {
                    name:"会员中心",
                    image:"http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png"
                },
                {
                    name:"我的礼券",
                    image:"http://img62.ddimg.cn/upload_img/00487/11111/wd-012-02.png"
                },
                {
                    name:"积分抵现",
                    image:"http://img60.ddimg.cn/upload_img/00487/11111/wd-012-03.png"
                },
                {
                    name:"我的电子书",
                    image:"http://img62.ddimg.cn/upload_img/00528/1234/111.png"
                },
                {
                    name:"我的礼品卡",
                    image:"http://img61.ddimg.cn/upload_img/00487/11111/wd-012-04.png"
                },
                {
                    name:"收货地址",
                    image:"http://img63.ddimg.cn/upload_img/00487/11111/wd-012-05.png"
                },
                {
                    name:"ceocs冬季特卖，2双3折",
                    image:"http://img60.ddimg.cn/upload_img/00538/1/qiang-icon-2017-muying.jpg"
                },
                {
                    name:"逻辑狗每满300减40",
                    image:"http://img60.ddimg.cn/upload_img/00538/1/qiang-icon-2017-muying.jpg"
                },
                {
                    name:"诗意阅读，30万图书每满150减50",
                    image:"http://img60.ddimg.cn/upload_img/00538/1/qiang-icon-2017-muying.jpg"
                },
                {
                    name:"客服反馈",
                    image:"http://img60.ddimg.cn/upload_img/00487/11111/wd-012-07.png"
                }
            ]
        }
    }
=======
    name:"Mine"
>>>>>>> mao
}
</script>

<style>
.dd_mine{
  padding-top:.367rem;
}


/* mydd_section */
        .mydd_section {
            width: 100%;
            height:100%;
            overflow: auto;
        }

        /* mydd_section-info */
        .mydd_section-info {
            width: 100%;
            height: 1.417rem;
        }

        .mydd_section-basic {
            width: 100%;
            height: .958rem;
            position: relative;
        }

        .mydd_section-basic img {
            width: 100%;
            height: 100%;
        }

<<<<<<< HEAD
        .mydd_section-basic span {
=======
        .mydd_section-basic a {
>>>>>>> mao
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: .983rem;
            height: .325rem;
            margin: auto;
            text-align: center;
            line-height: .333rem;
            border: 1px solid #ccc;
            border-radius: .333rem;
            color: #fff;
            font-size: .15rem;
        }

        .mydd_section-stat {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-content: center;
        }

        .mydd_section-stat a {
            height: .283rem;
            padding: .083rem 0;
            display: block;
            border-right: 1px solid #ccc;
            text-align: center;
            width: 100%;
        }

        .mydd_section-stat a:nth-child(3) {
            border: none;
        }

        /* mydd_section-order */
        .mydd_section-order {
            height: .833rem;
            width: 100%;
            border-bottom: .083rem solid #eee;
        }

        .mydd_section-top {
            height: .383rem;
            padding: 0 .083rem;
            display: flex;
        }

        .mydd_section-top img {
            width: .183rem;
            height: .183rem;
            padding-right: .042rem;
            padding-top: .092rem;
        }

        .mydd_section-top p {
            line-height: .383rem;
            color: #999;
        }

        .mydd_section-top p:nth-child(2) {
            flex: 1;
            color: #4d525d
        }

        .mydd_section-nav ul {
            display: flex;
            justify-content: space-around;
            text-align: center;
        }

        .mydd_section-nav ul li a p {
            width: 100%;
            color: #4d525d
        }

        .mydd_section-nav ul li a img {
            width: .233rem;
            display: inline-block;
            padding-top: .042rem;
        }


        /* mydd_section-vip */
        .mydd_section-vip {
            width: auto;
            height: .383rem;
        }

<<<<<<< HEAD
        .mydd_section-vip h6 {
=======
        .mydd_section-vip a {
>>>>>>> mao
            height: .383rem;
            padding: 0 .083rem;
            display: flex;
            border-bottom: 1px solid #eee;
<<<<<<< HEAD
            font-weight: 100;
        }

        .mydd_section-vip h6:nth-child(1) {
            border-bottom: .083rem solid #eee;
        }

        .mydd_section-vip h6:nth-child(6) {
            border-bottom: .083rem solid #eee;
        }

        .mydd_section-vip h6:nth-child(9) {
            border-bottom: .083rem solid #eee;
        }

        .mydd_section-vip h6 img {
=======
        }

        .mydd_section-vip a:nth-child(1) {
            border-bottom: .083rem solid #eee;
        }

        .mydd_section-vip a:nth-child(6) {
            border-bottom: .083rem solid #eee;
        }

        .mydd_section-vip a:nth-child(9) {
            border-bottom: .083rem solid #eee;
        }

        .mydd_section-vip a img {
>>>>>>> mao
            width: .183rem;
            height: .183rem;
            padding-right: .042rem;
            padding-top: .092rem;
        }

<<<<<<< HEAD
        .mydd_section-vip h6 p {
=======
        .mydd_section-vip a p {
>>>>>>> mao
            line-height: .383rem;
            color: #999;
        }

<<<<<<< HEAD
        .mydd_section-vip h6 p:nth-child(2) {
=======
        .mydd_section-vip a p:nth-child(2) {
>>>>>>> mao
            flex: 1;
            color: #4d525d
        }
</style>
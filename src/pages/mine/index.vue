<template>
  <div class="dd_mine page">
    <Header title="我的" icon/>
      <!-- mydd_section -->
        <div class="mydd_section">
            <!-- mydd_section-info -->
            <div class="mydd_section-info">
                <div class="mydd_section-basic">
                    <img src="http://img61.ddimg.cn/upload_img/00610/home/user-bg.jpg" alt="">
                    <a href="#">登录/注册</a>
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
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:"Mine"
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

        .mydd_section-basic a {
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

        .mydd_section-vip a {
            height: .383rem;
            padding: 0 .083rem;
            display: flex;
            border-bottom: 1px solid #eee;
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
            width: .183rem;
            height: .183rem;
            padding-right: .042rem;
            padding-top: .092rem;
        }

        .mydd_section-vip a p {
            line-height: .383rem;
            color: #999;
        }

        .mydd_section-vip a p:nth-child(2) {
            flex: 1;
            color: #4d525d
        }
</style>
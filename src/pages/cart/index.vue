<template>
  <div class="dd_cart page">
    <Header title="购物车" icon />

    <div class="section-cart" v-show="flagList">
      <div class="r1" v-for="(item,index) in carts" :key="index">
        <div class="r2">
          <input type="checkbox" :checked="item.flag" @change="handleChangeCk(index)" />
          <a href="#">
            <img :src="item.comment.image_url" alt />
          </a>
          <div class="r2_box">
            <p>{{item.comment.name}}</p>
            <i>
              ￥{{item.comment.ebook_price*100*item.counter/100||5000*item.counter/100}}
              <del>￥{{item.comment.price*100*item.counter/100}}</del>
            </i>
            <v-touch tag="b" @tap="handleRemove(item.id,index)">X</v-touch>
            <div class="num">
              <v-touch tag="p" @tap="handleDel(item.id,item.comment,index)">-</v-touch>
              <input type="text" :value="item.counter" />
              <v-touch tag="p" @tap="handleAdd(item.id,item.comment,index)">+</v-touch>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="noCart" v-show="flag">
      <section class="section">
        <div class="empty">
          <p class="desc">您还没有购买任何商品</p>
          <div class="cart">
            <router-link tag="span" to="/">逛一逛</router-link>
            <span>我的收藏</span>
          </div>
        </div>
      </section>
    </div>

    <footer class="footer">
      <div class="f1">
        <input type="checkbox" :checked="selectAll" @change="handleChangeAll()" />
        <span>全选</span>
      </div>
      <div class="f2">
        <span>结算</span>
      </div>
      <div class="f3">
        <span>
          合计:
          <i>￥{{allPrice.countP}}</i>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import storage from "@/lib/cart";
export default {
  name: "Cart",
  data() {
    return {
      carts: [],
      selectAll: true,
      flag: true,
      flagList: false
    };
  },
  methods: {
    handleChangeAll() {
      this.selectAll = !this.selectAll;
      this.carts.forEach(item => {
        item.flag = this.selectAll;
      });
    },
    handleChangeCk(index) {
      this.carts[index].flag = !this.carts[index].flag;
      let bstop = true;

      for (var i = 0; i < this.carts.length; i++) {
        if (!this.carts[i].flag) {
          bstop = false;
        }
      }
      this.selectAll = bstop;
    },
    handleAdd(id, content, index) {
      // console.log(id, content);
      storage.push(id, 1, content);
      for (var i = 0; i < this.carts.length; i++) {
        if (i === index) {
          this.carts[i].counter++;
        }
      }
    },
    handleDel(id, content, index) {
      if (this.carts[index].counter > 1) {
        storage.subtract(id, 1, content);
        for (var i = 0; i < this.carts.length; i++) {
          if (i === index) {
            this.carts[i].counter--;
          }
        }
      }
    },
    handleRemove(id, index) {
      storage.remove(id);
      for (var i = 0; i < this.carts.length; i++) {
        if (i === index) {
          this.carts.splice(index, 1);
        }
      }
    }
  },
  created() {
    var cart = JSON.parse(localStorage.getItem("CART"));
    if (cart) {
      cart.forEach(item => {
        item.flag = true;
      });
      this.carts = cart;
    }
    // console.log(this.carts);

    if (this.carts) {
      this.flag = false;
      this.flagList = true;
    } else {
      this.flag = true;
      this.flagList = false;
    }
  },
  computed: {
    allPrice() {
      let countP = 0;
      let countNum = 0;
      for (var i = 0; i < this.carts.length; i++) {
        if (this.carts[i].flag) {
          countNum += this.carts[i].counter;
          countP +=
            (this.carts[i].comment.ebook_price || 50) * this.carts[i].counter;
        }
      }
      countP = Number(countP).toFixed(2);
      // console.log(countP)
      return {
        countP,
        countNum
      };
    }
  }
};
</script>

<style>
.dd_cart {
  padding-top: 0.367rem;
}
.section-cart {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #f2f2f2;
}
.r1 {
  overflow: hidden;
  border-top: 1px solid #ebebeb;
  margin-top: 0.042rem;
  background: #fff;
  overflow: auto;
  width: 100%;
  padding-top: 0.083rem;
  padding-bottom: 0.083rem;
}
.r2 {
  margin-top: 0.008rem;
  border-bottom: 0.008rem solid #fafafa;
  overflow: hidden;
}
.r2 > input {
  float: left;
  margin: 0.333rem 0.083rem 0rem 0.083rem;
}
.r2 > a > img {
  float: left;
  width: 0.9rem;
  height: 0.9rem;
}
.r2_box {
  float: left;
  font-size: 0.1rem;
  margin-left: 0.083rem;
  width: 1.817rem;
}
.r2_box > p {
  float: left;
  width: 1.75rem;
  height: 0.317rem;
  overflow: hidden;
  line-height: 0.133rem;
  display: block;
  color: #323232;
  word-wrap: break-word;
  font-size: 0.117rem;
  line-height: 0.15rem;
}
.r2_box > i {
  clear: both;
  float: left;
  font-style: normal;
  font-size: 0.133rem;
  color: #d00;
  margin: 0.05rem 0 6px;
}
.r2_box > i > del {
  padding-left: 0.042rem;
  color: #ccc;
  font-size: 0.117rem;
}
.r2_box .num {
  height: 0.208rem;
  float: left;
  width: 100%;
  margin-top: 0.042rem;
}
.r2_box .num p {
  width: 0.192rem;
  height: 0.192rem;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.208rem;
  float: left;
}
.r2_box .num input {
  width: 0.417rem;
  height: 0.175rem;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
  float: left;
  text-align: center;
}
.r2_box b {
  float: right;
  font-size: 0.133rem;
  font-weight: 100;
  padding-top: 0.083rem;
  padding-right: 0.042rem;
}

.footer {
  background-color: #fff;
  background-size: 100%;
  position: fixed;
  width: 100%;
  bottom: 0rem;
  height: 0.442rem;
  border-top: 0.008rem solid #e6e6e6;
}
.f1 {
  float: left;
  padding: 0.067rem 0.067rem 0.083rem;
}
.f1 > span {
  float: left;
  font-size: 0.133rem;
  line-height: 0.283rem;
  margin-left: 0.083rem;
}
.f1 > input {
  float: left;
  margin-left: 0;
  margin-top: 0.083rem;
}
.f2 {
  float: right;
  width: 0.833rem;
  height: 0.442rem;
  background: #d00;
  color: #fff;
  line-height: 0.442rem;
  text-align: center;
  font-size: 0.15rem;
}
.f3 {
  float: right;
  font-size: 0.133rem;
  line-height: 0.442rem;
  margin-right: 0.167rem;
}
.f3 > span > i {
  color: #d00;
}

.noCart .section {
  width: 100%;
  min-height: 100%;
  overflow: auto;
  background: #f2f2f2;
}
.noCart .empty {
  width: 100%;
  padding: 1.75rem 0 180px 0;
  background: url("http://cart.m.dangdang.com/images/cart_null.gif") center 40px
    no-repeat;
  background-size: 1.5rem 1.167rem;
  border-bottom: solid 0.008rem #ebebeb;
}
.noCart .desc {
  color: #777;
  font-size: 0.117rem;
  text-align: center;
  line-height: 0.167rem;
}
.noCart .cart {
  display: flex;
  justify-content: center;
  margin-top: 0.042rem;
}
.noCart .cart > span {
  float: left;
  font-size: 0.15rem;
  color: #777;
  border: 0.008rem solid #777;
  margin-left: 0.167rem;
  padding: 0.067rem 0.267rem 0.067rem 0.267rem;
  border-radius: 0.083rem;
}
.noCart .cart > a:nth-of-type(1) {
  margin-left: 0;
}
</style>

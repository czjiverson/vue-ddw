<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" @click="handleKefu()" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="handleCart()" />
    <van-goods-action-button type="warning" text="加入购物车" @click="handleGoCarts()" />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
import storage from "../cart";
export default {
  name: "Goodsactive",
  props: {
    handleGoCart: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleCart() {
      this.$router.push("/cart");
    },
    handleKefu() {
      this.$router.push("/kefu");
    },
    handleGoCarts() {
      var cookie = document.cookie.split("; ");
      var has = 0;
      cookie.forEach(item => {
        var _item = item.split("=");
        // console.log(_item[0]=="token")
        if (_item[0] == "token") {
          
          // alert("已加入购物车");
          has = 1;
        }
      });
      if(has===1){
storage.push(this.handleGoCart.product_id, 1, this.handleGoCart);
      }
      if (has === 0) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style>
</style>
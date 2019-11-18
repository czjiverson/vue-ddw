<template>
  <div class="mydd_header">
    <div>
      <v-touch class="back" v-show="icon" @tap="handleBack()">&lt;</v-touch>
    </div>
    <span>{{title}}</span>
    <v-touch class="iconfont" tag="p" @tap="handleChange()">&#xe86d;</v-touch>

    <!-- 动画 -->
    <transition name="fane">
      <div class="daohang" v-show="n">
        <ul>
          <router-link tag="li" :to="item.path" v-for="(item,index) in arr" :key="index">
            <p class="iconfont" v-html="item.icon"></p>
            <p>{{item.name}}</p>
          </router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      arr: [
        {
          id: 0,
          name: "首页",
          icon: "&#xe6a5;",
          path: "/home"
        },
        {
          id: 0,
          name: "分类",
          icon: "&#xe6eb;",
          path: "/fenlei"
        },
        {
          id: 0,
          name: "值得买",
          icon: "&#xe603;",
          path: "/buy"
        },
        {
          id: 0,
          name: "购物车",
          icon: "&#xe621;",
          path: "/cart"
        },
        {
          id: 0,
          name: "我的",
          icon: "&#xe66e;",
          path: "/mine"
        }
      ],
      n: false
    };
  },
  props: {
    title: {
      type: String,
      default: "首页"
    },
    icon: {
      type: Boolean
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleChange() {
      this.n = !this.n;
    }
  }
};
</script>

<style>
.mydd_header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.367rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
  text-align: center;
  z-index: 2000;
}

.mydd_header > p {
  font-size: 0.233rem;
  line-height: 0.367rem;
}

.mydd_header > div:nth-child(1) {
  float: left;
  width: 0.117rem;
  height: 100%;
}

.back {
  font-size: 0.233rem;
  line-height: 0.367rem;
  padding-left: 0.083rem;
}

.mydd_header > span:nth-child(2) {
  font-size: 0.167rem;
  line-height: 0.367rem;
}

.mydd_header > p:nth-child(3) {
  float: right;
  padding-right: 0.083rem;
}

.daohang {
  background: #dbe3e9;
  width: 100%;
  height: 0.383rem;
  overflow: hidden;
  border-bottom: 1px solid #d8d8d8;
}
.daohang ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 0.375rem;
  overflow: hidden;
  float: left;
}
.daohang ul li {
  text-align: center;
  float: left;
}
.daohang > ul > li > p:nth-child(1) {
  font-size: 0.15rem;
  padding: 3px 0;
}

.daohang > ul > li > p:nth-child(2) {
  font-size: 0.067rem;
}
/* 动画 */
.fane-enter,
.fane-leave-to {
  height: 0;
}
.fane-enter-active,
.fane-leave-active {
  transition: all 0.3s;
}
</style>
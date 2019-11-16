<template>
  <div class="city">
    <div class="city_title">热门城市</div>

    <Bscroll ref="scroll">
      <div>
    <div class="city_hot">
      <ul>
        <li v-for="(item,index) in hotList" :key="index">{{item.nm}}</li>
      </ul>
    </div>
      <div class="city_lists" ref="cityE">
        <div class="city_lists_content" v-for="(item,index) in cityList" :key="index">
          <div class="city_lists_e">{{item.index}}</div>
          <v-touch
            class="city_lists_name"
            v-for="(items,index) in item.list"
            :key="index"
            tag="div"
            @tap="handleCityName(items.name)"
          >{{items.name}}</v-touch>
        </div>
      </div>
      </div>
    </Bscroll>

    <div class="city_right">
      <v-touch
        v-for="(item,index) in cityList"
        :key="index"
        tag="p"
        @tap="handleCityE(index)"
      >{{item.index}}</v-touch>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "City",
  data() {
    return {};
  },
  created() {
    if (
      !(localStorage.getItem("hotList") && localStorage.getItem("cityList"))
    ) {
      this.$store.dispatch("handleGetCityList");
    }
  },
  computed: {
    ...mapState({
      hotList: state => state.hotList,
      cityList: state => state.cityList
    })
  },
  methods: {
    handleCityE(index) {
      let offtop = this.$refs.cityE.querySelectorAll(".city_lists_e")[index]
        .offsetTop;
      this.$refs.scroll.handleScrollTo(-offtop)
    },
    handleCityName(name){
      this.$store.commit("handleCityName",name)
      this.$router.push(this.$route.query.path)
    }
  }
};
</script>

<style>
.city {
  width: 100%;
  height: 100%;
}
.city_title {
  height: 0.333rem;
  font-size: 0.167rem;
  padding: 0 0.083rem;
  line-height: 0.333rem;
  background: #ddd;
  position: relative;
  z-index: 5;
}
.city_hot {
  background: #eee;
  overflow: hidden;
}
.city_hot ul {
  overflow: hidden;
  margin: 0.083rem 0 0.042rem 0;
}
.city_hot ul li {
  font-size: 0.117rem;
  line-height: 0.2rem;
  background: #fff;
  width: 0.75rem;
  height: 0.2rem;
  border: 1px solid #ccc;
  float: left;
  margin: 0.042rem 0.083rem;
  text-align: center;
}
.city_lists_e {
  height: 0.25rem;
  font-size: 0.133rem;
  padding: 0 0.083rem;
  line-height: 0.25rem;
  background: #ddd;
}
.city_lists_name {
  height: 0.333rem;
  background: #eee;
  line-height: 0.333rem;
  padding-left: 0.167rem;
  border-bottom: 1px solid #ccc;
}
.city_right {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 0.125rem;
  padding-top: 0.75rem;
  background: #ddd;
}
.city_right p {
  width: 0.125rem;
  text-align: center;
  padding: 3px 0;
}
</style>
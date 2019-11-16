<template>
  <div class="homeScroll">
    <Bscroll ref="scroll">
      <div class="homeLeft">
        <ul>
          <router-link v-for="item in lists" :key="item.id"
            tag="li"
            :to="'/detailted/'+item.product_id"
          >
            <img :src="item.image_url" alt />
            <p>{{item.subtitle}}</p>
            <h4>
              <span>当当自营</span>
              <span>限时抢</span>
            </h4>
            <h5>￥{{item.price}}</h5>
          </router-link>
        </ul>
      </div>
    </Bscroll>
  </div>
</template>

<script>
import { homeApi } from "@api/home";
export default {
  name: "homeLeft",
  data() {
    return {
      num:1,
      lists: []
    };
  },
  methods: {
    async handleHomeLeftList(n) {
      let data = await homeApi();
      // console.log(data)
      if(!n){
        this.lists=[];
      }
      for (var i = this.num; i < this.num+20; i += 2) {
        this.lists.push(data.reco_list[i]);
      }
    }
  },
  created() {
    this.handleHomeLeftList()
  },
  watch:{
    lists(){
      this.$refs.scroll.handleRefresh()
    }
  },
  mounted() {
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlepullingDown(() => {
      var arr=[11,21,31,41,51,61,71]
      this.num=parseInt(Math.random()*7);
      this.handleHomeLeftList()
    });

    this.$refs.scroll.handlepullingUp(()=>{
      this.num+=10;
      this.handleHomeLeftList(true)
    })
  }
};
</script>

<style>
.homeScroll {
  height: 100%;
}
.homeLeft {
  width: 100%;
}
.homeLeft ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #eee;
}
.homeLeft ul li {
  width: 1.542rem;
  height: 2.292rem;
  margin-bottom: 0.083rem;
  background: #fff;
  padding-top: 0.042rem;
}
.homeLeft ul li img {
  width: 100%;
  height: 1.55rem;
}
.homeLeft ul li p {
  padding: 0.042rem 0.042rem 0;
  line-height: 0.133rem;
  height: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  word-break: break-all;
}

.homeLeft ul li h4 {
  font-weight: 100;
  padding-top: 0.067rem;
}
.homeLeft ul li h4 span:nth-child(1) {
  font-size: 0.1rem;
  padding: 1px 2px 0 2px;
  border: 1px solid #f2303c;
  color: #f2303c;
  margin-left: 0.042rem;
  margin-right: 0.042rem;
}

.homeLeft ul li h4 span:nth-child(2) {
  font-size: 0.1rem;
  padding: 1px 2px 0 2px;
  border: 1px solid #f2303c;
  color: #fff;
  margin-left: 0.042rem;
  margin-right: 0.042rem;
  background: #f2303c;
}
.homeLeft ul li h5 {
  font-weight: 100;
  font-size: 0.133rem;
  color: #f2303c;
  margin-left: 0.042rem;
  margin-top: 0.042rem;
}
</style>
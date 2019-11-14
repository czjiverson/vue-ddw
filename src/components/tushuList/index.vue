<template>
  <!-- list_lists -->
  <div class="list_lists">
    <Bscroll ref="scroll">
      <ul>
        <li v-for="(item,index) in lists" :key="index">
          <div class="list_img">
            <img :src="item.image" alt />
          </div>
          <div class="list_cantainer">
            <h1>{{item.title}}</h1>
            <p>作者：{{item.username1}} 著 ,{{item.username2}} 图</p>
            <p>出版社：{{item.city}}人民出版社</p>
            <span>当当自营</span>
            <span>限时抢</span>
            <h4>
              <span>￥{{item.price1}}</span>
              <span>￥{{item.price2}}</span>
            </h4>
            <h5>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i>{{item.pl}}条评论</i>
            </h5>
          </div>
        </li>
      </ul>
    </Bscroll>
  </div>
</template>

<script>
import {tushuListApi} from "@api/tushuList";
export default {
  name: "tushuLists",
  data() {
    return {
      lists: [],
      n:0
    };
  },
  methods: {
    async handleTushuLists(n,m) {
      if(!n){

        this.n=this.$route.params.id;
      }
      if(!m){

        this.lists=[]
      }
      let data=await tushuListApi(this.n);
      this.lists=data.data.list;
    },
    
  },
  created() {
    this.handleTushuLists();
    
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.handleTushuLists();
    this.$emit("handleLists",this.$route.params.title)
  },
  watch:{
    lists(){
      this.$refs.scroll.handleRefresh()
    }
  },
  mounted(){
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlepullingDown(() => {
      var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
      this.n=arr[parseInt(Math.random()*7)];
      this.handleTushuLists(true)
    });

    this.$refs.scroll.handlepullingUp(()=>{
      this.n=Number(this.n)+1;
      this.handleTushuLists(true,true)
    })
  }
};
</script>

<style>
/* list_lists */
.list_lists {
  overflow: hidden;
  height: 100%;
}

.list_lists ul {
  overflow: hidden;
}

.list_lists ul li {
  float: left;
  width: 100%;
  height: 1.492rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}

.list_img {
  float: left;
  width: 1.042rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list_img img {
  width: 0.758rem;
  height: 0.758rem;
}

.list_cantainer {
  float: right;
  width: 2.067rem;
  height: auto;
}

.list_cantainer h1 {
  width: 2.067rem;
  font-size: 0.133rem;
  line-height: 0.2rem;
  padding-top: 0.058rem;
  font-weight: 100;
  color: #3f3f3f;
}

.list_cantainer p {
  color: #a0a0a0;
  font-size: 0.083rem;
  width: 2.067rem;
  line-height: 0.167rem;
  letter-spacing: -1px;
}

.list_cantainer > span:nth-child(4) {
  border: 1px solid #f2303c;
  color: #f2303c;
  font-size: 0.083rem;
  border-radius: 2px;
  padding: 1px;
}

.list_cantainer > span:nth-child(5) {
  border: 1px solid #f2303c;
  color: #fff;
  font-size: 0.083rem;
  border-radius: 2px;
  padding: 1px;
  background: #f2303c;
}

.list_cantainer > h4 span:nth-child(1) {
  color: #f43;
  font-size: 0.117rem;
  line-height: 0.233rem;
}

.list_cantainer > h4 span:nth-child(2) {
  color: #a0a0a0;
  font-size: 0.083rem;
}

.list_cantainer > h5 span {
  display: inline-block;
  width: 0.133rem;
  height: 0.133rem;
  background: url("http://touch.m.dangdang.com/images/tushubang/red_star.png")
    no-repeat 0 2px;
  background-size: 0.133rem 0.133rem;
}

.list_cantainer > h5 i {
  font-style: normal;
  color: #a0a0a0;
  padding-left: 0.125rem;
}
</style>
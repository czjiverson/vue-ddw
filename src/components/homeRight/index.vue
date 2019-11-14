<template>
<<<<<<< HEAD
  <div class="homeScroll">
    <Bscroll ref="scroll">
      <div class="homeright">
        <ul>
          <li v-for="item in lists" :key="item.id">
            <img :src="item.image_url" alt />
            <p>{{item.subtitle}}</p>
            <h4>
              <span>当当自营</span>
              <span>限时抢</span>
            </h4>
            <h5>￥{{item.price}}</h5>
          </li>
        </ul>
      </div>
    </Bscroll>
=======
  <div class="homeRight">
    <ul>
      <li v-for="item in lists" :key="item.id">
        <img :src="item.image_url" alt />
        <p>{{item.subtitle}}</p>
        <h4>
          <span>当当自营</span>
          <span>限时抢</span>
        </h4>
        <h5>￥{{item.price}}</h5>
      </li>
    </ul>
>>>>>>> mao
  </div>
</template>

<script>
import { homeApi } from "@api/home";
export default {
  name: "homeRight",
<<<<<<< HEAD
  data() {
    return {
      num:0,
      lists: []
    };
  },
  methods: {
    async handleHomeLeftList(n) {
      let data = await homeApi();
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
      var arr=[10,20,30,40,50,60,70]
      this.num=parseInt(Math.random()*7);
      this.handleHomeLeftList()
    });

    this.$refs.scroll.handlepullingUp(()=>{
      this.num+=10;
      this.handleHomeLeftList(true)
    })
=======
  data(){
      return{
          lists:[]
      }
  },
  async created() {
    let data = await homeApi();
    for(var i=1;i<data.reco_list.length;i+=2){
        this.lists.push(data.reco_list[i])
    }
>>>>>>> mao
  }
};
</script>

<style>
<<<<<<< HEAD
.homeScroll {
  height: 100%;
}
.homeright {
  width: 100%;
}
.homeright ul {
=======
.homeRight {
  width: 100%;
}
.homeRight ul {
>>>>>>> mao
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #eee;
}
<<<<<<< HEAD
.homeright ul li {
=======
.homeRight ul li {
>>>>>>> mao
  width: 1.542rem;
  height: 2.292rem;
  margin-bottom: 0.083rem;
  background: #fff;
<<<<<<< HEAD
  padding-top: 0.042rem;
}
.homeright ul li img {
  width: 100%;
  height: 1.55rem;
}
.homeright ul li p {
=======
  padding-top:.042rem;
}
.homeRight ul li img {
  width: 100%;
  height: 1.55rem;
}
.homeRight ul li p {
>>>>>>> mao
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

<<<<<<< HEAD
.homeright ul li h4 {
  font-weight: 100;
  padding-top: 0.067rem;
}
.homeright ul li h4 span:nth-child(1) {
  font-size: 0.1rem;
  padding: 1px 2px 0 2px;
  border: 1px solid #f2303c;
  color: #f2303c;
  margin-left: 0.042rem;
  margin-right: 0.042rem;
}

.homeright ul li h4 span:nth-child(2) {
  font-size: 0.1rem;
  padding: 1px 2px 0 2px;
  border: 1px solid #f2303c;
  color: #fff;
  margin-left: 0.042rem;
  margin-right: 0.042rem;
  background: #f2303c;
}
.homeright ul li h5 {
  font-weight: 100;
  font-size: 0.133rem;
  color: #f2303c;
  margin-left: 0.042rem;
  margin-top: 0.042rem;
=======
.homeRight ul li h4{
    font-weight: 100;
    padding-top:.067rem;
}
.homeRight ul li h4 span:nth-child(1){
    font-size: .1rem;
    padding:1px 2px 0 2px;
    border:1px solid #f2303c;
    color:#f2303c;
    margin-left:.042rem;
    margin-right:.042rem;
}

.homeRight ul li h4 span:nth-child(2){
    font-size: .1rem;
    padding:1px 2px 0 2px;
    border:1px solid #f2303c;
    color:#fff;
    margin-left:.042rem;
    margin-right:.042rem;
    background: #f2303c;
}
.homeRight ul li h5{
    font-weight: 100;
    font-size: .133rem;
     color:#f2303c;
     margin-left:.042rem;
     margin-top:.042rem;
>>>>>>> mao
}
</style>
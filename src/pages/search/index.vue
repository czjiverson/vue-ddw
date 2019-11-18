<template>
  <div class="search">
    <Header  title="搜索" icon/>

    <div class="search_input">
      <input type="text" placeholder="请输入书名" v-model="search">
    </div>


    <div class="hotSearch">
      <p>热门搜索</p>
      <ul>
        <li v-for="(item,index) in hotList" :key="index">{{item.hot_word}}</li>
      </ul>
    </div>


    <div class="list_lists">
    <!-- <Bscroll ref="scroll"> -->
      <ul>
        <li v-for="(item,index) in lists" :key="index">
            <p>{{item.key}}</p>
            <p>约{{item.count}}个结果</p>
        </li>
      </ul>
    <!-- </Bscroll> -->
  </div>


  </div>
</template>

<script>
import {searchApi} from "@api/search";
import {hotsearchApi} from "@api/hotsearch";
import {throttle} from "@utils/jieliu"
export default {
  name:"Search",
  data(){
    return{
      lists:[],
      hotList:[],
      search:""
    }
  },
  methods:{
    async handleTushuList(keyword){
      let data=await searchApi(keyword);
      this.lists=data.word
    },
    async handleTushuListhot(){
      let data=await hotsearchApi();
      this.hotList=data
    //  console.log(this.hotList)
    }
  },
  created(){
    this.handleTushuList();
    this.handleTushuListhot()
  },
  watch:{
    search(){
      throttle(()=>{
        this.handleTushuList(this.search)
      })
    }
  }
}
</script>

<style>
.search {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding-top: 0.367rem;
  background: #fafafa;
}
.search_input{
  padding:0 .083rem;
  height:.333rem;
  margin-top:.083rem;
  margin-bottom:.083rem;
}
.search_input input{
  width:100%;
  height:100%;
  border:none;
  box-sizing: border-box;
  padding:0 .125rem;
  border-radius:.167rem;
  outline: none;
}

.hotSearch{
  padding:.083rem .083rem 0 .083rem;
}
.hotSearch p{
  line-height: .267rem;
  font-size: .15rem;
  padding-left:.208rem;
  background: url("http://touch.m.dangdang.com/images/fire_icon.png") no-repeat 0 .042rem;
  background-size: .15rem .15rem;
}

.hotSearch ul{
  width:100%;
  overflow: hidden;
}

.hotSearch ul li{
  font-size: .133rem;
  line-height: .233rem;
  padding:0 .108rem;
  background: #fff;
  float: left;
  margin-bottom:.083rem;
  margin-right:.083rem;
}



.list_lists {
  overflow: hidden;
}

.list_lists ul {
  overflow: hidden;
}

.list_lists ul li {
  border-bottom: 1px solid #ccc;
  background: #fff;
  display:flex;
  justify-content: space-between;
  margin:0 .125rem;
  line-height: .333rem;
  font-size: .133rem;
}

</style>
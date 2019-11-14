<template>
  <div class="tushuList page">
    <Header :title="tit" icon/>
    <!-- list_section -->
    <div class="list_section">
      <div class="list_nav">
        <ul>
          <router-link v-for="(item,index) in list" 
          :key="index" tag="li" 
          :to="'/tushuList/tushuLists/'+item.id+'/'+item.title"
          >{{item.title}}</router-link>
        </ul>
      </div>

      <!-- list_navs -->
      <div class="list_navs">
        <div></div>
        <p>总榜</p>
        <p>童书</p>
        <p>小说</p>
        <p>成功/励志</p>
      </div>

      <router-view @handleLists="handleL"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "TushuList",
  data(){
      return{
          list:[
              {
                  title:"新书热卖榜",
                  id:1
              },
              {
                  title:"图书畅销榜",
                  id:2
              },
              {
                  title:"童书新书榜",
                  id:3
              },
              {
                  title:"童书畅销榜",
                  id:4
              },
              {
                  title:"热搜榜",
                  id:5
              },
              {
                  title:"好评榜",
                  id:6
              },
              {
                  title:"飙升榜",
                  id:7
              }
          ],
          tit:"新书热卖榜"
      }
  },
    methods:{
        handleL(params){
            this.tit = params;
        }
    }
};
</script>

<style>
.tushuList {
  padding-top: 0.367rem;
}
.dd_list {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding-top: 0.367rem;
  padding-bottom: 0.383rem;
  background: #fafafa;
}

/* list_header */
.list_header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.367rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.083rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}

.list_header p {
  font-size: 0.233rem;
  line-height: 0.367rem;
}

.list_header p:nth-child(2) {
  font-size: 0.167rem;
  line-height: 0.367rem;
}

/* list_section */
.list_section {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.list_nav {
  width: 100%;
  height: 0.367rem;
  border-bottom: 1px solid #ccc;
  overflow-x: auto;
}

.list_nav ul {
  width: 4.358rem;
  height: 100%;
}
.list_nav ul .router-link-active{
  color:#c33;
}
.list_nav ul li {
  float: left;
  padding: 0 10px;
  line-height: 0.367rem;
  font-size: 0.1rem;
}

/* list_navs */
.list_navs {
  height: 0.392rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.06rem 3px 0.06rem 0.06rem;
  border-bottom: 1px solid #ccc;
}

.list_navs p {
  height: 0.15rem;
  margin: 0.06rem 3px;
  padding: 0 0.1rem;
  display: inline-block;
  line-height: 0.15rem;
  border-radius: 0.075rem;
  border: 1px solid rgb(150, 150, 150);
  color: rgb(150, 150, 150);
}

.list_navs p:nth-child(2) {
  background: rgb(150, 150, 150);
  color: #fff;
}

.list_navs div {
  width: 0.25rem;
  float: right;
  height: 100%;
  background: url("http://touch.m.dangdang.com/images/tushubang/arrow_unfolded.png")
    no-repeat center;
  background-size: 0.133rem;
}


</style>
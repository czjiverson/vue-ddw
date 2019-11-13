<template>
  <div class="dd_footer">
    <ul>
      <router-link 
      tag="li" 
      :to="item.path" 
      v-for="(item,index) in arr" 
      :key="index"
      
      >
        <p class="iconfont" v-html="item.icon"></p>
        <p>{{item.name}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
    name:"tabBar",
    data(){
        return{
            arr:[
                {
                    id:0,
                    name:"首页",
                    icon:"&#xe6a5;",
                    path:"/home"
                },
                {
                    id:0,
                    name:"分类",
                    icon:"&#xe6eb;",
                    path:"/fenlei"
                },
                {
                    id:0,
                    name:"值得买",
                    icon:"&#xe603;",
                    path:"/buy"
                },
                {
                    id:0,
                    name:"购物车",
                    icon:"&#xe621;",
                    path:"/cart"
                },
                {
                    id:0,
                    name:"我的",
                    icon:"&#xe66e;",
                    path:"/mine"
                }
            ]
        }
    }
};
</script>

<style>
.dd_footer {
  width: 100%;
  height: 0.383rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #e3e3e3;
}

.dd_footer ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height:100%;
}

.dd_footer ul li {
  text-align: center;
}

.dd_footer ul li p:nth-child(1) {
  font-size: 0.15rem;
  padding: 3px 0;
}

.dd_footer ul li p:nth-child(2) {
  font-size: 0.067rem;
}

.router-link-active{
  color:#c33;
}
</style>
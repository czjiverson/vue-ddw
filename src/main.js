import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import store from "./store"
import "@common/commons"
import { Swipe, SwipeItem } from 'vant';
import "@mock/tushuList"
import "@mock/buy"
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import "./lib"




Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"})
Vue.use(Swipe).use(SwipeItem);
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

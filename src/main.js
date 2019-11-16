import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import "@common/commons"
import { Swipe, SwipeItem } from 'vant';
import "@mock/tushuList"
import "@mock/buy"
import "./lib/loading/index.js"




Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"})
Vue.use(Swipe).use(SwipeItem);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

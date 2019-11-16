import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import store from "./store"
import "@common/commons"
import { Swipe, SwipeItem } from 'vant';
import "@mock/tushuList"
import "@mock/buy"




Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"})
Vue.use(Swipe).use(SwipeItem);



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

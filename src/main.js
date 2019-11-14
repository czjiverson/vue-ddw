import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
<<<<<<< HEAD
import "@common/commons"
import { Swipe, SwipeItem } from 'vant';
import "@mock/tushuList"
=======
import "./mock/buy"
import "@common/commons"

>>>>>>> mao



Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"})
<<<<<<< HEAD
Vue.use(Swipe).use(SwipeItem);
=======

>>>>>>> mao


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

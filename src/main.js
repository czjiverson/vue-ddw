import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import "./mock/buy"
import "@common/commons"




Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

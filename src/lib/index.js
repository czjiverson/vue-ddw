import Vue from "vue"
import Goodsactive from "./goodsactive/index.vue"


let commonsMap=[
    Goodsactive
]


commonsMap.forEach((item)=>{
    Vue.component(item.name,item)
})
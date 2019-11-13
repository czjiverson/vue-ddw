import Vue from "vue"
import Header from "./header"
import BScroll from "./bscroll"


let commonsMap=[
    Header,
    BScroll
]


commonsMap.forEach((item)=>{
    Vue.component(item.name,item)
})
import Vue from "vue"
import Header from "./header"


let commonsMap=[
    Header
]


commonsMap.forEach((item)=>{
    Vue.component(item.name,item)
})
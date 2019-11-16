import loadingView from "./index.vue"
import Vue from "vue"

class JSLoading{
    constructor(){
        let LoadingFn=Vue.extend(loadingView)
       this.loadingVm= new LoadingFn({
            el:document.createElement("div")
        })
    }
    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    destroyLoading() {
        document.body.removeChild(this.loadingVm.$mount().$el)
    }
}

export default new JSLoading();
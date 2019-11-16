import Vue from "vue";
import Vuex from "vuex";
import {cityApi} from "@api/city"
Vue.use(Vuex);

let state={
    hotList:JSON.parse(localStorage.getItem("hotList"))||[],
    cityList:JSON.parse(localStorage.getItem("cityList"))||[],
    city:localStorage.getItem("city")||"北京"
}

let actions={
    async handleGetCityList({commit}){
        let data = await cityApi();
        commit("handkeGetCityList",data.data.cities)
    }
}

let mutations={
    handkeGetCityList(state,cities){
        let hotCity=[],cityList=[];
        // console.log(cities)
        for(var i=0;i<cities.length;i++){
            if(cities[i].isHot){
                hotCity.push(cities[i])
            }
        }  

        state.hotList=hotCity;
        localStorage.setItem("hotList",JSON.stringify(hotCity))
        


        for(var i=0;i<cities.length;i++){
            let py=cities[i].py.slice(0,1).toUpperCase();
            if(isCityList(py)){
                cityList.push({
                    index:py,
                    list:[{id:cities[i].id,name:cities[i].nm}]
                })
            }else{
                for(var m=0;m<cityList.length;m++){
                    if(cityList[m].index===py){
                        cityList[m].list.push({id:cities[i].id,name:cities[i].nm})
                    }
                }
            }
        }

        function isCityList(py){
            var flag=true;
            for(var n=0;n<cityList.length;n++){
                if(cityList[n].index===py){
                    flag=false;
                }
            }
            return flag;
        }
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1
            }else{
                return -1
            }
        })
        
        // console.log(cityList)
        state.cityList=cityList
        localStorage.setItem("cityList",JSON.stringify(cityList))

    },
    handleCityName(state,name){
        state.city=name;
        localStorage.setItem("city",name)
    }
}

let getters={

}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
export default store;
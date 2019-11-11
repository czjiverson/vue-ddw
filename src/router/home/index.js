export default {
    path:"/home",
    component:_=>import("@pages/home"),
    name:"home",
    meta:{
        flag:true,
        requiredAuth:false
    }
}
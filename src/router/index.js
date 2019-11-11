import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
Vue.use(VueRouter);


const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        {
            path:"/fenlei",
            component:_=>import("@pages/fenlei"),
            name:"fenlei",
            meta:{
                flag:true,
                requiredAuth:false
            }
        },
        {
            path:"/buy",
            component:_=>import("@pages/buy"),
            name:"buy",
            meta:{
                flag:true,
                requiredAuth:false
            }
        },
        {
            path:"/cart",
            component:_=>import("@pages/cart"),
            name:"cart",
            meta:{
                flag:false,
                requiredAuth:false
            }
        },
        {
            path:"/mine",
            component:_=>import("@pages/mine"),
            name:"mine",
            meta:{
                flag:true,
                requiredAuth:true
            }
        },
        {
            path:"/login",
            component:_=>import("@pages/login"),
            name:"login",
            meta:{
                flag:false,
                requiredAuth:false
            }
        }
    ]
})


router.beforeEach((to,from,next)=>{
    if(to.path!=="login" && to.meta.requiredAuth){
        if(localStorage.getItem("token")){
            next()
        }else{
            next({name:"login",params:{to:to.path}})
        }
    }else{
        next()
    }
})

export default router;
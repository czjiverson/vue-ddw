import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import fenlei from "./fenlei"
Vue.use(VueRouter);


const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        fenlei,
        {
            path:"/buy",
            component:_=>import("@pages/buy"),
            name:"buy",
            meta:{
<<<<<<< HEAD
=======
                
>>>>>>> mao
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
                requiredAuth:false
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
        },
        {
            path:"/city",
            component:_=>import("@pages/city"),
            name:"city",
            meta:{
                flag:false,
                requiredAuth:false
            }
        },
        {
            path:"/search",
            component:_=>import("@pages/search"),
            name:"search",
            meta:{
                flag:false,
                requiredAuth:false
            }
<<<<<<< HEAD
        },
        {
            path:"/tushuList",
            component:_=>import("@pages/tushuList"),
            name:"tushuList",
            meta:{
                flag:true,
                requiredAuth:false
            },
            children:[
                {
                    path:"/tushuList",
                    redirect:"/tushuList/tushuLists/1/新书热卖榜"
                },
                {
                    path:"/tushuList/tushuLists/:id/:title",
                    component:_=>import("@components/tushuList"),
                    name:"tushuLists",
                    meta:{
                        flag:true,
                        requiredAuth:false
                    }
                }
            ]
=======
>>>>>>> mao
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
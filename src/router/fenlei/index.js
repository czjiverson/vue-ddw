export default {
    path:"/fenlei",
    component:_=>import("@pages/fenlei"),
    name:"fenlei",
    meta:{
        flag:true,
        requiredAuth:false
    },
    children:[
        { 
            path:"/fenlei",
            redirect:"fenleiTuShu/0" 
        },
        {
            path:"fenleiTuShu/:i",
            component:_=>import("@components/fenleiTuShu"),
            name:"fenleiTuShu",
            meta:{
                flag:true,
                requiredAuth:false
            }
        },
        // {
        //     path:"fenleiTongShu",
        //     component:_=>import("@components/fenleiTongShu"),
        //     name:"fenleiTongShu",
        //     meta:{
        //         flag:true,
        //         requiredAuth:false
        //     }
        // },
        // {
        //     path:"fenleiDianZiShu",
        //     component:_=>import("@components/fenleiDianZiShu"),
        //     name:"fenleiDianZiShu",
        //     meta:{
        //         flag:true,
        //         requiredAuth:false
        //     }
        // },
    ]
}
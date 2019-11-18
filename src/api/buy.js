import http from "@utils/request"

export const buyApi =()=>http({
    method:"get",
    url:"/user/list",
})


export const buysApi =()=>http({
    method:"get",
    url:"/buys/api/touch/optimization/feed",
    data:{
        page:0,
        udid:"104c1e8f0554007517b6247827d8020f",
        permanent_id:2019110714274332850299341500630167,
        client_version:"1.0",
        app_id:"touch",
        h5_server:1,
        user_client:"touch",
        ct:"touch",
        cv:"1.0",
        ts:1573906139593,
        tc:"b9d121fa7f7b6446f8b54a43689db7cd"
    }
})


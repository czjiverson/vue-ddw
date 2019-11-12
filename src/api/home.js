import http from "@utils/request"


export const homeApi =()=>http({
    method:"get",
    url:"/index.php",
    data:{
        floor_pageid:"147903_4",
        seq:4,
        action:"index_floor",
        preview_time:0
    }
})


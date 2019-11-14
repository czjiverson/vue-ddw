import http from "@utils/request"

export const buyApi =()=>http({
    method:"get",
    url:"/user/list",
})




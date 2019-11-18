import http from "@utils/request";

export const cityApi=()=>http({
    method:"get",
    url:"/city/api/cityList"
})
import http from "@utils/request"


export const tushuListApi =(num=0)=>http({
    method:"post",
    url:"/tushu/list",
    data:{
        num
    }
})
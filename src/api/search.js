import http from "@utils/request"


export const searchApi =(keywords)=>http({
    method:"get",
    url:"/search_ajax.php",
    data:{
        keyword:keywords,
        act:"suggest"
    }
})






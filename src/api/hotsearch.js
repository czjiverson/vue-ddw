import http from "@utils/request"

export const hotsearchApi =()=>http({
    method:"get",
    url:"/search_ajax.php",
    data:{
        act:"hotword"
    }
})
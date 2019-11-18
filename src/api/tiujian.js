import http from "@utils/request"


export const tuijianApi =()=>http({
    method:"get",
    url:"/apil/h5ajax.php",
    data:{
        action:"book-product-detail",
        is_ab:1,
        pid:26579651,
        img_size:"h",
        categoryId:11561,
        request_id:""
    }
})




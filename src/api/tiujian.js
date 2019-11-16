import http from "@utils/request"


export const tuijianApi =()=>http({
    method:"get",
    url:"/api/h5ajax.php",
    data:{
        action:"book-product-detail",
        is_ab:1,
        pid:26579651,
        img_size:"h",
        categoryId:11561,
        request_id:""
    }
})

//action=book-product-detail&is_ab=1&pid=26579651&img_size=h&categoryId=11561&request_id=

// http://product.m.dangdang.com/h5ajax.php?action=book-product-detail&is_ab=1&pid=26579651&img_size=h&categoryId=11561&request_id=
import http from "@utils/request"


export const fenleiOneApi =(title,pageid)=>http({
    method:"get",
    url:"/ddcategory.php",
    data:{
        action:"get_content",
        title:title,
        pageid:pageid
    }
})
// // http://search.m.dangdang.com/ddcategory.php?action=get_content&title=%E7%AB%A5%E4%B9%A6&pageid=712675
// export const fenleiTwoApi =()=>http({
//     method:"get",
//     url:"/ddcategory.php",
//     data:{
//         action:"get_content",
//         title:"%E7%AB%A5%E4%B9%A6",
//         pageid:712675
//     }
// })

// // http://search.m.dangdang.com/ddcategory.php?action=get_content&title=%E7%94%B5%E5%AD%90%E4%B9%A6&pageid=712239
// export const fenleiThreeApi =()=>http({
//     method:"get",
//     url:"/ddcategory.php",
//     data:{
//         action:"get_content",
//         title:"%E7%94%B5%E5%AD%90%E4%B9%A6",
//         pageid:712239
//     }
// })

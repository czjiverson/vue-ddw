import http from "@utils/request"


export const fenleiApi =()=>http({
    method:"get",
    url:"/h5ajax.php",
    data:{
        action:"home",
        img_size:"h",
        perm_id:20191107142736496267707743358292076
    }
})

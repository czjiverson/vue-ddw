import http from "@utils/request"


export const registerApi =(username,password)=>http({
    method:"post",
    url:"/users/register",
    data:{
        username,
        password
    }
})


export const loginApi =(username,password)=>http({
    method:"post",
    url:"/users/login",
    data:{
        username,
        password
    }
})
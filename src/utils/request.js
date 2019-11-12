import axios from "axios";

const server =axios.create({
    timeout:5000,
    // baseUrl:"",
    withCredentials:true
})


server.interceptors.request.use((config)=>{
    if(config.method==="get"){
        config.params={...config.data}
    }

    return config;
    
    // config.headers["content-type"]="application/json"
},(err)=>{
    return Promise.reject(err)
})



server.interceptors.response.use((res)=>{
    if(res.status===200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err)
})

export default server;
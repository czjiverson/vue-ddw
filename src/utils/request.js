import axios from "axios";
import loading from "../lib/loading/index.js"
const server =axios.create({
    timeout:5000,
    // baseUrl:"",
    withCredentials:true
})


server.interceptors.request.use((config)=>{
    if(config.method==="get"){
        config.params={...config.data}
    }
    loading.loadingMount() 
    return config; 
    
    // config.headers["content-type"]="application/json"
},(err)=>{
    return Promise.reject(err)
})



server.interceptors.response.use((res)=>{
    if(res.status===200){
        loading.destroyLoading();
        return res.data;
    }
},(err)=>{
    return Promise.reject(err)
})

export default server;
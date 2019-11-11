const path=require("path")

module.exports={
    devServer:{
        "/api":{
            target:"http://192.168.137.1",
            changeOrigin:true
        }
    },
    configureWebpack:{
        alias:{
            "@":path.join(___dirname,"./src"),
            "@api":path.join(___dirname,"./src/api"),
            "@assets":path.join(___dirname,"./src/assets"),
            "@common":path.join(___dirname,"./src/common"),
            "@components":path.join(___dirname,"./src/components"),
            "@pages":path.join(___dirname,"./src/pages"),
            "@router":path.join(___dirname,"./src/router"),
            "@store":path.join(___dirname,"./src/store"),
            "@utils":path.join(___dirname,"./src/utils"),
        }
    }
}
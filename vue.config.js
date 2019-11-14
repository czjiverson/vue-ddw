const path=require("path")

module.exports={
    devServer:{
        port:8080,
        open:true,
        proxy:{
            "/h5ajax.php":{
                target:"http://touch.m.dangdang.com",
                changeOrigin:true
            },
            "/ddcategory.php":{
                target:"http://search.m.dangdang.com",
                changeOrigin:true
            },
            // "/api":{
            //     target:"http://z.dangdang.com ",
            //     changeOrigin:true
            // },
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@mock":path.join(__dirname,"./src/mock")
            }
        }
    }
}

// http://search.m.dangdang.com /ddcategory.php?action=get_content&title=%E5%9B%BE%E4%B9%A6&pageid=712231

// http://z.dangdang.com   
// /api/touch/optimization/feed?
// page=0&udid=db2e6f63110340d7e4a7937569927ac4&permanent_id=20191107143139408494260580650720628&client_version=1.0&app_id=touch&h5_server=1&user_client=touch&ct=touch&cv=1.0&ts=1573698338166&tc=70c0dceebdace57450b735e51640417a
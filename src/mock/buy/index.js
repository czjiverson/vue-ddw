const  Mock =require("mockjs")
// const url=require("url")
const data=Mock.mock({
        "infos1|6":[
            {   
                "id|+1":0,
                "title":"@ctitle()",
                "txt":"@csentence()",
               "imgUrl":"http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg"
            },
        ],
        "infos2|9":[
            {
                "id|+1":0,
                "txt":"@csentence()",
                "Newnumber|1-100":100,
                "Oldnumber|10-1000":1000,
                "imgUrl":"https://img3x4.ddimg.cn/33/25/1554314784-1_h.jpg"
            },
        ]
})

// export default data;


Mock.mock(/\/user\/list/,"get",()=>{
        // let {look}=url.parse(options.url,true).query;

        // var obj = {
        //     code:200,
        //     errMsg:"",
        //     data:{
        //         list:[]
        //     }
        // }

        // for(var i=look*;i<data.info1.length;i++){

        // }
        return data
})
const Mock = require("mockjs")

const data = Mock.mock({
    "data|500":[
        {
            "id|+1":1,
            "username1":"@cname",
            "username2":"@cname",
            "title":"@cparagraph(1)",
            "image":"@image()",
            "price1":/^\d{2}\.00$/,
            "price2":/^\d{3}\.00$/,
            "pl":/^\d{6}$/,
            "city":"@county(true)"
        }
    ]
})

Mock.mock(/\/tushu\/list/,"post",(options)=>{
    let {num}=JSON.parse(options.body);

    var obj = {
        code: 200,
        errMsg: "",
        data: {
            list: []
        }
    }


    for (var i = num*20; i < num*20+20; i++) {
        obj.data.list.push(data.data[i]);
    }

    return obj;

})
const Mock = require("mockjs")

const data = Mock.mock({
    "data|200":[
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

export default data;
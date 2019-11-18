function Cart(){// 购物车
    this.storage=null;
    this.take=function(){// 取出数据
        this.storage=window.localStorage.getItem("CART");
        if(!this.storage){
            this.storage=[];
        }else{
            this.storage=JSON.parse(this.storage);
        }
    }
    this.save=function(){// 存储数据
        window.localStorage.setItem("CART",JSON.stringify(this.storage));
    }
    this.push=function(_id,_counter,_comment){// 增加商品数量
        // console.log(_id,_counter,_comment)
        this.take();
        let _has=0;
        if(/^\d+$/g.test(_counter+"")){
            for(let i=0;i<this.storage.length;i++){
                if(this.storage[i].id===_id){
                    this.storage[i].counter+=_counter;
                    _has=1;
                    break;
                }
            }
            if(_has===0){
                this.storage.push({
                    id:_id,
                    counter:_counter,
                    comment:_comment
                })
            }
            this.save();
        }
    }
    this.subtract=function(_id,_counter,_comment){// 减少商品数量
        this.take();
        // if(/^\d+$/g.test(_counter+"")){
            for(let i=0;i<this.storage.length;i++){
                if(this.storage[i].id===_id){
                    this.storage[i].counter-=_counter;
                    this.save();
                    break;
                }
            }
        // }
    }
    this.remove=function(_id){// 删除商品
        this.take();
        for(let i=0;i<this.storage.length;i++){
            if(this.storage[i].id===_id){
                this.storage.splice(i,1);
                this.save();
                break;
            }
        }
    }
    this.clear=function(){// 清除购物车
        this.take();
        this.storage=[];
        this.save();
    }
    this.statistics=function(){// 全部商品数量
        let _summary=0;
        this.take();
        for(let i=0;i<this.storage.length;i++){
            _summary+=this.storage[i].counter;
        }
        return _summary;
    }
    this.reset=function(_id,_counter,_comment){// 输入框商品数量
        this.take();
        for(let i=0;i<this.storage.length;i++){
            if(this.storage[i].id===_id && _comment===this.storage[i].comment){
                if(_counter>0 && /^\d+$/g.test(_counter)){
                    this.storage[i].counter=_counter;
                    this.save();
                    break;
                }else{
                    break;
                }
            }
        }
    }
    this.all=function(_id,_counter,_comment){// 总价
        let _summey=0;
        this.take();
        for(let n=0;n<this.storage.length;n++){
            _summey+=this.storage[n].comment.split("|")[2]*this.storage[n].counter;
        }
        return _summey;
    }
}


export default new Cart()
// 观察者模式



// 发布者
var obj: any = {};
// 缓存列表，存放订阅者回调函数
obj.list = [];

// 增加订阅者
obj.listen = function (key, fn){
    if(!this.list[key]){
        // 如果还没有订阅就创建缓存列表
        this.list[key] = [];
    }
    // 订阅消息添加到缓存列表里
    this.list[key].push(fn); 
}

// 发布消息
obj.trigger = function () {
    // 取出消息类型名称
    var key = Array.prototype.shift.call(arguments);
    var fns = this.list[key];
    if(!fns || fns.length == 0 ){
        return;
    }
    for (let i = 0; i<fns.length; i ++) {
        let fn = fns[i];
        fn.apply(this, arguments);
    }
}

// 小红订阅如下消息
obj.listen('red',function(size){
    console.log("尺码是："+size);  
});

// 小花订阅如下消息
obj.listen('block',function(size){
    console.log("再次打印尺码是："+size); 
});
obj.trigger("red",40);
obj.trigger("block",42);

console.log(obj);




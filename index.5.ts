// 单例  

// var CreateDiv = function( html ){
//     this.html = html;
//     this.init(); 
// };
// CreateDiv.prototype.init = function(){
//     var div = document.createElement( 'div' ); 
//     div.innerHTML = this.html; 
//     document.body.appendChild( div );
// };
// var ProxySingletonCreateDiv = (function(){
//     var instance;
//     return function( html ){
//         if ( !instance ){
//             instance = new CreateDiv( html );
//         }
//         return instance; 
//     }
// })();
// var a = new ProxySingletonCreateDiv( 'sven1' ); 
// var b = new ProxySingletonCreateDiv( 'sven2' );
// alert( a === b );  //true


/*apply()方法*/
// function.apply(thisObj[, argArray])

/*call()方法*/
// function.call(thisObj[, arg1[, arg2[, [,...argN]]]]);

// apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。
// call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
var a1 = add.apply(sub, [4, 2]);　　//sub调用add的方法
var a2 = sub.apply(add, [4, 2]);
alert(a1);  //6     
alert(a2);  //2
/*call的用法*/
var a1 = add.call(sub, 4, 2);


function Animal(name: any): void {
    this.name = name;
    this.showName = function () {
        alert(this.name);
    }
}

function Cat(name: any): void {
    Animal.apply(this, [name]);
}
var cat = new Cat("咕咕");
cat.showName();

/*call的用法*/
Animal.call(this, name);

var getSingle = function (fn) {
    var result;
    return function (arg) {
        console.log(arguments)
        // 将arg参数传到fn里
        return result || (result = fn.apply(this, arguments));
        return result || (result = fn());
    }
};
var createLoginLayer = function (arg) {
    console.log(arg)
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);

    return div;
};
var createSingleLoginLayer = getSingle(createLoginLayer);
document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createSingleLoginLayer(123);
    loginLayer.style.display = 'block';
};
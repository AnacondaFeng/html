// 函数声明
function add(n1, n2) {
    // alert(n1 + n2);
    var n3;
    n3 = n1 + n2;
    return n3;
}

var num = add(13, 14);
console.log(num);

// 函数表达式
var num1 = function (n1, n2) {
    var n3 = n1 + n2;
    return n3;
}

alert(num1(13, 14));

// 这两种方法都可以，没什么区别
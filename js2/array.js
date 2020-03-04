var arrayObj1 = new Array();

// 指定数组长度
var arrayObj2 = new Array(5);

// 下面两个一样的
var arrayObj3 = new Array(2, 4, "a", "y", 8);
var arrayObj = [2, 4, "a", "y", 8];

console.log(arrayObj[0]);

for(var i in arrayObj){
    console.log(arrayObj[i]);
}
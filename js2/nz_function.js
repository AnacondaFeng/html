// 字符串截取
var str = "520123199906061234";
console.log(str.substr(6, 4)); //起始位置，截取长度
console.log(str.substring(6, 10)); //起始位置，终止位置

console.log(str.charAt(16));

var n = parseInt(str.charAt(16));
if (n % 2 == 0) {
    console.log("女");
} else {
    console.log("男");
}

console.log(str.length);
console.log(str.indexOf(1, 4)); //查找字符对应的位置

var str = "aa,ttt,121,gg,kk,aa,bb";
var arr = str.split(",");
console.log(arr[0]);

// 链接
console.log(str.concat(",55", ",77", ",00"));
console.log(arr.concat("55", "77", "00"));

console.log(str.replace("aa", "imooc")); //替换一次

// 日期
var d1 = new Date();
var d2 = new Date("2020-2-17 10:58:58");
console.log(d2.getDate()); //几号
console.log(d2.getMonth() + 1); //月份从0开始数的
console.log(d2.getFullYear());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());

var d3 = new Date("2020-1-1");
var n = d3.getTime() - d1.getTime(); //单位毫秒
console.log(parseInt(n / (24 * 3600 * 1000)));

// 日期格式化
function fun_FmtDate() {
    var d1 = new Date();
    var yyyy, mm, dd, hh, mi, ss;
    var time;
    yyyy = d1.getFullYear();
    mm = d1.getMonth() + 1;
    dd = d1.getDate();
    hh = d1.getHours();
    mi = d1.getMinutes();
    ss = d1.getSeconds();
    time = yyyy + "-" + mm + "-" + dd + " " + hh + ":" + mi + ":" + ss;
    return time;
}
console.log(fun_FmtDate());

// 数字函数
var n = 16.1232412412;
console.log(Math.round(n)); //四舍五入取整
console.log(n.toFixed(2)); //保留两位小数

console.log(Math.min(2, 6, 81, 1));
console.log(Math.max(2, 6, 81, 1));
console.log(Math.abs(-3));
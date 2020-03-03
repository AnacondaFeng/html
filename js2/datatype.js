// special type: object NaN
// 强制转换
// parseInt() parseFloat() Number() Boolean()
var str = "123"
console.log(str + 1)

// 隐式转换 
console.log(str * 1 + 1)
console.log(parseInt(str) + 1)

// 错误提示 NaN
var str1 = "123"
// 可以转数值 返回false
if (!isNaN(str1)) {
    console.log(parseInt(str1));
} else {
    console.log("is error");
    str1 = 0;
}
console.log(str1);

// 忽略最后字母
var str2 = "123.123";
console.log(parseInt(str2));
console.log(parseFloat(str2));
console.log(Number(str2)); //优先使用

var str3 = null;
console.log(parseInt(str3));
console.log(parseFloat(str3));
console.log(Number(str3));

// 逻辑类型
var str4 = "";
var str5 = null;
var str6 = "123";
var str7 = 0;
console.log(Boolean(str4))
console.log(Boolean(str5))
console.log(Boolean(str6))
console.log(Boolean(str7))
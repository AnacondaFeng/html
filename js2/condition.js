var n = 10;
var str;
if (n > 10) {
    str = "n>10";
} else if (n < 10) {
    str = "n<10";
} else {
    str = "n=10";
}
console.log(str);

var myscore = 95;
var str;
var n = parseInt(myscore / 10);
// 不写break不可以
switch (n) {
    case 10:
        str = "满分";
        break;
    case 9:
        str = "优秀";
        break;
    case 8:
    case 7:
        str = "良好";
        break;
    case 6:
        str = "及格";
        break;
    default:
        str = "不及格";
        break;
}
console.log(str);

// 循环
var i = 0;
var sum = 0;
for (; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    }
    if (sum >= 1000) {
        break;
    }
    sum = sum + i;
}
console.log(sum)

var i = 0;
var sum = 0;
while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log(sum);

var i = 0;
var sum = 0;
do {
    sum = sum + i;
    i++;
} while (i <= 100)
console.log(sum);
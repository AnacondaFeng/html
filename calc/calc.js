// function ff1(){
//     alert("imooc");
// }

// function ff2(){
//     // 匿名函数
//     document.getElementById("btn2").onclick = function(){
//         alert("123456")
//     }
// }

// 初始化-集中完成
function init() {
    var num = document.getElementById("num");
    num.value = 0;
    num.disabled = "disabled";

    var btn_num1;
    var fh;

    // var n1 = document.getElementById("n1");
    // n1.onclick=function(){
    //     alert("123")
    // }
    var oButton = document.getElementsByTagName("input");
    for (var i = 0; i < oButton.length; i++) {
        oButton[i].onclick = function () {
            if (isNumber(this.value)) {
                // alert("Number");
                // num.value = (num.value + this.value) * 1; //格式转换 去掉前面0
                if (isNull(num.value)) {
                    num.value = this.value;
                } else {
                    num.value = num.value + this.value;
                }
            } else {
                var btn_num = this.value;
                switch (btn_num) {
                    case "+":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "+";
                        break;
                    case "-":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "-";
                        break;
                    case "*":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "*";
                        break;
                    case "/":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "/";
                        break;
                    case ".":
                        num.value = dec_number(num.value);
                        break;
                    case "C":
                        num.value = 0;
                        break;
                    case "←":
                        num.value = back(num.value);
                        break;
                    case "±":
                        num.value = sign(num.value);
                        break;
                    case "=":
                        switch (fh) {
                            case "+":
                                num.value = btn_num1 + Number(num.value);
                                break;
                            case "-":
                                num.value = btn_num1 - Number(num.value);
                                break;
                            case "*":
                                num.value = btn_num1 * Number(num.value);
                                break;
                            case "/":
                                if (Number(num.value) == 0) {
                                    alert("除数不能为0");
                                    num.value = 0;
                                } else {
                                    num.value = btn_num1 / Number(num.value);
                                }
                                break;
                        }
                        break;
                    case "m":
                        break;
                }
            }
        }
    }
}

// 正负号
function sign(n) {
    if (n.indexOf("-") == -1) {
        n = "-" + n;
    } else {
        n = n.substr(1, n.length);
    }
    return n;
}

// 退位键
function back(n) {
    n = n.substr(0, n.length - 1);
    if (isNull(n)) {
        n = 0;
    }
    return n;
}

// 小数点
function dec_number(n) {
    if (n.indexOf(".") == -1) {
        n = n + ".";
    }
    return n;
}

// 验证文本框是否为空或者0
function isNull(n) {
    if (n * 1 == 0 || n.length == 0) {
        return true;
    } else {
        return false;
    }
}

function isNumber(n) {
    // if(!isNaN(n)){
    //     return true;
    // }else{
    //     return false;
    // }
    return !isNaN(n);
}
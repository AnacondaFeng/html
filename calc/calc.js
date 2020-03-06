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

    // var n1 = document.getElementById("n1");
    // n1.onclick=function(){
    //     alert("123")
    // }
    var oButton = document.getElementsByTagName("input");
    for (var i = 0; i < oButton.length; i++) {
        oButton[i].onclick = function () {
            if(isNumber(this.value)){
                alert("Number");
            }
        }
    }
}

function isNumber(n){
    // if(!isNaN(n)){
    //     return true;
    // }else{
    //     return false;
    // }
    return !isNaN(n);
}
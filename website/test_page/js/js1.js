// 全局变量
var flag = true;

function show_menu(){
    var menu1 = document.getElementById("menu1");
    if(flag){
        menu1.style.display = "block";
        flag = false;
    }else{
        menu1.style.display = "none";
        flag = true;
    }
}

function show_menu1(){
    // alert("123")
    var menu1 = document.getElementById("menu1");
    menu1.style.display = "none";
    flag = true;
}
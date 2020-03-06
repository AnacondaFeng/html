function fun_show1() {
    // alert("123456");
    document.getElementById("userName").value = "999";
}

function fun_show2() {
    var xb = document.getElementsByName("xb");
    // for (var i in xb) {
    //     alert(xb[i].value)
    // }
    var xbText;
    if (xb[0].checked) {
        xbText = xb[0].value;
    } else {
        xbText = xb[1].value;
    }
    alert(xbText);
}

function fun_ymd() {
    // 获取id=yyyy的控件
    var yyyy = document.getElementById("yyyy");
    var mm = document.getElementById("mm");
    var dd = document.getElementById("dd");

    var date = new Date();
    var year = parseInt(date.getFullYear());

    // options表示添加option， i i代表名字和value
    fun_initSelect(yyyy, 1999, year);
    fun_initSelect(mm, 1, 12);
    fun_initSelect(dd, 1, 31);

    // 获取列表框长度
    var n = yyyy.length;
    // 默认选择中间年份
    yyyy.selectedIndex = Math.round(n / 2);

    // 删除效果
    // dd.options.length=0
}


// 给列表框赋值，传递三个参数：表单元素，开始值，结束值
function fun_initSelect(obj, start, end) {
    for (var i = start; i <= end; i++) {
        obj.options.add(new Option(i, i))
    }
}

function fun_selectYmd() {
    var yyyy = document.getElementById("yyyy");
    var mm = document.getElementById("mm");
    var dd = document.getElementById("dd");

    var m = parseInt(mm.value);
    var dayEnd;
    if (m == 4 || m == 6 || m == 9 || m == 11) {
        dayEnd = 30;
    } else if (m == 2) {
        dayEnd = 28;
        var y = parseInt(yyyy.value);
        if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
            dayEnd = 29;
        }
    } else {
        dayEnd = 31;
    }
    dd.options.length = 0;
    fun_initSelect(dd, 1, dayEnd);
}

function fun_deleteSelect() {
    // 删除列表框某个条目
    var dd = document.getElementById("dd");
    // dd.options.remove(1);
    for (i = dd.length; i >= 0; i--) {
        dd.options.remove(0);
    }

}

function fun_initLogo() {
    var logo = document.getElementById("logo");
    for (i = 1; i <= 2; i++) {
        logo.options.add(new Option(i, i));
    }
}

function selectLogo(){
    var logo = document.getElementById("logo");
    var n = logo.value;
    var logoImg = document.getElementById("logoImg");
    logoImg.src = "../image/up.gif"
}

// 全局变量
var flag = true;
function fun_checkInterest(){
    var interest = document.getElementsByName("interest");
    for(i=0;i<interest.length;i++){
        interest[i].checked = flag;
    }

    if(flag){
        document.getElementById("btn1").value = "全不选";
    }else{
        document.getElementById("btn1").value = "全选";
    }

    // 开关变量
    flag = !flag;
}

function fun_checkInterest1(){
    var interest = document.getElementsByName("interest");
    for(i=0;i<interest.length;i++){
        interest[i].checked = !interest[i].checked;
    }
}
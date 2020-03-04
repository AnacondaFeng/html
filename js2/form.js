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
    if(xb[0].checked){
        xbText = xb[0].value;
    }else{
        xbText = xb[1].value;
    }
    alert(xbText);
}
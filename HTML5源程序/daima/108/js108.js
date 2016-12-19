// JavaScript Document
//定义保存点击次数的全局变量
var intNum = 0;
//自定义画布点击函数
function cnvclick(cnv) {
    intNum += 1;
    intNum = (intNum == 5) ? 1 : intNum;
    var strPrnType = "";
    switch (intNum) {
    case 1:
        strPrnType = "no-repeat";
        break;
    case 2:
        strPrnType = "repeat-x";
        break;
    case 3:
        strPrnType = "repeat-y";
        break;
    case 4:
        strPrnType = "repeat";
        break;
    }
    var cxt = cnv.getContext("2d");
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    var objImg = new Image();
    objImg.src = "1.jpg";
    var prn = cxt.createPattern(objImg, strPrnType);
    objImg.onload = function() {
        cxt.fillStyle = prn;
        cxt.fillRect(0, 0, cnv.width, cnv.height);
    }
}
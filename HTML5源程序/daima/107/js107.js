// JavaScript Document
//定义保存点击次数的全局变量
var intNum = 0;
//自定义画布点击函数
function cnvclick(cnv) {
    intNum += 1;
    intNum = (intNum == 4) ? 1 : intNum;
    var cxt = cnv.getContext("2d");
	cxt.clearRect(0, 0, cnv.width, cnv.height);
    var objImg = new Image();
    objImg.src = "1.jpg";
    objImg.onload = function() {
        switch (intNum) {
        case 1:
            cxt.drawImage(objImg, 10, 10);
            break;
        case 2:
            cxt.drawImage(objImg, 10, 10, 94, 123);
            break;
        case 3:
		    cxt.drawImage(objImg, 10, 10, 94, 123);
            cxt.drawImage(objImg, 45, 50, 100, 150, 110, 10, 160, 180);
            break;
        }
    }
}
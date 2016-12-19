// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//自定义页面加载时调用的函数
function pageload() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    var objImg = new Image();
    objImg.src = "1.jpg";
    objImg.onload = function() {
        drawCirc(cxt, 60, true);
        cxt.drawImage(objImg, 70, 3);
        drawCirc(cxt, 10, false);
    }
}
//根据相关参数绘制圆
function drawCirc(cxt, intR, blnC) {
    cxt.beginPath();
    cxt.arc(140, 95, intR, 0, Math.PI * 2, true);
    cxt.closePath();
    //设置边框颜色
    cxt.strokeStyle = "#666";
    //设置边框宽度
    cxt.lineWidth = 3;
    //开始描边
    cxt.stroke();
    if (blnC) {
        //切割图形
        cxt.clip();
    } else {
        //设置填充色
        cxt.fillStyle = "#fff";
        //填充图形
        cxt.fill();
    }
}
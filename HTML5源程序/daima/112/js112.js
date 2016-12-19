// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//定义保存点击次数的全局变量
var intNum = 0;
//自定义画布点击函数
function cnvclick(cnv) {
    intNum += 1;
    intNum = (intNum == 4) ? 1 : intNum;
    var cxt = cnv.getContext("2d");
    cxt.clearRect(0, 0, cnv.width, cnv.height);
    var intW = 120;
    var intH = 120;
    var intX = cnv.width / 2 - intW / 2;
    var intY = cnv.height / 2 - intH / 2;
    switch (intNum) {
    case 1:
        cxt.fillStyle = "#eee";
        cxt.fillRect(intX, intY, intW, intH);
        break;
    case 2:
        cxt.fillStyle = "#ccc";
        cxt.fillRect(intX + 15, intY + 15, intW - 30, intH - 30);
        break;
    case 3:
        cxt.fillRect(intX + 30, intY + 30, intW - 60, intH - 60);
        break;
    }
}
//自定义点击"保存"标记函数
function spn1_click() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    cxt.save();
}
//自定义点击"恢复"标记函数
function spn2_click() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    cxt.restore();
}
//自定义点击"输出"标记函数
function spn3_click() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    window.location = cxt.canvas.toDataURL("image/png");
}
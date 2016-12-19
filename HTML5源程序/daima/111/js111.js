// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//自定义页面加载时调用的函数
function pageload() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    drawText(cxt, "bold 35px impact", 90, 70, false);
    drawText(cxt, "bold 35px arial blank", 130, 110, true);
    drawText(cxt, "bold 35px comic sans ms", 170, 150, true);
}
//根据参数绘制不同类型的字体
function drawText(cxt, strFont, intX, intY, blnFill) {
    cxt.font = strFont;
    cxt.textAlign = "center";
    cxt.textBaseline = "bottom";
    if (blnFill) {
        cxt.fillStyle = "#ccc";
        cxt.fillText("HTML 5 ", intX, intY);
    } else {
        cxt.strokeStyle = "#666";
        cxt.strokeText("你们好，HTML 5 ", intX, intY);
    }
}
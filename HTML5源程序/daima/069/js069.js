// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//选择上传文件时调用的函数
function fileUpload_CheckType(f) {
    var strP = "",
    strN = "",
    intJ = 0;
    var strFileType = /image.*/;
    for (var intI = 0; intI < f.length; intI++) {
        var tmpFile = f[intI];
        if (!tmpFile.type.match(strFileType)) {
            intJ = intJ + 1;
            strN = strN + tmpFile.name + "<br>";
        }
    }
    strP = "检测到(" + intJ + ")个非图片格式文件。";
    if (intJ > 0) {
        strP = strP + "文件名如下：<p>" + strN + "</p>";
    }
    $$("pTip").innerHTML = strP;
}
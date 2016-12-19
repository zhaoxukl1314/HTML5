// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//选择上传文件时调用的函数
function fileUpload_GetFileList(f) {
    var strLi = "<li class='li'>";
    strLi = strLi + "<span>文件名称</span>";
    strLi = strLi + "<span>文件类型</span>";
    strLi = strLi + "<span>文件大小</span>";
    strLi = strLi + "</li>";
    for (var intI = 0; intI < f.length; intI++) {
        var tmpFile = f[intI];
        strLi = strLi + "<li>";
        strLi = strLi + "<span>" + tmpFile.name + "</span>";
        strLi = strLi + "<span>" + tmpFile.type + "</span>";
        strLi = strLi + "<span>" + tmpFile.size + " KB</span>";
        strLi = strLi + "</li>";
    }
    $$("ulUpload").innerHTML = strLi;
}
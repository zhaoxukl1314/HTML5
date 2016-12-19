// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//选择上传文件时调用的函数
function fileUpload_ReadTxtFile(f) {
	//检测浏览器是否支持FileReader对象
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持FileReader对象！");
    }
    var tmpFile = f[0];
    var reader = new FileReader();
    reader.readAsText(tmpFile);
    reader.onload = function(e) {
        $$("artShow").innerHTML = "<pre>" + e.target.result + "</pre>";
    }
}
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//选择上传文件时调用的函数
function fileUpload_MoveFile(f) {
    //检测浏览器是否支持FileReader对象
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持FileReader对象！");
    }
    for (var intI = 0; intI < f.length; intI++) {
        var tmpFile = f[intI];
        var reader = new FileReader();
        reader.readAsDataURL(tmpFile);
        reader.onload = (function(f1) {
            return function(e) {
                var eleSpan = document.createElement('span');
                eleSpan.innerHTML = ['<img src="', 
				e.target.result, '" title="', f1.name, '"/>'].join('');
                $$('ulUpload').insertBefore(eleSpan, null);
            }
        })(tmpFile);
    }
}
function dropFile(e) {
	//调用预览上传文件的方式
    fileUpload_MoveFile(e.dataTransfer.files);
	//停止事件的传播
    e.stopPropagation();
	//阻止默认事件的发生
    e.preventDefault();
}
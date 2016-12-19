// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//选择上传文件时调用的函数
function fileUpload_ShowEvent(f) {
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持FileReader对象！");
    }
    var tmpFile = f[0];
    var reader = new FileReader();
    reader.readAsText(tmpFile);
    reader.onload = function(e) {
		$$("pStatus").style.display="block";
        $$("pStatus").innerHTML = "数据读取成功!";
    }
    reader.onloadstart = function(e) {
		$$("pStatus").style.display="block";
        $$("pStatus").innerHTML = "开始读取数据...";
    }
    reader.onloadend = function(e) {
		$$("pStatus").style.display="block";
        $$("pStatus").innerHTML = "文件读取成功!";
    }
    reader.onprogress = function(e) {
		$$("pStatus").style.display="block";
        $$("pStatus").innerHTML = "正在读取数据...";
    }
}
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//自定义页面加载时调用的函数
function pageload() {
	window.applicationCache.addEventListener("updateready",function() {
		$$("pStatus").style.display="block";
        $$("pStatus").innerHTML = "正在触发updateready事件...";
	},true);
}
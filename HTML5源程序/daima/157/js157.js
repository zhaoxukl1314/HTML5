// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//自定义页面加载时调用的函数
function pageload() {
	window.applicationCache.addEventListener("checking",function() {
		Status_Handle("正在检测是否有更新...");
	},true);
	window.applicationCache.addEventListener("downloading",function() {
		Status_Handle("正在下载可用的缓存...");
	},true);
	window.applicationCache.addEventListener("noupdate",function() {
		Status_Handle("没有最新的缓存更新!");
	},true);
	window.applicationCache.addEventListener("progress",function() {
		Status_Handle("本地缓存正在更新中...");
	},true);
	window.applicationCache.addEventListener("cached",function() {
		Status_Handle("本地缓存已更新成功!");
	},true);
	window.applicationCache.addEventListener("error",function() {
		Status_Handle("本地缓存更新时出错!");
	},true);
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//在添加“updateready”事件中执行swapCache()方法，
function pageload() {
	window.applicationCache.addEventListener("updateready",function() {
		Status_Handle("找到可更新的本地缓存!");
        window.applicationCache.swapCache();
		Status_Handle("完成本地缓存更新!");
		location.reload();
	},false);
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
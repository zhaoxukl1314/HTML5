// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//检测manifest文件是否有更新
function pageload() {
    if (window.applicationCache.status == 4) {
        Status_Handle("找到可更新的本地缓存!");
        $$("pShow").style.display = "block";
    }
}
//点击"手动更新"按钮时调用
function btnUpd_Click() {
    window.applicationCache.update();
    Status_Handle("完成手动更新!");
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
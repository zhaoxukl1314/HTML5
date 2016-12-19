// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//自定义页面加载时调用的函数
function pageload() {
    window.addEventListener("online",function() {
        Status_Handle("网络连接正常");
    },false);
    window.addEventListener("offline",function() {
        Status_Handle("连接已经断开");
    },false);
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
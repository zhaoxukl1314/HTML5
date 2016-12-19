// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var objWorker = new Worker("js177_1.js");
//自定义页面加载时调用的函数
function pageload() {
    objWorker.addEventListener('message',
    function(event) {
        $$("pStatus").style.display = "block";
        $$("pStatus").innerHTML += event.data;
    },
    false);
}
//自定义点击"请求"按钮时调用的函数
function btnSend_Click() {
    //获取发送内容
    var strTxtValue = $$("txtNum").value;
    if (strTxtValue.length > 0) {
        objWorker.postMessage(strTxtValue);
        $$("txtNum").value = "";
    }
}
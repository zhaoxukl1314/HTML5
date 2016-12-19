// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var strTip = "";
var objWs = null;
var conUrl = "ws://localhost:3131/test/demo";
var SocketCreated = false;
var arrState = new Array("正在建立连接...", "连接成功!", 
                         "正在关闭连接...", "连接已关闭!", 
                         "正在初始化值...", "连接出错!");
//自定义页面加载时函数
function pageload() {
    if (SocketCreated && (objWs.readyState == 0 || objWs.readyState == 1)) {
        objWs.close();
    } else {
        Handle_List(arrState[4]);
        try {
            objWs = new WebSocket(conUrl);
            SocketCreated = true;
        } catch(ex) {
            Handle_List(ex);
            return;
        }
    }
    //添加加socket对象的打开事件
    objWs.onopen = function() {
        Handle_List(arrState[objWs.readyState]);
    }
	//添加加socket对接收服务器数据事件
    objWs.onmessage = function(event) {
        Handle_List("系统消息:" +event.data);
    }
	//添加加socket对象关闭开事件
    objWs.onclose = function() {
        Handle_List(arrState[objWs.readyState]);
    }
	//添加加socket对象的出错事件
    objWs.onerror = function() {
        Handle_List(arrState[5]);
    }
}
//自定义点击“发送”按钮时调用的函数
function btnSend_Click() {
    var strTxtMessage = $$("txtMessage").value;
    if (strTxtMessage.length > 0) {
        objWs.send(strTxtMessage);
        Handle_List("我说:" + strTxtMessage);
        $$("txtMessage").value = "";
    }
}
//自定义显示与服务器交流内容的函数
function Handle_List(message) {
    strTip += message + "\n";
    $$("txtaList").innerHTML = strTip;
}
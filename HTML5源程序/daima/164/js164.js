// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var strList = "";
var strUser = "";
var objWs = null;
var conUrl = "ws://localhost:3131/test/JSON";
var SocketCreated = false;
var arrState = new Array("正在建立连接...", "连接成功!", "正在关闭连接...", 
                         "连接已关闭!", "正在初始化值...", "连接出错!");
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
        var objJSON =JSON.parse(event.data);
        for (var intI = 0; intI < objJSON.length; i++) {
            Handle_User(objJSON[intI].UserName);
            Handle_User(objJSON[intI].Stauts);
        }
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
//自定义点击"发送"按钮时调用的函数
function btnSend_Click() {
    var strTxtMessage = $$("txtMessage").value;
    //定义一个日期型对象
    var strTime = new Date();
    if (strTxtMessage.length > 0) {
        objWs.send(JSON.stringify({
            content: strTxtMessage,
            datetime: strTime.toLocaleTimeString()
        }));
        Handle_List(strTime.toLocaleTimeString());
        Handle_List("我说:" + strTxtMessage);
        $$("txtMessage").value = "";
    }
}
//自定义显示对话记录内容的函数
function Handle_List(message) {
    strList += message + "\n";
    $$("txtaList").innerHTML = strList;
}
//自定义显示在线人员内容的函数
function Handle_User(message) {
    strUser += message + "\n";
    $$("txtaUser").innerHTML = strUser;
}
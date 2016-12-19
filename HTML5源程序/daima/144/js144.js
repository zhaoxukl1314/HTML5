// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var db;
//点击“创建数据库”按钮时调用
function btnCreateDb_Click() {
    db = openDatabase('Student3', '1.0', 'StuManage', 2 * 1024 * 1024,
    function() {
        $$("pStatus").style.display = "block";
        $$("pStatus").innerHTML = "数据库创建成功!";
    });
}
//点击“测试连接”按钮时调用
function btnTestConn_Click() {
    if (db) {
        $$("pStatus").style.display = "block";
        $$("pStatus").innerHTML = "数据库连接成功!";
    }
}
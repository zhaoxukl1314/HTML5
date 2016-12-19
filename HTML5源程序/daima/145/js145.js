// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var db;
//点击“执行事务”时执行
function btnCreateTrans_Click() {
    //创建/打开数据库
    db = openDatabase('Student', '1.0', 'StuManage', 2 * 1024 * 1024);
    if (db) {
        var strSQL = "0";
        strSQL += "(StuID unique,Name text,Sex text,Score int)";
        db.transaction(function(tx) {
            tx.executeSql(strSQL)
        },
        function() {
            Status_Handle("出错!");
        },
        function() {
            Status_Handle("成功!");
        })
    }
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
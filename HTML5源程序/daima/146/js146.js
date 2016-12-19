// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var db;
//点击“提交”按钮时调用
function btnAdd_Click() {
    //创建/打开数据库
    db = openDatabase('Student', '1.0', 'StuManage', 2 * 1024 * 1024);
    if (db) {
        var strSQL = "insert into StuInfo values";
        strSQL += "(?,?,?,?)";
        db.transaction(function(tx) {
            tx.executeSql(strSQL,[
			    $$("txtStuID").value,$$("txtName").value,
			    $$("selSex").value,$$("txtScore").value
			],
			function(){
				$$("txtName").value="";
	            $$("txtScore").value="";
			    Status_Handle("成功增加1条记录!")
			},
			function(tx,ex){
			    Status_Handle(ex.message)
			})
        })
    }
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
//生成指定长度的随机数
function RetRndNum(n) {
    var strRnd = "";
    for (var intI = 0; intI < n; intI++) {
        strRnd += Math.floor(Math.random() * 10);
    }
	return strRnd;
}
//初始化数据
function Init_Data(){
    $$("txtStuID").value=RetRndNum(6);
}

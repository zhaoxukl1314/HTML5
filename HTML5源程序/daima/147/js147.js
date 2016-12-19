// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var db;
//获取全部或查询数据
function getWebSqlData(s) {
    //创建/打开数据库
    db = openDatabase('Student', '1.0', 'StuManage', 2 * 1024 * 1024);
    if (db) {
        var strSQL = "select * from StuInfo where StuID<>?";
        if (s > 0) {
            strSQL = "select * from StuInfo where StuID=?";
        }
        db.transaction(function(tx) {
            tx.executeSql(strSQL, [s],
            function(tx, rs) {
                var strHTML = "<li>";
                strHTML += "输入学号：";
                strHTML += "<input type='text' id='txtSearch' ";
                strHTML += "class='inputtxt' size='14'>";
                strHTML += "<input id='btnSearch' type='button' value='查询' ";
                strHTML += "class='inputbtn' onClick='btnSearch_Click();'>";
                strHTML += "<input id='btnSearch' type='button' value='增加' ";
                strHTML += "class='inputbtn' onClick='AddData();'>";
                strHTML += "</li>";
                strHTML += "<li class='li_h'>";
                strHTML += "<span class='spn_a'>学号</span>";
                strHTML += "<span class='spn_a'>姓名</span>";
                strHTML += "<span class='spn_c'>性别</span>";
                strHTML += "<span class='spn_c'>总分</span>";
                strHTML += "<span class='spn_d'>操作</span>";
                strHTML += "</li>";
                //内容部分
                for (var intI = 0; intI < rs.rows.length; intI++) {
                    //定义主键
                    var intId = rs.rows.item(intI).StuID;
                    strHTML += "<li class='li_c'>";
                    strHTML += "<span class='spn_a'>" + intId + "</span>";
                    strHTML += "<span class='spn_a'>";
					strHTML += rs.rows.item(intI).Name ;
					strHTML += "</span>";
                    strHTML += "<span class='spn_c'>";
					strHTML += rs.rows.item(intI).Sex;
					strHTML += "</span>";
                    strHTML += "<span class='spn_c'>";
					strHTML += rs.rows.item(intI).Score ;
					strHTML += "</span>";
                    strHTML += "<span class='spn_d'>";
                    strHTML += "<a href='#' onClick=EditData('" 
					strHTML += intId ;
					strHTML += "')>编辑</a>";
                    strHTML += "&nbsp;|&nbsp;";
                    strHTML += "<a href='#' onClick=btnDel_Click('"
					strHTML += intId ;
					strHTML += "')>删除</a>";
                    strHTML += "</span></li>";
                }
                $$("ulMessage").style.display = "block";
                $$("fstInput").style.display = "none";
				$$("ulMessage").innerHTML = strHTML;
            },
            function(tx, ex) {
                Status_Handle(ex.message)
            })
        })
    }
}
//点击"提交"按钮时执行
function btnAdd_Click() {
    //创建/打开数据库
    db = openDatabase('Student', '1.0', 'StuManage', 2 * 1024 * 1024);
    if (db) {
        var strSQL = "insert into StuInfo values";
        strSQL += "(?,?,?,?)";
        db.transaction(function(tx) {
            tx.executeSql(strSQL, [
			    $$("txtStuID").value, $$("txtName").value, 
				$$("selSex").value, $$("txtScore").value
			],
            function() {
                getWebSqlData(0);
            },
            function(tx, ex) {
                Status_Handle(ex.message)
            })
        })
    }
}
//点击“删除”链接时执行
function btnDel_Click(StuID) {
    //创建/打开数据库
    db = openDatabase('Student', '1.0', 'StuManage', 2 * 1024 * 1024);
    if (db) {
        var strSQL = "delete from StuInfo where StuID=?";
        db.transaction(function(tx) {
            tx.executeSql(strSQL, [StuID],
            function() {
                getWebSqlData(0);
            },
            function(tx, ex) {
                Status_Handle(ex.message)
            })
        })
    }
}
//点击"更新"链接时执行
function btnUpd_Click() {
    //创建/打开数据库
    db = openDatabase('Student', '1.0', 'StuManage', 2 * 1024 * 1024);
    if (db) {
        var strSQL = "update StuInfo set Name=?,Sex=?,Score=? where StuID=?";
        db.transaction(function(tx) {
            tx.executeSql(strSQL, [
			    $$("txtName").value, $$("selSex").value, 
				$$("txtScore").value, $$("txtStuID").value
			],
            function() {
                getWebSqlData(0);
            },
            function(tx, ex) {
                Status_Handle(ex.message)
            })
        })
    }
}
//点击"查询"按钮时执行
function btnSearch_Click() {
    //获取输入的学号
    var strStuID = $$("txtSearch").value;
    //获取查询后的结果
    getWebSqlData(strStuID);
}
//点击“增加”按钮时初化数据
function AddData() {
    $$("ulMessage").style.display = "none";
    $$("fstInput").style.display = "block";
	$$("lgdInput").innerHTML = "增加学生资料";
    $$("txtStuID").value = RetRndNum(6);
    $$("txtName").value = "";
    $$("selSex").value = "";
    $$("txtScore").value = "";
    $$("btnAdd").style.display = "block";
	$$("btnUpd").style.display = "none";
}
//点击"更新"按钮时根据StuID号获取对应数据
function EditData(StuID) {
    $$("ulMessage").style.display = "none";
    $$("fstInput").style.display = "block";
    $$("lgdInput").innerHTML = "修改学生资料";
    $$("btnUpd").style.display = "block";
	$$("btnAdd").style.display = "none";
    //创建/打开数据库
    db = openDatabase('Student', '1.0', 'StuManage', 2 * 1024 * 1024);
    if (db) {
        var strSQL = "select * from StuInfo where StuID=?";
        db.transaction(function(tx) {
            tx.executeSql(strSQL, [StuID],
            function(tx, rs) {
                $$("txtStuID").value = rs.rows.item(0).StuID;
                $$("txtName").value = rs.rows.item(0).Name;
                $$("selSex").value = rs.rows.item(0).Sex;
                $$("txtScore").value = rs.rows.item(0).Score;
            },
            function(tx, ex) {
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
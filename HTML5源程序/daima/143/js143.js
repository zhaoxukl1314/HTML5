// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//点击"增加"按钮时调用
function btnAdd_Click() {
    var strStuID = $$("txtStuID").value;
    var strName = $$("txtName").value;
    var strSex = $$("selSex").value;
    var strScore = $$("txtScore").value;
    if (strName.length > 0 && strScore.length > 0) {
        //定义一个实体对象，保存全部获取的值
        var setData = new Object;
        setData.StuID = strStuID;
        setData.Name = strName;
        setData.Sex = strSex;
        setData.Score = strScore;
        var strTxtData = JSON.stringify(setData);
        localStorage.setItem(strStuID, strTxtData);
    }
    //重新加载
    getlocalData(0);
    //清空原先内容
    $$("txtName").value = "";
    $$("txtScore").value = "";
}
//点击"查询"按钮时调用
function btnSearch_Click() {
	//获取查询学号
    var strSearch = $$("txtSearch").value;
	//根据学号键名获取数据
    getlocalData(strSearch);
}
//获取保存数据并显示在页面中
function getlocalData(s) {
    //标题部分
    var strHTML = "<li>";
    strHTML += "请输入学号：";
    strHTML += "<input type='text' id='txtSearch'";
    strHTML += "class='inputtxt' size='22'>";
    strHTML += "<input id='btnSearch' type='button' value='查询' ";
    strHTML += "class='inputbtn' onClick='btnSearch_Click();'>";
    strHTML += "</li>";
    strHTML += "<li class='li_h'>";
    strHTML += "<span class='spn_a'>学号</span>";
    strHTML += "<span class='spn_a'>姓名</span>";
    strHTML += "<span class='spn_c'>性别</span>";
    strHTML += "<span class='spn_c'>总分</span>";
    strHTML += "<span class='spn_d'>操作</span>";
    strHTML += "</li>";
    if (s) {
        var SearchData = JSON.parse(localStorage.getItem(s));
        strHTML += "<li class='li_c'>";
        strHTML += "<span class='spn_a'>" + SearchData.StuID + "</span>";
        strHTML += "<span class='spn_a'>" + SearchData.Name + "</span>";
        strHTML += "<span class='spn_c'>" + SearchData.Sex + "</span>";
        strHTML += "<span class='spn_c'>" + SearchData.Score + "</span>";
        strHTML += "<span class='spn_d'>";
        strHTML += "<a href='#' onclick=EditData(" + s + ")>编辑</a>";
        strHTML += "&nbsp;|&nbsp;";
        strHTML += "<a href='#' onclick=DeleteData(" + s + ")>删除</a>";
        strHTML += "</span></li>";
    } else {
        for (var intI = 0; intI < localStorage.length; intI++) {
            //获取Key值
            var strKey = localStorage.key(intI);
            //过滤键名内容
            if (strKey.substring(0, 3) == "stu") {
                var GetData = JSON.parse(localStorage.getItem(strKey));
                strHTML += "<li class='li_c'>";
                strHTML += "<span class='spn_a'>" + GetData.StuID + "</span>";
                strHTML += "<span class='spn_a'>" + GetData.Name + "</span>";
                strHTML += "<span class='spn_c'>" + GetData.Sex + "</span>";
                strHTML += "<span class='spn_c'>" + GetData.Score + "</span>";
                strHTML += "<span class='spn_d'>";
                strHTML += "<a href='#' onClick=EditData('" ;
				strHTML +=  GetData.StuID ;
				strHTML +=  "')>编辑</a>";
                strHTML += "&nbsp;|&nbsp;";
                strHTML += "<a href='#' onClick=DeleteData('" ;
				strHTML +=  GetData.StuID ;
				strHTML += "')>删除</a>";
                strHTML += "</span></li>";
            }
        }
    }
    $$("ulMessage").innerHTML = strHTML;
    $$("txtStuID").value = "stu" + RetRndNum(4);
}
//点击"编辑"链接时调用
function EditData(k) {
	//根据键名获取对应数据
    var EditData = JSON.parse(localStorage.getItem(k));
    $$("txtStuID").value = EditData.StuID;
    $$("txtName").value = EditData.Name;
    $$("selSex").value = EditData.Sex;
    $$("txtScore").value = EditData.Score;
}
//点击"删除"链接时调用
function DeleteData(k) {
	//删除指定键名对应的数据
    localStorage.removeItem(k);
    //重新加载
    getlocalData(0);
}
//生成指定长度的随机数
function RetRndNum(n) {
    var strRnd = "";
    for (var intI = 0; intI < n; intI++) {
        strRnd += Math.floor(Math.random() * 10);
    }
    return strRnd;
}
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
		var SetData= new Object;
		SetData.StuID=strStuID;
		SetData.Name=strName;
		SetData.Sex=strSex;
		SetData.Score=strScore;	
		var strTxtData=JSON.stringify(SetData);	
        localStorage.setItem(strStuID, strTxtData);
    }
    //重新加载
    getlocalData();
	//清空原先内容
	$$("txtName").value="";
	$$("txtScore").value="";
}
//获取保存数据并显示在页面中
function getlocalData() {
    //标题部分
    var strHTML = "<li class='li_h'>";
    strHTML += "<span class='spn_a'>学号</span>";
	strHTML += "<span class='spn_b'>姓名</span>";
    strHTML += "<span class='spn_a'>性别</span>";
	strHTML += "<span class='spn_c'>总分</span>";
    strHTML += "</li>";
    //内容部分
    for (var intI = 0; intI < localStorage.length; intI++) {
        //获取Key值
        var strKey = localStorage.key(intI);
		//过滤键名内容
        if (strKey.substring(0, 3) == "stu") {
			var GetData=JSON.parse(localStorage.getItem(strKey));
            strHTML += "<li class='li_c'>";
            strHTML += "<span class='spn_a'>" + GetData.StuID + "</span>";
            strHTML += "<span class='spn_b'>" + GetData.Name + "</span>";
            strHTML += "<span class='spn_a'>" + GetData.Sex + "</span>";
			strHTML += "<span class='spn_c'>" + GetData.Score + "</span>";
            strHTML += "</li>";
        }
    }
    $$("ulMessage").innerHTML = strHTML;
	$$("txtStuID").value="stu" + RetRndNum(4);
}
//生成指定长度的随机数
function RetRndNum(n) {
    var strRnd = "";
    for (var intI = 0; intI < n; intI++) {
        strRnd += Math.floor(Math.random() * 10);
    }
	return strRnd;
}
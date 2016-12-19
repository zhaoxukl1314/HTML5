// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//点击"发表"按钮时调用
function btnAdd_Click() {
    //获取文本框中的内容
    var strContent = $$("txtContent").value;
	//定义一个日期型对象
    var strTime = new Date();
	//如果不为空，则保存
    if (strContent.length > 0) {
        var strKey = "cnt" + RetRndNum(4);
        var strVal = strContent + "," + strTime.toLocaleTimeString();
        localStorage.setItem(strKey, strVal);
    }
    //重新加载
    getlocalData();
	//清空原先内容
	$$("txtContent").value="";
}

//获取保存数据并显示在页面中
function getlocalData() {
    //标题部分
    var strHTML = "<li class='li_h'>";
    strHTML += "<span class='spn_a'>编号</span>";
    strHTML += "<span class='spn_b'>内容</span>";
    strHTML += "<span class='spn_c'>时间</span>";
    strHTML += "</li>";
    //内容部分
    var strArr = new Array(); //定义一数组
    for (var intI = 0; intI < localStorage.length; intI++) {
        //获取Key值
        var strKey = localStorage.key(intI);
		//过滤键名内容
        if (strKey.substring(0, 3) == "cnt") {
            var strVal = localStorage.getItem(strKey);
            strArr = strVal.split(",");
            strHTML += "<li class='li_c'>";
            strHTML += "<span class='spn_a'>" + strKey + "</span>";
            strHTML += "<span class='spn_b'>" + strArr[0] + "</span>";
            strHTML += "<span class='spn_c'>" + strArr[1] + "</span>";
            strHTML += "</li>";
        }
    }
    $$("ulMessage").innerHTML = strHTML;
}
//生成指定长度的随机数
function RetRndNum(n) {
    var strRnd = "";
    for (var intI = 0; intI < n; intI++) {
        strRnd += Math.floor(Math.random() * 10);
    }
	return strRnd;
}
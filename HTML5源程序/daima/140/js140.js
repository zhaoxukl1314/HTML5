// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var intNum = 0;
//点击"增加"按钮时调用
function btnAdd_Click() {
    for (var intI = 0; intI <= 7; intI++) {
        var strKeyName = "strKeyName" + intI;
        var strKeyValue = "strKeyValue" + intI;
        localStorage.setItem(strKeyName, strKeyValue);
        intNum++;
    }
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = "已成功保存 <b>" + intNum + "</b> 条数据记录！";
}
//点击"清空"按钮时调用
function btnDel_Click() {
    localStorage.clear();
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = "已成功清空全部数据记录！";
}
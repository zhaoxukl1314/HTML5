// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//输入文本框内容时调用的函数
function txtName_change(v) {
    var strName = v.value;
    sessionStorage.setItem("strName", strName);
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = sessionStorage.getItem("strName");
}
//点击“读取”按钮时调用的函数
function btnGetValue_click() {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = sessionStorage.getItem("strName");
}
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var objWorker = new Worker("js176_1.js");
//自定义页面加载时调用的函数
function pageload() {
    objWorker.addEventListener('message',
    function(event) {
        var strHTML = "";
        var ev = event.data;
        for (var i in ev) {
            strHTML +="<span>"+ i + " :";
			strHTML +="<b> " + ev[i] + " </b></span><br>";
        }
        $$("pStatus").style.display = "block";
        $$("pStatus").innerHTML = strHTML;
    },
    false);
    objWorker.postMessage("");
}
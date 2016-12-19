// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//自定义页面加载时调用的函数
function pageload() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(ObjPos) {
            Status_Handle("获取成功!");
        },
        function(objError) {
            Status_Handle(objError.code + ":" + objError.message);
        },
        {
            maximumAge: 3 * 1000 * 60,
            timeout: 3000
        });
    }
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
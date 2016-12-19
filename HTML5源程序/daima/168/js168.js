// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var objNav = null;
var strHTML = "";
function pageload() {
    if (objNav == null) {
        objNav = window.navigator;
    }
    if (objNav != null) {
        var objGeoLoc = objNav.geolocation;
        if (objGeoLoc != null) {
            objGeoLoc.getCurrentPosition(function(objPos) {
                var objCrd = objPos.coords;
                strHTML += "纬度值：<b>" + objCrd.latitude + "</b><br>";
                strHTML += "精准度：<b>" + objCrd.accuracy + "</b><br>";
                strHTML += "精度值：<b>" + objCrd.longitude + "</b><br>";
                strHTML += "时间戳：<b>" + objPos.timestamp + "</b><br>";
				var objAdd = objPos.address;
				strHTML +="------------------------------<br>";
				strHTML += "国家：<b>" + objAdd.country + "</b><br>";
                strHTML += "省份：<b>" + objAdd.region + "</b><br>";
                strHTML += "城市：<b>" + objAdd.city + "</b><br>";
                Status_Handle(strHTML);
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
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var objNav = null;
var strHTML = "";
//自定义页面加载时调用的函数
function pageload() {
    if (objNav == null) {
        objNav = window.navigator;
    }
    if (objNav != null) {
        var objGeoLoc = objNav.geolocation;
        if (objGeoLoc != null) {
            objGeoLoc.getCurrentPosition(function(objPos) {
                var objCrd = objPos.coords;
                var lat = objCrd.latitude;
                var lng = objCrd.longitude;
                //根据获取的经度与纬度创建一个地图中心坐标
                var latlng = new google.maps.LatLng(lat, lng);
                //将中心点设置为页面打开时google地图的中心点
                var objOpt = {
                    zoom: 16,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                //创建地图，并与页面中ID号为"divMap"的元素相绑定
                var objMap = new google.maps.Map($$("divMap"), objOpt);
                //创建一个地图标记
                var objMrk = new google.maps.Marker({
                    position: latlng,
                    map: objMap
                });
                //创建一个地图标记窗口并设置注释内容
                var objInf = new google.maps.InfoWindow({
                    content: "我在这里"
                });
                //在地图中打开标记窗口
                objInf.open(objMap, objMrk);
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
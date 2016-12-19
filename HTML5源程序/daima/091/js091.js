// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function v_move(v){
	$$("pTip").style.display=(v)?"block":"none";
}
function v_loadstart() {
	$$("spnPlayTip").innerHTML="开始加载";
}
function v_palying(){
	$$("spnPlayTip").innerHTML="正在播放";
}
function v_pause(){
	$$("spnPlayTip").innerHTML="已经暂停";
}
function v_ended(){
	$$("spnPlayTip").innerHTML="播放完成";
}
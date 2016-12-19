// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function pageload(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//设置边框
	cxt.strokeStyle="#666";
	cxt.strokeRect(30,30,150,80);
	//设置背景
	cxt.fillStyle="#eee";
	cxt.fillRect(30,30,150,80);
}
function cnvClick(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//清空图形
	cxt.clearRect(36,36,138,68);
}
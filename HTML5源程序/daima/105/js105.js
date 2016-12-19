// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function pageload(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	drawRect(cxt);
	cxt.globalCompositeOperation="lighter";
	drawCirc(cxt);
}
//绘制一个正方形
function drawRect(cxt){
	cxt.fillStyle="#666";
	cxt.fillRect(60,50,80,80);
}
//绘制一个圆形
function drawCirc(cxt){
	cxt.beginPath()
	cxt.arc(130,120,50,0,Math.PI*2,true);
	cxt.closePath()
	cxt.fillStyle="#ccc";
	cxt.fill();
}
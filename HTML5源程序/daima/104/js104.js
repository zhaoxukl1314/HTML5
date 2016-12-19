// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//绘制一个正方形
function drawRect(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//设置边框
	cxt.strokeStyle="#666";
	cxt.lineWidth=2;
	cxt.strokeRect(105,70,60,60);
}
//上下移动已绘制的正方形
function spn1_click(){
    var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	cxt.translate(-20,-20);
	drawRect();
	cxt.translate(40,40);
	drawRect();
}
//缩放已绘制的正方形
function spn2_click(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	cxt.scale(1.2,1.2);
	drawRect();
	cxt.scale(1.2,1.2);
	drawRect();
}
//旋转已绘制的正方形
function spn3_click(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	cxt.rotate(Math.PI/8);
	drawRect();
	cxt.rotate(-Math.PI/4);
	drawRect();
}
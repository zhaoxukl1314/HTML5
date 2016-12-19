// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function pageload(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//开始创建渐变对象
	var gnt=cxt.createRadialGradient(30,30,0,20,20,400);
	gnt.addColorStop(0,"#000");
	gnt.addColorStop(0.3,"#eee");
	gnt.addColorStop(1,"#fff");
	//开始绘制实体圆路径
	cxt.beginPath();
	cxt.arc(125,95,80,0,Math.PI*2,true);
	cxt.closePath();
	//设置填充背景色
	cxt.fillStyle=gnt;
	//进行填充
	cxt.fill();
	//开始绘制边框圆路径
	cxt.beginPath();
	cxt.arc(125,95,80,0,Math.PI*2,true);
	cxt.closePath();
	//设置边框颜色
	cxt.strokeStyle="#666";
	//设置边框宽度
	cxt.lineWidth=2;
	//开始描边
	cxt.stroke();
}

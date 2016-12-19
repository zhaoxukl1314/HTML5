// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function pageload(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//绘制由左至右的颜色渐变图形
	var gnt1=cxt.createLinearGradient(20,20,150,20);
	gnt1.addColorStop(0,"#000");
	gnt1.addColorStop(1,"#fff");
	cxt.fillStyle=gnt1;
	cxt.fillRect(20,20,150,20);
	//绘制由上至下的颜色渐变图形
	var gnt2=cxt.createLinearGradient(20,20,20,150);
	gnt2.addColorStop(0,"#000");
	gnt2.addColorStop(1,"#fff");
	cxt.fillStyle=gnt2;
	cxt.fillRect(20,20,20,150);
	//绘制沿对角线的颜色渐变图形
	var gnt3=cxt.createLinearGradient(50,50,100,100);
	gnt3.addColorStop(0,"#000");
	gnt3.addColorStop(1,"#fff");
	cxt.fillStyle=gnt3;
	cxt.fillRect(50,50,100,100);
}

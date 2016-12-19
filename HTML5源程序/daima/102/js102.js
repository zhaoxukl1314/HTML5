// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function spn1_click(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//清除画布原有图形
	cxt.clearRect(0,0,280,190);
	//开始画实体圆
	cxt.beginPath();
	cxt.arc(100,100,50,0,Math.PI*2,true);
	cxt.closePath();
	//设置填充背景色
	cxt.fillStyle="#eee";
	//进行填充
	cxt.fill();
}
function spn2_click(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//清除画布原有图形
	cxt.clearRect(0,0,280,190);
	//开始画边框圆
	cxt.beginPath();
	cxt.arc(100,100,50,0,Math.PI*2,true);
	cxt.closePath();
	//设置边框色
	cxt.strokeStyle="#666";
	//设置边框宽度
	cxt.lineWidth=2;
	//进行描边
	cxt.stroke();
}
function spn3_click(){
	var cnv=$$("cnvMain");
    var cxt=cnv.getContext("2d");
	//清除画布原有图形
	cxt.clearRect(0,0,280,190);
	//开始画圆
	cxt.beginPath();
	cxt.arc(100,100,50,0,Math.PI*2,true);
	cxt.closePath();
	//设置填充背景色
	cxt.fillStyle="#eee";
	//进行填充
	cxt.fill();
	//设置边框色
	cxt.strokeStyle="#666";
	//设置边框宽度
	cxt.lineWidth=2
	//进行描边
	cxt.stroke();
	//开始画衔接的边框圆
	cxt.beginPath();
	cxt.arc(175,100,50,0,Math.PI*2,true);
	cxt.closePath();
	//设置边框色
	cxt.strokeStyle="#666";
	//设置边框宽度
	cxt.lineWidth=2
	//进行描边
	cxt.stroke();
}
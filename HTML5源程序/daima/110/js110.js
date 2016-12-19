// JavaScript Document
//定义保存点击次数的全局变量
var intNum = 0;
//自定义画布点击函数
function cnvclick(cnv) {
    intNum += 1;
    intNum = (intNum == 3) ? 1 : intNum;
    var cxt = cnv.getContext("2d");
    var objImg = new Image();
    objImg.src = "2.jpg";
	var intX=cnv.width/2-objImg.width/2;
	var intY=cnv.height/2-objImg.height/2;
    objImg.onload = function() {
        switch (intNum) {
        case 1:
            cxt.drawImage(objImg, intX,intY);
            break;
        case 2:
		    dealPixel(cxt,objImg,intX,intY);
            break;
        }
    }
}
//根据相关参数处理绘制图形像素
function dealPixel(cxt,objImg,intX,intY) {
    var ImgData=cxt.getImageData(intX,intY,objImg.width,objImg.height);
	for(var intI=0;intI<ImgData.data.length;intI+=4){
		ImgData.data[intI+0]=255-ImgData.data[intI+0];
		ImgData.data[intI+1]=255-ImgData.data[intI+2];
		ImgData.data[intI+2]=255-ImgData.data[intI+1]
	}
	cxt.putImageData(ImgData,intX,intY);
}
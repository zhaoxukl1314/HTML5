// JavaScript Document
function $$(id){
	return document.getElementById(id);
}
// 检测密码是否验证成功
function chkPassWord(){
  var $$Pass=$$("txtPassWord");
  var $$spnP=$$("spnPassWord");
  var strP;
  if($$Pass.checkValidity()){
	 strP="√";
	}
  else{
	 strP="×";
	}
   $$spnP.innerHTML=strP;
   return false;
}
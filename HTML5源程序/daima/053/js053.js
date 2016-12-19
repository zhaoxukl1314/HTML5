// JavaScript Document
function $$(id){
	return document.getElementById(id);
}
// 检测密码是否验证成功
function setErrorInfo(){
  var $$Pass_1=$$("txtPassWord_1");
  var $$Pass_2=$$("txtPassWord_2");
  if($$Pass_1.value==$$Pass_2.value){
	 $$Pass_2.setCustomValidity("√,两次密码相同!");
	}
  else{
	 $$Pass_2.setCustomValidity("×,两次密码不一样!");
	}
}
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function pageload(){
	var cnv=$$("cnvMain");
	var cxt=cnv.getContext("2d");
	cxt.fillStyle="#ccc";
	cxt.fillRect(30,30,80,80);
}
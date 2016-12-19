// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var i = 0,j = 0,k = 0;
function v_chkType() {
	var strHTML="";
    var arrType = new Array('audio/mpeg;', 'audio/mov;', 
	'audio/mp4;codecs="mp4a.40.2"', 'audio/ogg;codecs="vorbis"',
    'video/webm;codecs="vp8,vorbis"', 'audio/wav;codecs="1"');
    for (intI = 0; intI < arrType.length; intI++) {
        switch ($$("vdoMain").canPlayType(arrType[intI])) {
        case "":
            i = i + 1;
            break;
        case "maybe":
            j = j + 1;
            break;
        case "probably":
            k = k + 1;
            break;
        }
    }
	strHTML+="空字符："+i+"<br>";
	strHTML+="maybe："+j+"<br>";
	strHTML+="probably："+k;
	$$("spnResult").style.display="block";
	$$("spnResult").innerHTML=strHTML;
}
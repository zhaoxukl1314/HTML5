// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function Video_Progress(e) {
    var intState = e.networkState;
    $$("spnStatus").style.display = "block";
    $$("spnStatus").innerHTML = StrByNum(intState)
	if (intState == 1) {
       $$("spnStatus").style.display = "none";
    }
}
function StrByNum(n) {
    switch (n) {
    case 0:
        return "正在初始化...";
    case 1:
        return "数据加载完成!";
    case 2:
        return "正在加载中...";
    case 3:
        return "数据加载失败!";
    }
}
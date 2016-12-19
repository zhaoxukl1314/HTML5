﻿var sendInformation = new Object();
function init() 
{
    var dest = document.getElementById("show");
    dest.addEventListener("dragover", function(ev) 
    {
        ev.stopPropagation();
        ev.preventDefault();
    }, false);
    // (3) dragend：拖放结束
    dest.addEventListener("dragend", function(ev) 
    {
        ev.stopPropagation();
        ev.preventDefault();
    }, false);

    dest.addEventListener("drop", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();

        var file = ev.dataTransfer.files[0];
        var reader = new FileReader();
        sendInformation.fileName = file.name;
        var saveButton = document.getElementById("saveButton");

        if (file.type.substr(0, 5) == "image") {
            reader.onload = function (event) {
                dest.style.background = 'url(' + event.target.result + ') no-repeat center';
                dest.innerHTML = "";
            };
            reader.readAsDataURL(file);
            sendInformation.content = file.getAsBinary();
            sendInformation.fileType = 1;
            saveButton.disabled = "";
        }
        else if (file.type.substr(0, 4) == "text") {
            //将文件以文本形式进行读入页面
            reader.readAsText(file);
            reader.onload = function (f) {
                //在页面上显示读入文本
                dest.innerHTML = "<pre>" + this.result + "</pre>";
                sendInformation.content = this.result;
                dest.style.background = "white";
            }
            saveButton.disabled = "";
            sendInformation.fileType = 2;
        }
        else {
            dest.innerHTML = "暂不支持此类文件的预览";
            dest.style.background = "white";
            saveButton.disabled = "disabled";
            sendInformation.fileType = 3;
            document.getElementById("successLabel").innerHTML = "";
        }
    }, false);
}

function uploadAndSubmit() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "案例11.aspx?fileName=" + encodeURI(sendInformation.fileName) + "&fileType=" + sendInformation.fileType);
    xhr.onreadystatechange =
    function () {
        var result = xhr.responseText;
        document.getElementById("show").innerHTML = "文件预览区";        
        document.getElementById("show").style.background = "white";
        document.getElementById("successLabel").innerHTML = result;
        if (xhr.readyState == 4) {            
            if (result == "上传成功")                
                document.getElementById("saveButton").value = "继续上传";
            else 
                document.getElementById("saveButton").value = "重新上传";
        }
        else {
            document.getElementById("successLabel").innerHTML = result;
            document.getElementById("saveButton").value = "重新上传";
        }
    }
    if(sendInformation.fileType==1)
        xhr.sendAsBinary(sendInformation.content);
    else if(sendInformation.fileType==2)
        xhr.send(sendInformation.content);
} 
//设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function(e){e.preventDefault();};
document.ondrop = function(e){e.preventDefault();}
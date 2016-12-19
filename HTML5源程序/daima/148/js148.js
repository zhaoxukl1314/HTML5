<script type="text/javascript">
var dateElement;
var today;
function window_onload()
{
    dateElement=document.getElementById("date1");
    today=document.getElementById("today");
    setToday();
}
function date_onchange()
{   
    var obj;
    if(isNaN(Date.parse(dateElement.value)))
    {
        setToday();
        return;
    }
    today.innerHTML=dateElement.value;
    obj=JSON.parse(localStorage.getItem(dateElement.value));
    setInnerHTML(obj);
}
function save()
{
    var obj=new Object();
    obj.record=new Array();
    if(document.getElementById("li1").innerHTML!="(没有记录）")
        obj.record.push(document.getElementById("li1").innerHTML);
    if(document.getElementById("li2").innerHTML!="(没有记录）")
        obj.record.push(document.getElementById("li2").innerHTML);
    if(document.getElementById("li3").innerHTML!="(没有记录）")
        obj.record.push(document.getElementById("li3").innerHTML);
    if(document.getElementById("li4").innerHTML!="(没有记录）")
        obj.record.push(document.getElementById("li4").innerHTML);
    if(document.getElementById("li5").innerHTML!="(没有记录）")
        obj.record.push(document.getElementById("li5").innerHTML);
    localStorage.setItem(dateElement.value,JSON.stringify(obj));  
}
function setInnerHTML(obj)
{
    if(obj==null||obj.record==null)
    {
        document.getElementById("li1").innerHTML="(没有记录）";
        document.getElementById("li2").innerHTML="(没有记录）";
        document.getElementById("li3").innerHTML="(没有记录）";
        document.getElementById("li4").innerHTML="(没有记录）";
        document.getElementById("li5").innerHTML="(没有记录）";
    }
    else
    {
        if(obj.record[0]!=null)
            document.getElementById("li1").innerHTML=obj.record[0];
        else
            document.getElementById("li1").innerHTML="(没有记录）";
        if(obj.record[1]!=null)
            document.getElementById("li2").innerHTML=obj.record[1];
        else
            document.getElementById("li2").innerHTML="(没有记录）";
        if(obj.record[2]!=null)
            document.getElementById("li3").innerHTML=obj.record[2];
        else
            document.getElementById("li3").innerHTML="(没有记录）";
        if(obj.record[3]!=null)
            document.getElementById("li4").innerHTML=obj.record[3];
        else
            document.getElementById("li4").innerHTML="(没有记录）";
        if(obj.record[4]!=null)
            document.getElementById("li5").innerHTML=obj.record[5];
        else
            document.getElementById("li5").innerHTML="(没有记录）";
    }
}
function setToday()
{
    var date=new Date();
    var yearStr=String(date.getFullYear());
    var monthStr=String(date.getMonth()+1);
    var dateStr=String(date.getDate());
    if (monthStr.length == 1)   monthStr = '0' + monthStr;
    if (dateStr.length == 1) dateStr = '0' + dateStr;
    var str=yearStr+"-"+monthStr+"-"+dateStr;
    dateElement.value=str;
    today.innerHTML=dateElement.value;
    var obj=JSON.parse(localStorage.getItem(dateElement.value));
    setInnerHTML(obj);
}
</script> 

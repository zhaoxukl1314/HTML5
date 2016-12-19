var data;
var db = openDatabase('MyData', '', 'test Database', 102400);
function window_onload()
{
    var str = sessionStorage.getItem("saveData");    
    data =  JSON.parse(str);
    document.getElementById("tbxCode").value=data.Code;
    document.getElementById("tbxDate").value=data.Date;
    document.getElementById("tbxGoodsCode").value=data.GoodsCode;      
    document.getElementById("tbxBrandName").value=data.BrandName;
    document.getElementById("tbxNum").value=data.Num;
    document.getElementById("tbxPrice").value=data.Price;
    document.getElementById("tbxMoney").value=data.Money;
    document.getElementById("tbxPersonName").value=data.PersonName;
    document.getElementById("tbxEmail").value=data.Email;
    document.getElementById("tbxCode").setAttribute("readonly",true);
}
function tbxNum_onblur()
{
    var num,price;
    num=parseInt(document.getElementById("tbxNum").value);
    price=parseFloat(document.getElementById("tbxPrice").value);
    if (isNaN(num*price))
    {
        document.getElementById("tbxNum").value="0";
        document.getElementById("tbxMoney").value="0";
    }
    else
        document.getElementById("tbxMoney").value= num * price;
}

function tbxPrice_onblur()
{
    var num,price;
    num=parseInt(document.getElementById("tbxNum").value);
    price=parseFloat(document.getElementById("tbxPrice").value);
    
    if (isNaN(num*price))
    {
        document.getElementById("tbxPrice").value="0";
        document.getElementById("tbxMoney").value="0";
    }
    else
        document.getElementById("tbxMoney").value= num * price;
}
function btnUpdate_onclick()
{
    data.Code=document.getElementById("tbxCode").value;
    data.Date=document.getElementById("tbxDate").value;
    data.GoodsCode=document.getElementById("tbxGoodsCode").value;
    data.BrandName=document.getElementById("tbxBrandName").value;
    data.Num=document.getElementById("tbxNum").value;
    data.Price=document.getElementById("tbxPrice").value;
    data.PersonName=document.getElementById("tbxPersonName").value;
    data.Email=document.getElementById("tbxEmail").value;
    db.transaction(function(tx) 
    {  
        tx.executeSql('update orders set date=?,goodscode=?,brandName=?,num=?,price=?,personName=?,email=? where code=?',[data.Date,data.GoodsCode,data.BrandName,data.Num,data.Price,data.PersonName,data.Email,data.Code],  
        function(tx, rs) 
        {  
            alert("成功修改数据!");
        },  
        function(tx, error) 
        {  
            alert(error.source + "::" + error.message);  
        });  
    });   
}
function btnDelete_onclick()
{
    data.Code=document.getElementById("tbxCode").value;
    db.transaction(function(tx) 
    {  
        tx.executeSql('delete from orders where code=?',[data.Code],  
        function(tx, rs) 
        {  
            alert("成功删除数据!");
            btnReturn_onclick();
        },  
        function(tx, error) 
        {  
            alert(error.source + "::" + error.message);  
        });  
    });
}
function btnClear_onclick()
{
    document.getElementById("tbxDate").value="";
    document.getElementById("tbxGoodsCode").value="";      
    document.getElementById("tbxBrandName").value="";
    document.getElementById("tbxNum").value="0";
    document.getElementById("tbxPrice").value="0";
    document.getElementById("tbxMoney").value="0";
    document.getElementById("tbxPersonName").value="";
    document.getElementById("tbxEmail").value="";
}
function btnReturn_onclick()
{
    sessionStorage.removeItem("saveData");
    window.location=setLocation();
}
function setLocation()
{
    var location=String(window.location);
    location=location.replace("edit","search");
    return location;
}
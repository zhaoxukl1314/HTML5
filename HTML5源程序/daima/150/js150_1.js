var data = new Object;
var datatable; 
var db = openDatabase('MyData', '', 'test Database', 102400);
function btnSearch_click()
{
    datatable= document.getElementById("datatable");
    data.Code=document.getElementById("tbxCode").value.trim();
    data.Date=document.getElementById("tbxDate").value.trim();
    data.GoodsCode=document.getElementById("tbxGoodsCode").value.trim();
    if(data.Code==""&&data.Date==""&&data.GoodsCode=="")
        alert("必须输入一个检索条件");
    else
        SearchData();
}
function SearchData() 
{  
    db.transaction(function(tx) 
    {  
        var sql;
        var params=new Array();
        sql="SELECT * FROM orders where 1=1";
        if(data.Code!="")
        {
            sql+=" and code=?";
            params.push(data.Code);
        }
        if(data.Date!="")
        {
            sql+=" and date=?";
            params.push(data.Date);
        }
        if(data.GoodsCode!="")
        {
            sql+=" and goodscode=?";
            params.push(data.GoodsCode);
        }
        tx.executeSql(sql,params, function(tx, rs) 
        {  
            removeAllData(); 
            for(var i = 0; i < rs.rows.length; i++) 
            {               
                showData(rs.rows.item(i),i);  
            }  
        },
        function(tx, error) 
        {  
            alert(error.source + "::" + error.message);  
        });  
    });   
}
function removeAllData()
{   
    datatable= document.getElementById("datatable"); 

    for (var i =datatable.childNodes.length-1; i>1; i--) 
    {  
        datatable.removeChild(datatable.childNodes[i]);  
    }  
}  
function showData(row,i) 
{ 
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');  
    td1.innerHTML = row.code;  
    var td2 = document.createElement('td');  
    td2.innerHTML = row.date;  
    var td3 = document.createElement('td');  
    td3.innerHTML = row.goodscode;   
    var td4 = document.createElement('td');  
    td4.innerHTML = row.brandName; 
    var td5 = document.createElement('td');  
    td5.innerHTML = row.num; 
    var td6 = document.createElement('td');  
    td6.innerHTML = row.price; 
    var td7 = document.createElement('td');  
    td7.innerHTML = parseInt(row.num)*parseFloat(row.price); 
    var td8 = document.createElement('td');  
    td8.innerHTML = row.personName; 
    var td9= document.createElement('td');  
    td9.innerHTML = row.email; 
    var td10= document.createElement('td');  
    var btnEdit=document.createElement('button');
    btnEdit.innerHTML="编辑";
    btnEdit.setAttribute("onclick","btnEdit_click(this)");
    td10.appendChild(btnEdit);
    tr.appendChild(td1);  
    tr.appendChild(td2);  
    tr.appendChild(td3);  
    tr.appendChild(td4); 
    tr.appendChild(td5); 
    tr.appendChild(td6); 
    tr.appendChild(td7); 
    tr.appendChild(td8);
    tr.appendChild(td9);
    tr.appendChild(td10);
    datatable.appendChild(tr);
}  
function btnEdit_click(btnEdit)
{
    var tr = btnEdit.parentElement.parentElement;
    data = new Object();
    data.Code=tr.cells[0].innerHTML;
    data.Date=tr.cells[1].innerHTML;
    data.GoodsCode=tr.cells[2].innerHTML;
    data.BrandName=tr.cells[3].innerHTML;
    data.Num=tr.cells[4].innerHTML;
    data.Price=tr.cells[5].innerHTML;
    data.Money=tr.cells[6].innerHTML;
    data.PersonName=tr.cells[7].innerHTML;
    data.Email=tr.cells[8].innerHTML;
    var str = JSON.stringify(data);
    sessionStorage.setItem("saveData",str);
    window.location=setLocation();
}
function setLocation()
{
    var location=String(window.location);
    location=location.replace("search","edit");
    return location;
}
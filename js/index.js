function saveInfo(){
    // customer inforfation
    var customerName=document.getElementById('customerName').value;
    var customerEmail= document.getElementById('customerEmail').value;
    var customerMobile= document.getElementById('customerMobile').value;
    var customerAddress= document.getElementById('customerAddress').value;
    // invoice information
    document.getElementById('customerInvoiceName').innerText=customerName;
    document.getElementById('customerInvoiceEmail').innerText=customerEmail;
    document.getElementById('customerInvoiceMobile').innerText=customerMobile;
    document.getElementById('customerInvoiceAddress').innerText=customerAddress;
}

// adding items
var productCount=1
function addItems(){
    var SerialNo=productCount++;
    // (productName.value!='') &&
    // product information
    var productName=document.getElementById('productName');
    var productPrice= document.getElementById('productPrice');
    var productQuantity= document.getElementById('productQuantity');
    console.log(Number(productName.value),typeof(productQuantity.value),Number(productPrice.value))
    
    if(((productPrice.value)===Number) ){
        console.log('ok');
    }
    
    var tableInfo= document.getElementById('tableInfo');
    var TotalPrice= Number(productQuantity.value)*Number(productPrice.value);
   

    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
    var td5=document.createElement('td');
    
    td5.classList.add('itemsTotal');
    td1.innerText=SerialNo;
    td2.innerText=productName.value;
    td4.innerText=productPrice.value;
    td3.innerText=productQuantity.value;
    td5.innerText=TotalPrice;

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tableInfo.appendChild(tr)

    
    var subTotal=calculateSubTotal();
    document.getElementById('subTotal').innerText=subTotal;
    var tax=document.getElementById('taxCalculation').innerText=parseFloat(subTotal*0.2);
    document.getElementById('grandTotal').innerText=(subTotal-tax);
   
}
    
function calculateSubTotal(){
    var itemsCost= document.getElementsByClassName('itemsTotal');
    var subTotal=0;
    for(let i=0; i<itemsCost.length;i++){
        subTotal+=parseFloat(itemsCost[i].innerText);
    } return subTotal;
        
}


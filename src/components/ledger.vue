<template>
<p id="test">73
</p>
<table id="inputs" >
    <tr>
        <td>Total</td>
        <td id="cellTotal"> </td>
    </tr>
    <tr><td>Income</td><td>Expenses</td></tr>
    <tr>
        <td id="cellIncome"><input type="text" id="inputIncome" value='' ></td> 
        <td><button style="text-align: center;" onclick="add();">+</button></td>

        <td id="cellExpense"><input type="text" id="inputExpense" value='' ></td>
        <td><button style="text-align: center;" onclick="minus();">-</button></td>
        
    </tr>

</table>
<br>
<div id="Container" style="display: flex;">
    
    
    <div >
   <table id="incomeTable">
    

   </table>
    </div>
    <div>
        <table  id="expensesTable">
    
        </table>
        </div>
</div>

</template>

<script>
 var total=0;
    var tableIncome="<tr><td>Income</td></tr>";
    var tableExpense="<tr><td>Expenses</td></tr>";
    
function add (){
    
   var income=document.getElementById("inputIncome").value;
    income=parseFloat(income);
   
   getTotal(income);
   
}
function minus () {
   var expenses=document.getElementById("inputExpense").value;
    expenses=parseFloat(expenses);
   
   getTotal(-1*expenses)
    
   

}
function getTotal (money){
    total=parseFloat(total);
    total+=money;
   
   document.getElementById("cellTotal").innerHTML=total.toFixed(2);
   tableGenerator(money);
}

function tableGenerator(aInput){


if(aInput>0){
    tableIncome+="<tr><td>"+aInput+"</td></tr>"
    document.getElementById("incomeTable").innerHTML=tableIncome;
   

} 
else{
    

    tableExpense+="<tr><td>"+aInput+"</td></tr>"
document.getElementById("expensesTable").innerHTML=tableExpense;
}
}
</script>
<style scoped>

</style>
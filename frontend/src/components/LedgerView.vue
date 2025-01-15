<template>
    <!DOCTYPE html>
    <html>
      <head>
        <title>Income and Expense Tracker</title>
      </head>
      <body>
        <p id="test">59</p>
        <table id="inputs">
          <tr>
            <td>Total</td>
            <td id="cellTotal"></td>
          </tr>
          <tr>
            <td>Income</td>
            <td>Expenses</td>
          </tr>
          <tr>
            <td id="cellIncome">
              <input type="text" id="inputIncome" value="" />
            </td>
            <td>
              <button style="text-align: center;" onclick="add();">+</button>
            </td>
            <td id="cellExpense">
              <input type="text" id="inputExpense" value="" />
            </td>
            <td>
              <button style="text-align: center;" onclick="minus();">-</button>
            </td>
          </tr>
        </table>
        <br />
        <div id="table"></div>
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
        <table>
          <td>A</td>
          <td>B</td>
          <td>C</td>
        </table>
      </body>
    </html>
  </template>
  
  <script>
  export default {
    name: 'LedgerView',
    mounted() {
      var total = 0;
      var table = "";
      //var prevNeg = false;
      //var prevCell = "";
  
      window.add = function () {
        var income = document.getElementById("inputIncome").value;
        income = parseFloat(income);
  
        getTotal(income);
      };
  
      window.minus = function () {
        var expenses = document.getElementById("inputExpense").value;
        expenses = parseFloat(expenses);
  
        getTotal(-1 * expenses);
      };
  
      function getTotal(money) {
        total = parseFloat(total);
        total += money;
  
        document.getElementById("cellTotal").innerHTML = total.toFixed(2);
        tableGenerator(money);
      }
  
      function tableGenerator(aInput) {
        var output;
        var line;
        if (aInput < 0) {
          line =
            "<td  style='border-style:solid;' > <td>" +
            "<td style='border-style:solid;'>" +
            aInput +
            "</td>";
        } else {
          line =
            "<td style='border-style:solid;'>" +
            aInput +
            "</td>" +
            "<td  style='border-style:solid;' colspan='2'> </td>";
        }
        table += "<tr>" + line + "</tr>";
        output = "<table >" + table + "</table>";
        document.getElementById("table").innerHTML = output;
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if needed */
  </style>
  
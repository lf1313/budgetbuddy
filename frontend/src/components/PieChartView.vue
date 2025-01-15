<template>
    <div>
      <h1 style="text-align: center;">Financial Tracker</h1>
  
      <!-- Form Container (arranges all forms horizontally) -->
      <div class="form-container">
        
        <!-- Income Section -->
        <section class="input-section">
          <h2>Add Income Source</h2>
          <form @submit.prevent="addIncome">
            <div class="form-row">
              <label>Source:</label>
              <input type="text" v-model="incomeSource" placeholder="e.g., Salary" required>
            </div>
            <div class="form-row">
              <label>Amount:</label>
              <input type="number" v-model.number="incomeAmount" placeholder="e.g., 5000" required>
            </div>
            <button type="submit" class="add-button income-button">Add Income</button>
          </form>
        </section>
  
        <!-- Planned Budget Section -->
        <section class="input-section">
          <h2>Add to Planned Budget</h2>
          <form @submit.prevent="addBudget">
            <div class="form-row">
              <label>Category:</label>
              <input type="text" v-model="budgetCategory" placeholder="e.g., Savings" required>
            </div>
            <div class="form-row">
              <label>Amount:</label>
              <input type="number" v-model.number="budgetAmount" placeholder="e.g., 2000" required>
            </div>
            <button type="submit" class="add-button budget-button">Add to Planned Budget</button>
          </form>
        </section>
  
        <!-- Expense Section -->
        <section class="input-section">
          <h2>Add Expense Category</h2>
          <form @submit.prevent="addExpense">
            <div class="form-row">
              <label>Category:</label>
              <input type="text" v-model="expenseCategory" placeholder="e.g., Rent" required>
            </div>
            <div class="form-row">
              <label>Amount:</label>
              <input type="number" v-model.number="expenseAmount" placeholder="e.g., 1500" required>
            </div>
            <button type="submit" class="add-button expense-button">Add Expense</button>
          </form>
        </section>
  
      </div>
  
      <!-- Chart Container (arranges all charts horizontally) -->
      <div class="chart-container">
        <!-- Income Breakdown Chart -->
        <div class="chart-wrapper">
          <h2>Income Breakdown</h2>
          <canvas ref="incomeChart"></canvas>
        </div>
  
        <!-- Overall Budget Chart (center and larger) -->
        <div class="chart-wrapper">
          <h2>Planned Budget</h2>
          <canvas ref="overallBudgetChart"></canvas>
        </div>
  
        <!-- Expenses Breakdown Chart -->
        <div class="chart-wrapper">
          <h2>Expenses Breakdown</h2>
          <canvas ref="expenseChart"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    name: "PieChartView",
    data() {
      return {
        incomeSource: '',
        incomeAmount: null,
        budgetCategory: '',
        budgetAmount: null,
        expenseCategory: '',
        expenseAmount: null,
        budgetData: { categories: [], amounts: [] },
        incomeData: { sources: [], amounts: [] },
        expenseData: { categories: [], amounts: [] },
        budgetChart: null,
        incomeChart: null,
        expenseChart: null
      };
    },
    mounted() {
      this.budgetChart = this.createChart(this.$refs.overallBudgetChart, this.budgetData.categories, this.budgetData.amounts);
      this.incomeChart = this.createChart(this.$refs.incomeChart, this.incomeData.sources, this.incomeData.amounts);
      this.expenseChart = this.createChart(this.$refs.expenseChart, this.expenseData.categories, this.expenseData.amounts);
    },
    methods: {
      createChart(ctx, labels, data) {
        return new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              }
            }
          }
        });
      },
      updateChart(chart, labels, data) {
        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.update();
      },
      addBudget() {
        if (this.budgetCategory && this.budgetAmount > 0) {
          this.budgetData.categories.push(this.budgetCategory);
          this.budgetData.amounts.push(this.budgetAmount);
          this.updateChart(this.budgetChart, this.budgetData.categories, this.budgetData.amounts);
          this.budgetCategory = '';
          this.budgetAmount = null;
        }
      },
      addIncome() {
        if (this.incomeSource && this.incomeAmount > 0) {
          this.incomeData.sources.push(this.incomeSource);
          this.incomeData.amounts.push(this.incomeAmount);
          this.updateChart(this.incomeChart, this.incomeData.sources, this.incomeData.amounts);
          this.incomeSource = '';
          this.incomeAmount = null;
        }
      },
      addExpense() {
        if (this.expenseCategory && this.expenseAmount > 0) {
          this.expenseData.categories.push(this.expenseCategory);
          this.expenseData.amounts.push(this.expenseAmount);
          this.updateChart(this.expenseChart, this.expenseData.categories, this.expenseData.amounts);
          this.expenseCategory = '';
          this.expenseAmount = null;
        }
      }
    }
  };
  </script>
  
  <style>
  .form-container {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  .input-section {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .add-button {
    padding: 8px;
    font-size: 1em;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
  }
  .income-button { background-color: #a3d8f4; }
  .budget-button { background-color: #b3f4a3; }
  .expense-button { background-color: #f4a3a3; }
  .chart-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  .chart-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
  }
  #overallBudgetChart {
    width: 100%;
    height: 400px;
  }
  #incomeChart, #expenseChart {
    width: 100%;
    height: 250px;
  }
  </style>
  
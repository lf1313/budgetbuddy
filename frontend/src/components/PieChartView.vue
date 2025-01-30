<template>
  <div>
    <!-- Form Containers for adding income, budget, and expense -->
    <div class="form-container">
      <section class="input-section">
        <h2>Add Income Source</h2>
        <form @submit.prevent="addIncome">
          <div class="form-row">
            <label>Source:</label>
            <input type="text" v-model="incomeSource" placeholder="e.g., Salary" required />
          </div>
          <div class="form-row">
            <label>Amount:</label>
            <input type="number" v-model.number="incomeAmount" placeholder="e.g., 5000" required />
          </div>
          <button type="submit" class="add-button income-button">Add Income</button>
        </form>
      </section>

      <section class="input-section">
        <h2>Add to Planned Budget</h2>
        <form @submit.prevent="addBudget">
          <div class="form-row">
            <label>Category:</label>
            <input type="text" v-model="budgetCategory" placeholder="e.g., Savings" required />
          </div>
          <div class="form-row">
            <label>Amount:</label>
            <input type="number" v-model.number="budgetAmount" placeholder="e.g., 2000" required />
          </div>
          <button type="submit" class="add-button budget-button">Add to Planned Budget</button>
        </form>
      </section>

      <section class="input-section">
        <h2>Add Expense Category</h2>
        <form @submit.prevent="addExpense">
          <div class="form-row">
            <label>Category:</label>
            <input type="text" v-model="expenseCategory" placeholder="e.g., Rent" required />
          </div>
          <div class="form-row">
            <label>Amount:</label>
            <input type="number" v-model.number="expenseAmount" placeholder="e.g., 1500" required />
          </div>
          <button type="submit" class="add-button expense-button">Add Expense</button>
        </form>
      </section>
    </div>

    <!-- Pie Chart Containers for Income, Budget, and Expense -->
    <div class="charts-wrapper">
      <section class="chart-section">
        <h3>Income Distribution</h3>
        <div class="chart-wrapper">
          <canvas ref="incomeChart"></canvas>
        </div>
      </section>

      <section class="chart-section">
        <h3>Budget Distribution</h3>
        <div class="chart-wrapper">
          <canvas ref="overallBudgetChart"></canvas>
        </div>
      </section>

      <section class="chart-section">
        <h3>Expense Distribution</h3>
        <div class="chart-wrapper">
          <canvas ref="expenseChart"></canvas>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import Chart from "chart.js/auto";

export default {
  name: "PieChartView",
  data() {
    return {
      incomeSource: "",
      incomeAmount: null,
      budgetCategory: "",
      budgetAmount: null,
      expenseCategory: "",
      expenseAmount: null,
      budgetData: { categories: [], amounts: [] },
      incomeData: { sources: [], amounts: [] },
      expenseData: { categories: [], amounts: [] },
      budgetChart: null,
      incomeChart: null,
      expenseChart: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeCharts();
      this.resizeCharts();  // Ensure the charts resize correctly after mounting
    });
    window.addEventListener("resize", this.resizeCharts); // Listen for resize events
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeCharts); // Clean up the resize listener
  },
  methods: {
    initializeCharts() {
      const incomeCtx = this.$refs.incomeChart?.getContext("2d");
      const budgetCtx = this.$refs.overallBudgetChart?.getContext("2d");
      const expenseCtx = this.$refs.expenseChart?.getContext("2d");

      if (incomeCtx && !this.incomeChart) {
        this.incomeChart = this.createChart(incomeCtx, this.incomeData.sources, this.incomeData.amounts);
      }

      if (budgetCtx && !this.budgetChart) {
        this.budgetChart = this.createChart(budgetCtx, this.budgetData.categories, this.budgetData.amounts);
      }

      if (expenseCtx && !this.expenseChart) {
        this.expenseChart = this.createChart(expenseCtx, this.expenseData.categories, this.expenseData.amounts);
      }
    },

    createChart(ctx, labels, data) {
      if (!ctx) {
        console.error("Canvas context is undefined.");
        return null;
      }

      try {
        return new Chart(ctx, {
          type: "pie",
          data: {
            labels: [...labels],
            datasets: [
              {
                data: [...data],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 206, 86, 0.5)",
                  "rgba(75, 192, 192, 0.5)",
                  "rgba(153, 102, 255, 0.5)",
                  "rgba(255, 159, 64, 0.5)",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          },
        });
      } catch (error) {
        console.error("Error creating chart:", error);
        return null;
      }
    },

    resizeCharts() {
      // Manually resize the charts after mounting or when window is resized
      if (this.incomeChart) this.incomeChart.resize();
      if (this.budgetChart) this.budgetChart.resize();
      if (this.expenseChart) this.expenseChart.resize();
    },

    updateChart(chart, labels, data) {
      if (!chart) {
        console.warn("Chart instance is undefined.");
        return;
      }

      try {
        chart.data.labels = [...labels];
        chart.data.datasets[0].data = [...data];
        chart.update();
      } catch (error) {
        console.error("Error updating chart:", error);
      }
    },

    addIncome() {
      if (this.incomeSource && this.incomeAmount > 0) {
        const newSource = this.incomeSource;
        const newAmount = this.incomeAmount;
        this.incomeData.sources.push(newSource);
        this.incomeData.amounts.push(newAmount);
        this.updateChart(this.incomeChart, this.incomeData.sources, this.incomeData.amounts);
        this.incomeSource = "";
        this.incomeAmount = null;
      }
    },

    addBudget() {
      if (this.budgetCategory && this.budgetAmount > 0) {
        const newCategory = this.budgetCategory;
        const newAmount = this.budgetAmount;
        this.budgetData.categories.push(newCategory);
        this.budgetData.amounts.push(newAmount);
        this.updateChart(this.budgetChart, this.budgetData.categories, this.budgetData.amounts);
        this.budgetCategory = "";
        this.budgetAmount = null;
      }
    },

    addExpense() {
      if (this.expenseCategory && this.expenseAmount > 0) {
        const newCategory = this.expenseCategory;
        const newAmount = this.expenseAmount;
        this.expenseData.categories.push(newCategory);
        this.expenseData.amounts.push(newAmount);
        this.updateChart(this.expenseChart, this.expenseData.categories, this.expenseData.amounts);
        this.expenseCategory = "";
        this.expenseAmount = null;
      }
    },
  },
};
</script>

<style>
/* Form container */
.form-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

/* Each input section styling */
.input-section {
  width: 30%;
  text-align: center;
}

.form-row {
  margin: 10px 0;
}

/* Styling the section that contains pie charts */
.charts-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 40px;
  padding-top: 20px;
}

/* Styling each individual chart wrapper */
.chart-section {
  width: 30%;  /* Adjust this width if necessary */
  text-align: center; /* To center the chart title */
  margin-bottom: 40px; /* Add spacing below charts */
}

.chart-wrapper {
  width: 100%; /* Make sure each chart takes the full width of the section */
  min-height: 250px;
  position: relative;
  padding: 10px;
  margin-top: 10px; /* Reduced margin-top for better alignment */
}

/* Canvas Styling */
canvas {
  max-width: 100%;
  max-height: 100%;
}
</style>
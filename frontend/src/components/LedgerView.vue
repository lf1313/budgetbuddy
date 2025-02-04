<template>
  <div class="container mt-4">
    <h2 class="text-center w-100 mb-4">Income and Expense Tracker </h2>

    <!-- Total Balance Display -->
    <div class="row w-100">
      <div class="col text-center">
        <h4>Total Balance: <span class="fw-bold">€{{ total.toFixed(2) }}</span></h4>
      </div>
    </div>

    <!-- Income & Expense Input Section --> 
    <div class="row w-100 mt-4">
      <!-- Income Section -->
      <div class="col-md-6">
        <h4 class="text-success text-center">Income</h4>
        <div class="input-group mb-3">
          <input v-model.number="income" type="number" class="form-control" placeholder="Enter income" />
          <button @click="addIncome" class="btn btn-success">+</button>
        </div>

        <!-- Income Transactions -->
        <ul class="list-group">
          <li v-for="(entry, index) in incomeTransactions" :key="index" class="list-group-item text-success">
            <span>Income</span> <span class="fw-bold">€{{ entry.toFixed(2) }}</span>
          </li>
        </ul>
      </div>

      <!-- Expense Section -->
      <div class="col-md-6">
        <h4 class="text-danger text-center">Expenses</h4>
        <div class="input-group mb-3">
          <input v-model.number="expense" type="number" class="form-control" placeholder="Enter expense" />
          <button @click="addExpense" class="btn btn-danger">-</button>
        </div>

        <!-- Expense Transactions -->
        <ul class="list-group">
          <li v-for="(entry, index) in expenseTransactions" :key="index" class="list-group-item text-danger">
            <span>Expense</span> <span class="fw-bold">€{{ entry.toFixed(2) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LedgerView",
  data() {
    return {
      total: 0,
      income: 0,
      expense: 0,
      transactions: [], // Stores both income (+ve) and expenses (-ve)
    };
  },
  computed: {
    incomeTransactions() {
      return this.transactions.filter((transaction) => transaction > 0);
    },
    expenseTransactions() {
      return this.transactions.filter((transaction) => transaction < 0);
    },
  },
  methods: {
    addIncome() {
      if (!this.income) return;
      this.total += this.income;
      this.transactions.push(this.income);
      this.income = 0;
    },
    addExpense() {
      if (!this.expense) return;
      this.total -= this.expense;
      this.transactions.push(-this.expense);
      this.expense = 0;
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 1.5rem;
}
.list-group-item {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
}

.container {

  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns items at the top vertically */
  justify-content: centre !important; /* Centers items horizontally */
  min-height: 100 vh;
  min-width: 100vh;
 
}

</style>

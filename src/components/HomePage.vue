<template>
  <div>
    <h1>Welcome to BudgetBuddy</h1>
    <p>The go-to tool for managing expenses, tracking spending, and stretching your student budget further!</p>

    <nav>
      <ul>
        <li><a href="expenses.html">Expenses Table</a></li>
        <li><a href="piechart.html">Pie Chart Summary</a></li>
        <li><a href="contact.html">Feedback / Contact Us</a></li>
      </ul>
    </nav>

    <div>
      <h3>Better budgeting, less stress</h3>
      <p>From rent and tuition to groceries and nights out, we've got you covered.</p>
      <p>Use our tools to track where your money goes and set yourself up for financial success during college.</p>
      <button @click="showWelcomeMessage">Get Started</button>
      <div>{{ welcomeMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetBuddy',
  data() {
    return {
      welcomeMessage: ''
    };
  },
  methods: {
    showWelcomeMessage() {
      this.welcomeMessage = "Let's go!";
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>

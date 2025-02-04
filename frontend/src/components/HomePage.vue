
<template>
  <div>

    

    <nav>
      <ul>
        <li><router-link to="/view-ledger">Expenses Table</router-link></li>
        <li><router-link to="/pie-chart">Pie Chart Summary</router-link></li>
        <li><router-link to="/contact-us">Feedback / Contact Us</router-link></li>
      </ul>
    </nav>

    <div class="content">
      <h3>Better budgeting, less stress</h3>
      <p>From rent and tuition to groceries and nights out, we've got you covered.</p>
      <p>Use our tools to track where your money goes and set yourself up for financial success during college.</p>
      <button @click="showWelcomeMessage">Get Started</button>
      <div class="message">{{ welcomeMessage }}</div>
      <img :src="require('@/images/money.jpeg')" alt="Money and Bank Statement" class="money-image">
    </div>

    <div class="cta">
      <h2>Why Choose BudgetBuddy?</h2>
      <div class="cta-items">
        <div class="cta-item">
          <span class="material-icons">assignment</span>
          <p>Track your expenses easily and efficiently.</p>
        </div>
        <div class="cta-item">
          <span class="material-icons">savings</span>
          <p>Save more money with smart budgeting tools.</p>
        </div>
        <div class="cta-item">
          <span class="material-icons">flag</span>
          <p>Set financial goals and achieve them faster.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      welcomeMessage: ""
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
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

header {
  background-color: #5a8dec;
  color: white;
  padding: 20px;
  text-align: center;
}
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}
nav ul li {
  display: inline;
}
nav a {
  text-decoration: none;
  color: #357def;
  font-weight: bold;
}
.content {
  text-align: center;
  padding: 20px;
}
button {
  background-color: #44a1e3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #28506e;
}
.message {
  margin-top: 10px;
  font-weight: bold;
}
.money-image {
  display: block;
  margin: 20px auto;
  width: 500px;  /* Fixed width */
  height: 400px; /* Fixed height */
  object-fit: cover; /* Ensure the image fits within these dimensions without distortion */
  border-radius: 10px;
}

.cta {
  text-align: center;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 800px;
}
.cta-items {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
.cta-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.cta-item .material-icons {
  font-size: 40px;
  color: #47a1d2;
}
</style>
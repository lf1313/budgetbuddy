<template>
  <div>
    <header>
    </header>
    <h2>Contact Us / Feedback Form</h2>
    <form @submit.prevent="submitFeedback">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" rows="4" required></textarea>

      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitFeedback() {
      // Handle form submission here (e.g., send data to server)
      console.log("Form Submitted:", this.form);
      // Reset form fields after submission
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
      alert("Thank you for your feedback!");
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}
input[type="submit"] {
  background-color: #6895c6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #89b9f3;
}
</style>

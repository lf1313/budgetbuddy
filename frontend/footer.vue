<template>
  <footer class="footer">
    <div class="container">
      <p>&copy;  Budget Buddy {{ new Date().getFullYear() }}</p>
      
    </div>
    <!-- Social Media Icons -->
      <div class="social-icons">
        <a href="https://facebook.com" target="_blank" >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" >
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://snapchat.com" target="_blank" >
          <i class="fa-brands fa-snapchat"></i>
        </a>
      </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  mounted() {
    //Load fontawesome icons (dynamically)
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/2860a3b46f.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
.footer {
  background-color: #008ECC;
  color: white;
  text-align: center;
  padding: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
.footer nav a:hover {
  text-decoration: underline;
}
.social-icons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.social-icons a {
  color: white;
  font-size: 1.8rem;
  transition: color 0.3s ease;
}
.social-icons a:hover {
  color: #ffcc00; /* Change color on hover */
}

</style>

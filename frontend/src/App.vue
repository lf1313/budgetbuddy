<template>
  <div id="app">
    <header class="bg-primary text-white p-3 text-center">
      <h1>Budget Buddy</h1>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">HomePage</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/view-ledger" class="nav-link">Ledger</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pie-chart" class="nav-link">Pie Chart</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact-us" class="nav-link">Contact Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog-post" class="nav-link">Blog Post</router-link>
        </li>
      </ul>
    </nav>

    <!-- Main page content is displayed here -->
    <router-view />

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script>
// Import Footer Component
import FooterComponent from './components/FooterCode.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

#app {
  padding-bottom: 60px;
}
</style>


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
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>


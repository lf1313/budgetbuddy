import { createApp } from 'vue'; 
import App from './App.vue'; 
import router from './router.js'; 


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles.css';  // Import the global styles

 
createApp(App)
  .use(router) 
  .mount('#app');


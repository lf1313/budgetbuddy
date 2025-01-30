import { createRouter, createWebHistory } from 'vue-router';  // For Vue 3
import HomePage from './components/HomePage.vue';
import PieChart from './components/PieChartView.vue';
import ContactUs from './components/SWEContactUs.vue';
import Ledger from './components/LedgerView.vue';
import BlogPost from './components/BlogPost.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/view-ledger', component: Ledger },
  { path: '/contact-us', component: ContactUs },
  { path: '/pie-chart', component: PieChart },
  { path: '/blog-post', component: BlogPost}
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;


import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/index.css'

// Pages
import HomePage from './pages/HomePage.vue'
import ComplianceDashboardPage from './pages/ComplianceDashboardPage.vue';
import CollectionsWorkflowPage from './pages/CollectionsWorkflowPage.vue';
import VirtualNumbersPage from './pages/VirtualNumbersPage.vue';
import ContactPage from './pages/ContactPage.vue';

// Routes
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: '/activity-dashboard', name: 'Compliance Dashboard', component: ComplianceDashboardPage },
  { path: '/collections-escalation-workflow', name: 'Collections Escalation Workflow', component: CollectionsWorkflowPage},
  { path: '/virtual-numbers', name: 'Virtual Numbers Database', component: VirtualNumbersPage},
  { path: '/contact', name: 'Contact', component: ContactPage }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // offset for fixed navbar
      }
    }
    return { top: 0 }
  }
});

const app = createApp(App);
app.use(router);
app.mount("#app");

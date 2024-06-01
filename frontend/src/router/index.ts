// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
//import Policies from '../pages/Policies.vue'
//import Clients from '../pages/Clients.vue'
//import Commissions from '../pages/Commissions.vue'
//import Terms from '../pages/Terms.vue'
//import Privacy from '../pages/Privacy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  // { path: '/policies', component: Policies },
  // { path: '/clients', component: Clients },
  //{ path: '/commissions', component: Commissions },
  //{ path: '/terms', component: Terms },
  //{ path: '/privacy', component: Privacy }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

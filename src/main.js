import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

// Import views
import Home from './views/Home.vue'
import PayStructure from './views/PayStructure.vue'
import Expectations from './views/Expectations.vue'
import ToolsTechnology from './views/ToolsTechnology.vue'
import Interface from './views/Interface.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/pay-structure', component: PayStructure },
  { path: '/expectations', component: Expectations },
  { path: '/tools-technology', component: ToolsTechnology },
  { path: '/interface', component: Interface }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

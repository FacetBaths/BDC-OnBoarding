import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/en-US'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'

// Import views
import Home from './views/Home.vue'
import PayStructure from './views/PayStructure.vue'
import Expectations from './views/Expectations.vue'
import ToolsTechnology from './views/ToolsTechnology.vue'
import Interface from './views/Interface.vue'

// Training components
import BdcWordtrax from './views/training/BdcWordtrax.vue'
import AppointmentChecklist from './views/training/AppointmentChecklist.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/pay-structure', component: PayStructure },
  { path: '/expectations', component: Expectations },
  { path: '/tools-technology', component: ToolsTechnology },
  { path: '/interface', component: Interface },
  { path: '/training/bdc-wordtrax', component: BdcWordtrax },
  { path: '/training/appt-checklist', component: AppointmentChecklist }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Set base title based on current route
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/training')) {
    document.title = 'BDC Training - Facet Renovations'
  } else {
    document.title = 'BDC Onboarding - Facet Renovations'
  }
  next()
})

const app = createApp(App)
app.use(router)
app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
  iconSet: quasarIconSet
})
app.mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MaterialProcurementWorkflow from './MaterialProcurementWorkflow.vue'
import ErpDataTranslation from './ErpDataTranslation.vue'
import PromotionsAuthoringSystem from './PromotionsAuthoringSystem.vue'
import HomeView from './HomeView.vue'
import './style.css'

if (window.location.search.startsWith('?/')) {
  const route = window.location.search
    .slice(2)
    .split('&')[0]
    .replace(/~and~/g, '&')

  window.history.replaceState(
    null,
    '',
    `${import.meta.env.BASE_URL}${route}${window.location.hash}`,
  )
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: { title: 'Yukie Kushibiki — Frontend Designer / Developer' },
    },
    {
      path: '/case-studies/material-procurement-workflow',
      component: MaterialProcurementWorkflow,
      meta: { title: 'Material Procurement Table — Yukie Kushibiki' },
    },
    {
      path: '/case-studies/self-service-erp-data-translation',
      component: ErpDataTranslation,
      meta: { title: 'Self-Service ERP Data Translation — Yukie Kushibiki' },
    },
    {
      path: '/case-studies/promotions-authoring-system',
      component: PromotionsAuthoringSystem,
      meta: { title: 'Promotions Authoring System — Yukie Kushibiki' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Yukie Kushibiki'
})

createApp(App).use(router).mount('#app')

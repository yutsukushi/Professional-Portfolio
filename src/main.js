import { createApp } from 'vue'
import App from './App.vue'
import MaterialProcurementWorkflow from './MaterialProcurementWorkflow.vue'
import ErpDataTranslation from './ErpDataTranslation.vue'
import './style.css'

const page = window.location.pathname.endsWith('material-procurement-workflow.html')
  ? MaterialProcurementWorkflow
  : window.location.pathname.endsWith('self-service-erp-data-translation.html')
    ? ErpDataTranslation
    : App

createApp(page).mount('#app')

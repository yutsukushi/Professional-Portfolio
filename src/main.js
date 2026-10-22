import { createApp } from 'vue'
import App from './App.vue'
import MaterialProcurementWorkflow from './MaterialProcurementWorkflow.vue'
import './style.css'

const page = window.location.pathname.endsWith('material-procurement-workflow.html')
  ? MaterialProcurementWorkflow
  : App

createApp(page).mount('#app')

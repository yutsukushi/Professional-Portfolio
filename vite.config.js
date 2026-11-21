import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        portfolio: resolve(process.cwd(), 'index.html'),
        materialProcurementWorkflow: resolve(
          process.cwd(),
          'case-studies/material-procurement-workflow.html',
        ),
        erpDataTranslation: resolve(
          process.cwd(),
          'case-studies/self-service-erp-data-translation.html',
        ),
        promotionsAuthoringSystem: resolve(
          process.cwd(),
          'case-studies/promotions-authoring-system.html',
        ),
      },
    },
  },
})

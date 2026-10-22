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
          'material-procurement-workflow.html',
        ),
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    watch: {
      ignored: ['**/public/assets/video/**', '**/*.mp4', '**/*.pdf', '**/*.ai'],
    },
  },
})

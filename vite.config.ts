import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  // Vite automatically handles .env variables with VITE_ prefix
})
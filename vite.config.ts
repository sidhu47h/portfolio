import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  build: {
    // Make source code more readable in production for debugging
    minify: false,
    // Ensure inlined constants are preserved
    sourcemap: true,
  }
})
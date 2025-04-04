import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  define: {
    // Make environment variables available at build time
    // These will be replaced with actual values during build
    'process.env.VITE_EMAILJS_SERVICE_ID': 
      JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
    'process.env.VITE_EMAILJS_TEMPLATE_ID': 
      JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID),
    'process.env.VITE_EMAILJS_PUBLIC_KEY': 
      JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY)
  }
})

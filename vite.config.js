import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["localhost", "oleksandrvorona.tech", "www.oleksandrvorona.tech"],
  },
  plugins: [react()],
})

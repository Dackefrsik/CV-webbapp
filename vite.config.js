import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Detta gör servern tillgänglig på alla nätverksinterfaces
    port: 5173,        // Om du vill kan du specificera porten här
  },
  base: '/CV-webbapp/'
})


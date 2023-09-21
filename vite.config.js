import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

const env = loadEnv("development", process.cwd(),'VITE')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: env.VITE_HOST_FRONT,
    port: env.VITE_PORT_FRONT
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ricardorhv.github.io/analytic-geometry-website/",
  build: {
    outDir: 'build'
  }
})

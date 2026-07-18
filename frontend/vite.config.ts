import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the static build can be hosted from any path/subdirectory.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})

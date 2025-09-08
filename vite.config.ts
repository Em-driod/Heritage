import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  appType: 'spa',
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname(fileURLToPath(import.meta.url)), 'index.html'),
        // Add other entry points if needed
      },
    },
  },
})
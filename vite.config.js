import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        discografia: resolve(__dirname, 'discografia.html'),
        gira: resolve(__dirname, 'gira.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        avisoLegal: resolve(__dirname, 'aviso-legal.html')
      }
    }
  }
})

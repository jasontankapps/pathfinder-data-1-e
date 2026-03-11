/// <reference types="vitest/config" />
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({babel: {configFile: true}}),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: { maximumFileSizeToCacheInBytes: 4000000 }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  build: {
    chunkSizeWarningLimit: 750,
  }
})

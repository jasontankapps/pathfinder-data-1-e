/// <reference types="vitest/config" />
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ babel: { configFile: true } }),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: { maximumFileSizeToCacheInBytes: 4000000 },
      manifest: {
        "short_name": "Pf Data 1e",
        "name": "Pf Data 1e",
        icons: [
          {
            "purpose": "monochrome",
            "sizes": "1536x1536",
            "src": "display/icon-foreground.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "1807.0588235294117x1807.0588235294117",
            "src": "display/maskable_icon.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "48x48",
            "src": "display/maskable_icon_x48.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "72x72",
            "src": "display/maskable_icon_x72.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "96x96",
            "src": "display/maskable_icon_x96.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "128x128",
            "src": "display/maskable_icon_x128.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "192x192",
            "src": "display/maskable_icon_x192.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "384x384",
            "src": "display/maskable_icon_x384.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "512x512",
            "src": "display/maskable_icon_x512.png",
            "type": "image/png"
          }
        ]
      },
      includeAssets: [
        "_GEN_fuseIndex.json",
        "_GEN_fuse-translated_data.json",
        "fonts/Taviraj-Regular.woff2",
        "fonts/Taviraj-Bold.woff2",
        "fonts/Taviraj-Italic.woff2",
        "fonts/Taviraj-BoldItalic.woff2",
        "fonts/Symbola-v3.woff",
        "icons/page-divider.svg",
        "icons/swipe-left.svg",
        "icons/find-in-page.svg",
        "icons/overlap.svg",
        "icons/aura.svg",
        "icons/ancient-sword.svg",
        "icons/armor-downgrade.svg",
        "icons/armor-upgrade.svg",
        "icons/barbed-arrow.svg",
        "icons/bowman.svg",
        "icons/broken-shield.svg",
        "icons/confirmed.svg",
        "icons/death-note.svg",
        "icons/elephant.svg",
        "icons/ghost.svg",
        "icons/hazard-sign.svg",
        "icons/remedy.svg",
        "icons/infested-mass.svg",
        "icons/info.svg",
        "icons/input.svg",
        "icons/magic-palm.svg",
        "icons/magic-swirl.svg",
        "icons/mailed-fist.svg",
        "icons/paramecia.svg",
        "icons/poison-bottle.svg",
        "icons/rolling-dices.svg",
        "icons/shield-bash.svg",
        "icons/shield-reflect.svg",
        "icons/skills.svg",
        "icons/smoking-finger.svg",
        "icons/stairs-goal.svg",
        "icons/syringe.svg",
        "icons/tornado-discs.svg",
        "icons/tumor.svg",
        "icons/upgrade.svg",
        "icons/wolf-trap.svg",
        "icons/battle-gear.svg",
        "icons/bolt-eye.svg",
        "icons/croc-jaws.svg",
        "icons/mighty-force.svg",
        "icons/magic-shield.svg",
        "icons/person.svg",
        "icons/read.svg",
        "icons/robe.svg",
        "icons/sparkles.svg",
        "icons/spell-book.svg",
        "icons/spikes-half.svg",
        "_SOURCE_group1.json",
        "_SOURCE_group2.json",
        "_SOURCE_group3.json",
        "_SOURCE_group4.json",
        "_SOURCE_group5.json",
        "_SOURCE_group6.json"
      ]
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

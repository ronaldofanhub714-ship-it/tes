import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: { plugins: [{ name: 'removeViewBox', active: false }] }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Exotic Tesla Dealership',
        short_name: 'TeslaX',
        description: 'Luxury electric vehicles, curated for the premium market.',
        theme_color: '#1a202c',
        icons: [
          {
            src: 'vite.svg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  css: {
    postcss: { plugins: [require('autoprefixer')] }
  }
});
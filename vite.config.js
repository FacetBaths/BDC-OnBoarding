import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar()
  ],
  base: process.env.NODE_ENV === 'production' ? '/BDC-OnBoarding/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

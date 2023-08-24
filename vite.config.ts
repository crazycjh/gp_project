import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; // 添加這行來引入 path 模組

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gc_godpray_frontend/',
  plugins: [vue()],
  server: {
    port: 5174 
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})

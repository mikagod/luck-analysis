import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import path from 'path'; // 确保这里导入了 path 模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081, // 设置你想要的端口号
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})

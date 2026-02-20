import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 使用相对路径，兼容 GitHub Pages 项目站点的子路径（如 /catkathy.github.io/）
  base: './',
})

import { defineConfig } from 'electron-vite'

// fork: electron-vite 只认 electron.vite.config.*，仓库里的 electron-vite.config.ts 从未被加载。
// 这里只补一个非保留端口的 dev server；Windows 保留了 5141-5240，vite 默认 5173 会 EACCES。
export default defineConfig({
  renderer: {
    server: { port: 5300 }
  }
})

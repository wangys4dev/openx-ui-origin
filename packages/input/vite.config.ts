import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'OpenXUIInput',
      fileName: 'openx-ui-input',
    },
    minify: false,
    rollupOptions: {
      external: [/@openx-ui.*/, 'vue'],
    },
  },
})

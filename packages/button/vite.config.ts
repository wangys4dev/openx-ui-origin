import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'OpenXUIButton',
      fileName: 'openx-ui-button',
    },
    minify: false,
    rollupOptions: {
      external: [/@openx-ui.*/, 'vue'],
    },
  },
});

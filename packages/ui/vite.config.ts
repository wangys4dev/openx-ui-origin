import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'OpenXUI',
      fileName: 'openx-ui',
    },
    minify: false,
    rollupOptions: {
      external: [/@openx-ui.*/],
    },
  },
});

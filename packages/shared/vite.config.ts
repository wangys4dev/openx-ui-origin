import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'OpenXUIShared',
      fileName: 'openx-ui-shared',
    },
    minify: false,
    rollupOptions: {
      external: [/lodash.*/],
    },
  },
})

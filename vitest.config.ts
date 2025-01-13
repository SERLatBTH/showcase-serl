import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

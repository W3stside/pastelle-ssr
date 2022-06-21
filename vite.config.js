import { defineConfig } from 'vite'
import hydrogen from '@shopify/hydrogen/plugin'

export default defineConfig({
  plugins: [
    hydrogen({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
})

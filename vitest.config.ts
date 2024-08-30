import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      'mini-jsx/jsx-dev-runtime': './src/mini-jsx'
    },
    coverage: {
      enabled: true
    },
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }]
    }
  }
})

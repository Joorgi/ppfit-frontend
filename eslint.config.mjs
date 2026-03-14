// @ts-check
import withNuxt from './app/.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'off'
    }
  }
)

// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    rules: {
      'no-console': 'warn',
      'node/prefer-global/process': 'off',
    },
    ignores: [
      // # Logs
      'logs',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',
      'lerna-debug.log*',

      'node_modules',
      '.DS_Store',
      'dist',
      'coverage',
      '*.local',
      '.nuxt',

      '.env',

      // # Editor directories and files
      '.vscode',
      '.idea',
      '*.suo',
      '*.ntvs*',
      '*.njsproj',
      '*.sln',
      '*.sw?',
    ],
  },
)

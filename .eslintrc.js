module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ]
  rules: {
    semi: ['error', 'never']
  },
  globals: {
    define: true,
    module: true
  }
}

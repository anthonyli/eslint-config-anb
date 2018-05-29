module.exports = {
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'standard'
  ],
  rules: {
    semi: ['error', 'never']
  },
  globals: {
    define: true,
    module: true
  }
}

module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    semi: ['error', 'never']
  },
  plugins: ['vue'],
  globals: {
    define: true,
    module: true
  }
}

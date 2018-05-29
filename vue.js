const path = require('path')
module.exports = {
  extends: [
    path.join(__dirname, 'index.js'),
    'plugin:vue/recommended'
  ],
  plugins: ['vue', 'html']
}

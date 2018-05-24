(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.anb = factory())

})(this, function () {
  const path = require('path')
  return {
    extends: [
      path.join(__dirname, 'index.js'),
      'standard-react'
    ]
  }
})

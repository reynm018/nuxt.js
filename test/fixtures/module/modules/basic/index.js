const path = require('path')

module.exports = function basicModule (options, resolve) {
  // Add  vendor
  this.addVendor('lodash')

  // Add a plugin
  this.addPlugin(path.resolve(__dirname, 'reverse.js'))

  // Extend build
  this.extendBuild(({isClient, isServer}) => {
    // Do nothing!
  })

  // Extend build again
  this.extendBuild(({isClient, isServer}) => {
    // Do nothing!
  })

  // Extend routes
  this.extendRoutes((routes, resolve) => {
    // Do nothing!
  })

  // Require same module twice
  this.requireModule('~/modules/empty/index.js')
  this.requireModule('~/modules/empty/index.js')

  resolve()
}

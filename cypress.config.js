const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://test.station.joinebo.app",
    defaultCommandTimeout: 30000,
    viewportHeight: 1000,
    viewportWidth: 2000,
    watchForFileChanges: false,
    chromeWebSecurity: false ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});




//const { defineConfig } = require('cypress')
//
//module.exports = defineConfig({
//  e2e: {
//    baseUrl: 'https://test.station.joinebo.app',
//  },
//})

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'https://c94dh2pfp1.execute-api.us-west-2.amazonaws.com',
    },
    setupNodeEvents(on, config) {

    },
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/results-[hash].xml',
    toConsole: true
  }
})
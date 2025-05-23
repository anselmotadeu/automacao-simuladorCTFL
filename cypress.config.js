const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://simulador-ctfl.vercel.app/",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    failFast: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
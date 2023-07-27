const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí debes utilizar la función 'on' para configurar eventos, si es necesario.
      // Por ejemplo, si quieres configurar el 'baseUrl', podrías hacerlo así:
      config.baseUrl = "http://www.automationpractice.pl";
      return config;
    },
  },
});

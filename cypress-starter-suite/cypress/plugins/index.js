const fs = require('fs-extra')
const path = require('path')

/**
 * @type {Cypress.PluginConfig}
 * @param {*} on - On is used to hook into various events Cypress emits
 * @param {*} config - Config is the resolved Cypress config
 */
module.exports = (on, config) => {
  // accept a config file value or use dev env by default 
  const envFile = config.env.configFile || 'dev'
  return getConfigurationByFile(envFile)
}

/**
 * Reads an environment JSON file and then parses it into an object
 * @param {*} file - An env file name. For ex: dev, qa or stage
 * @returns A promisified configuration by environment file
 */
const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve('cypress/environments', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}
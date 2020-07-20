/**
 * configuration file.
 */

/**
 * Screenshot:
 */
let HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
let reporter = new HtmlScreenshotReporter({
  reportTitle: "Protractor Automated Tests Summary",
  captureOnlyFailedSpecs: true,
  showSummary: true,
  showQuickLinks: true,
  showConfiguration: true,
  reportFailedUrl: true,
  preserveDirectory: true,
  inlineImages: true,
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  directConnect: true,

  // Spec patterns are relative to the current working directory when protractor is called.
  specs: ['../tests/ui/*_spec.js'],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // Setup the report before any tests start
  beforeLaunch: () => {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: () => {
    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  // Close the report after all tests finish
  afterLaunch: (exitCode) => {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

};
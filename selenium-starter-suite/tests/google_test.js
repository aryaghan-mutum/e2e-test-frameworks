// const webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// const driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();

// driver.get('http://www.google.com');

// driver.findElement(By.name('q')).sendKeys('webdriver');

// driver.sleep(1000).then(function() {
//   driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
// });

// driver.findElement(By.name('btnK')).click();

// driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//     driver.quit();
//   });
// });
const {Builder, By, Key, util} = require("selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}

example();
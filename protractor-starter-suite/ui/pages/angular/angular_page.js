// import BasePage from './basePage';

class AngularHomepage {

  constructor() {
    this.nameInput = element(by.model('yourName'));
    this.greeting = element(by.binding('yourName'));
  }

  /**
   * 
   */
  openPage() {
    browser.get('http://www.angularjs.org');
    return this;
  }

  /**
   * 
   * @param {*} name 
   */
  setName(name) {
    this.nameInput.sendKeys(name);
    return this;
  }

  /**
   * 
   */
  getGreeting() {
    return this.greeting.getText();
  }
}

module.exports = new AngularHomepage();
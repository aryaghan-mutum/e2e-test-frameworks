class AngularHomepage {

    constructor() {
      this.nameInput = element(by.model('yourName'));
      this.greeting = element(by.binding('yourName'));
    }
  
    openPage() {
      browser.get('http://www.angularjs.org');
      return this;
    }
  
    setName(name) {
      this.nameInput.sendKeys(name);
      return this;
    }
  
    getGreeting() {
      return this.greeting.getText();
      return this;
    }
  }
  
  module.exports = new AngularHomepage();
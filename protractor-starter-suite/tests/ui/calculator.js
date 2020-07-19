let homePage = require('../../ui/pages/calculator/calculator_page');

describe('demo calc test', () => {
    it('add test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
        homePage.setFirstNumber('4');
        homePage.setSecondNumber('3');
        homePage.clickGo();
        let result = element(by.cssContainingText('.ng-binding', '7'));
        expect(result.getText()).toEqual('7');
        browser.sleep(2000);
    })
})
let homePage = require('../../ui/pages/calculator/calculator_page')

describe('demo calc test', () => {
    it('add test', () => {
        homePage.get('http://juliemr.github.io/protractor-demo/')
        homePage.enterFirstNumber('4');
        homePage.enterSecondNumber('3');
        homePage.clickGo();
        let result = element(by.cssContainingText('.ng-binding', '7'));
        expect(result.getText()).toEqual('7');
        browser.sleep(2000);
    })
})
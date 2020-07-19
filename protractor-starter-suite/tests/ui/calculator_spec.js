let homePage = require('../../ui/pages/calculator/calculator_page');

describe('Calculator test', () => {

    beforeEach(async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should test a title', () => {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should test addition of two numbers', () => {
        homePage.setFirstNumber('4').setSecondNumber('3').clickGoBtn();
        let result = element(by.cssContainingText('.ng-binding', '7'));
        expect(result.getText()).toEqual('7');
        browser.sleep(2000);
    })

    it('should test subtraction of two numbers', () => {
        homePage.setFirstNumber('4').setSecondNumber('3').clickGoBtn();
        let result = element(by.cssContainingText('.ng-binding', '7'));
        expect(result.getText()).toEqual('70');
        browser.sleep(2000);
    })
})
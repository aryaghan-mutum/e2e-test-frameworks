let homePage = require('../../ui/pages/calculator/calculator_page');

describe('Calculator test', () => {
    it('should test addition', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
        homePage.setFirstNumber('4').setSecondNumber('3').clickGo();
        let result = element(by.cssContainingText('.ng-binding', '7'));
        expect(result.getText()).toEqual('7');
        browser.sleep(2000);
    })

    // it('should test subtraction', () => {
    //     browser.get('http://juliemr.github.io/protractor-demo/')
    //     homePage.setFirstNumber('4').setSecondNumber('3').clickGo();
    //     let result = element(by.cssContainingText('.ng-binding', '70'));
    //     expect(result.getText()).toEqual('7');
    //     browser.sleep(2000);
    // })
})
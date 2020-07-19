let homePage = require('../../ui/pages/calculator/calculator_page');

describe('Calculator test', () => {

    beforeEach(async () =>  {
		await browser.get('http://juliemr.github.io/protractor-demo/');
    });
    
    it('should test addition', () => {
        homePage.setFirstNumber('4').setSecondNumber('3').clickGo();
        let result = element(by.cssContainingText('.ng-binding', '7'));
        expect(result.getText()).toEqual('7');
        browser.sleep(2000);
    })

    it('should test subtraction', () => {
        homePage.setFirstNumber('4').setSecondNumber('3').clickGo();
        let result = element(by.cssContainingText('.ng-binding', '7'));
        expect(result.getText()).toEqual('70');
        browser.sleep(2000);
    })
})
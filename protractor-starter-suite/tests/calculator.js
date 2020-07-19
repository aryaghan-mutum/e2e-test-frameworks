describe('demo calc test', () =>  {
    it('add test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('23');
        element(by.model('second')).sendKeys('3');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding', '26'));
        expect(result.getText()).toEqual('26');
        browser.sleep(2000);
    });
});
const homepage = function() {
   
    const firstNumInput = element(by.model('first'));
    const secondNumInput = element(by.model('second'));
    const goBtnCss = element(by.css('[ng-click="doAddition()"]'));

    /**
     * 
     * @param {*} firstNum 
     */
    this.enterFirstNumber = function(firstNum) {
        firstNumInput.sendKeys(firstNum);
    };

    /**
     * 
     * @param {*} secondNum 
     */
    this.enterSecondNumber = function(secondNum) {
        secondNumInput.sendKeys(secondNum);
    };

    this.clickGo = function() {
        goBtnCss.click();
    };

    /**
     * 
     */
    this.verifyResult = function() {
        const output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
}

module.exports = new homepage();

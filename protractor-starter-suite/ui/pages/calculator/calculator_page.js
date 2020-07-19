const homepage = function() {
   
    const firstNumInput = element(by.model('first'));
    const secondNumInput = element(by.model('second'));
    const goBtnCss = element(by.css('[ng-click="doAddition()"]'));

    /**
     * 
     * @param {*} firstNum 
     */
    this.setFirstNumber = function(firstNum) {
        firstNumInput.sendKeys(firstNum);
        return this;
    };

    /**
     * 
     * @param {*} secondNum 
     */
    this.setSecondNumber = function(secondNum) {
        secondNumInput.sendKeys(secondNum);
        return this;
    };
 
    this.clickGo = function() {
        goBtnCss.click();
        return this;
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

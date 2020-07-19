const homepage = function() {
   
    const firstNumInput = element(by.model('first'));
    const secondNumInput = element(by.model('second'));
    const goBtnCss = element(by.css('[ng-click="doAddition()"]'));

    /**
     * 
     * @param {*} firstNum 
     */
    this.setFirstNumber = (firstNum) => {
        firstNumInput.sendKeys(firstNum);
        return this;
    };

    /**
     * 
     * @param {*} secondNum 
     */
    this.setSecondNumber = (secondNum) => {
        secondNumInput.sendKeys(secondNum);
        return this;
    };
 
    this.clickGoBtn = () => {
        goBtnCss.click();
        return this;
    };

    /**
     * 
     */
    this.verifyResult = () => {
        const output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
}

module.exports = new homepage();

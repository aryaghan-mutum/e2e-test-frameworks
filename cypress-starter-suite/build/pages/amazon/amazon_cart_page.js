"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_page_1 = require("../base_page");
/**
 * Page object comprises of locators for web elements of "Amazon Cart" page and methods that manipulate them
 */
class AmazonCartPage extends base_page_1.BasePage {
    /** Instantiates a new Amazon Cart page object */
    constructor() {
        super();
        /** The id is associated with the Cart button */
        this.cartBtnId = '#nav-cart-count';
        /** The css is associated with the Proceed to Checkout button */
        this.proceedToCheckoutBtnCss = '.a-button-input';
    }
    /**
     * @remarks - Get "Proceed To Checkout" button element locator
     * @returns A Chainable element locator for Proceed to Checkout button
     */
    get proceedToCheckout() {
        return cy.get(this.proceedToCheckoutBtnCss);
    }
    /**
     * @remarks - Click Amazon Cart button
     */
    clickCart() {
        cy.get(this.cartBtnId).click();
        return this;
    }
}
exports.default = new AmazonCartPage();
//# sourceMappingURL=amazon_cart_page.js.map
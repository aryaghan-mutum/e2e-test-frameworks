/// <reference types="cypress" />
import { BasePage } from '../base_page';
/**
 * Page object comprises of locators for web elements of "Amazon Cart" page and methods that manipulate them
 */
declare class AmazonCartPage extends BasePage {
    /** The id is associated with the Cart button */
    private readonly cartBtnId;
    /** The css is associated with the Proceed to Checkout button */
    private readonly proceedToCheckoutBtnCss;
    /** Instantiates a new Amazon Cart page object */
    constructor();
    /**
     * @remarks - Get "Proceed To Checkout" button element locator
     * @returns A Chainable element locator for Proceed to Checkout button
     */
    get proceedToCheckout(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Click Amazon Cart button
     */
    clickCart(): this;
}
declare const _default: AmazonCartPage;
export default _default;

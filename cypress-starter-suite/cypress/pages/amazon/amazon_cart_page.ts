import {BasePage} from '../base_page'

/**
 * Page object comprises of locators for web elements of "Amazon Cart" page and methods that manipulate them
 */
class AmazonCartPage extends BasePage {

    /** The id is associated with the Cart button */
    private readonly cartBtnId = '#nav-cart-count'

    /** The css is associated with the Proceed to Checkout button */
    private readonly proceedToCheckoutBtnCss = '.a-button-input'

    /** Instantiates a new Amazon Cart page object */
    constructor() {
        super()
    }

    /**
     * @remarks - Get "Proceed To Checkout" button element locator
     * @returns A Chainable element locator for Proceed to Checkout button
     */
    get proceedToCheckout(): Cypress.Chainable<JQuery> {
        return cy.get(this.proceedToCheckoutBtnCss)
    }

    /**
     * @remarks - Click Amazon Cart button
     */
    clickCart(): this {
        cy.get(this.cartBtnId).click()
        return this 
    }
}

export default new AmazonCartPage()

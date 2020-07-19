import { BasePage } from '../base_page'

/**
 * Page object comprises of locators for web elements of "Facebook Login" page and methods that manipulate them
 */
class FacebookLoginPage extends BasePage {

    /** The id is associated with the "username" text box */
    private readonly usernameTextBoxId = '#email'

    /** The id is associated with the "password" text box */
    private readonly passwordTextBoxId = '#pass'

    /** The text is associated with the "login" button */
    private readonly signInTextBtnText = 'Log In'

    /** Instantiates a new Facebook Login page object */
    constructor() {
        super()
    }

    /**
     * @remarks - Get Facebook username text box element locator
     * @returns A chainable element locator for Facebook username text box
     */
    get username(): Cypress.Chainable<JQuery> {
        return cy.get(this.usernameTextBoxId)
    }

    /**
     * @remarks - Get Facebook password text box element locator
     * @returns A chainable element locator for Facebook password text box
     */
    get password(): Cypress.Chainable<JQuery> {
        return cy.get(this.passwordTextBoxId)
    }

    /**
     * @remarks - Get Login button element locator
     * @returns A chainable element locator for Facebook username text box
     */
    get signin(): Cypress.Chainable {
        return cy.contains(this.signInTextBtnText)
    }

}

export default new FacebookLoginPage()
/// <reference types="cypress" />
import { BasePage } from '../base_page';
/**
 * Page object comprises of locators for web elements of "Facebook Login" page and methods that manipulate them
 */
declare class FacebookLoginPage extends BasePage {
    /** The id is associated with the "username" text box */
    private readonly usernameTextBoxId;
    /** The id is associated with the "password" text box */
    private readonly passwordTextBoxId;
    /** The text is associated with the "login" button */
    private readonly signInTextBtnText;
    /** Instantiates a new Facebook Login page object */
    constructor();
    /**
     * @remarks - Get Facebook username text box element locator
     * @returns A chainable element locator for Facebook username text box
     */
    get username(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Get Facebook password text box element locator
     * @returns A chainable element locator for Facebook password text box
     */
    get password(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Get Login button element locator
     * @returns A chainable element locator for Facebook username text box
     */
    get signin(): Cypress.Chainable;
}
declare const _default: FacebookLoginPage;
export default _default;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_page_1 = require("../base_page");
/**
 * Page object comprises of locators for web elements of "Facebook Login" page and methods that manipulate them
 */
class FacebookLoginPage extends base_page_1.BasePage {
    /** Instantiates a new Facebook Login page object */
    constructor() {
        super();
        /** The id is associated with the "username" text box */
        this.usernameTextBoxId = '#email';
        /** The id is associated with the "password" text box */
        this.passwordTextBoxId = '#pass';
        /** The text is associated with the "login" button */
        this.signInTextBtnText = 'Log In';
    }
    /**
     * @remarks - Get Facebook username text box element locator
     * @returns A chainable element locator for Facebook username text box
     */
    get username() {
        return cy.get(this.usernameTextBoxId);
    }
    /**
     * @remarks - Get Facebook password text box element locator
     * @returns A chainable element locator for Facebook password text box
     */
    get password() {
        return cy.get(this.passwordTextBoxId);
    }
    /**
     * @remarks - Get Login button element locator
     * @returns A chainable element locator for Facebook username text box
     */
    get signin() {
        return cy.contains(this.signInTextBtnText);
    }
}
exports.default = new FacebookLoginPage();
//# sourceMappingURL=facebook_login_page.js.map
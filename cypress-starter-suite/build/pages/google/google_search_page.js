"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_page_1 = require("../base_page");
/**
 * Page object comprises of locators for web elements on the Google Search Page and functions that manipulate them
 */
class GoogleSearchPage extends base_page_1.BasePage {
    /** Instantiates a new Google Search page object */
    constructor() {
        super();
        /** The css is associated with the Google Search Engine */
        this.googleSearchBoxCss = '.gLFyf';
    }
    /**
     * @remarks - Get Google Search engine element locator
     * @returns A Chainable element locator for Google Search text box
     */
    get search() {
        return cy.get(this.googleSearchBoxCss);
    }
    /**
     * @remarks - Search in Google
     * @param msg - A product to search
     */
    serachBy(msg) {
        this.search.type(msg).type('{enter}');
        return this;
    }
}
exports.default = new GoogleSearchPage();
//# sourceMappingURL=google_search_page.js.map
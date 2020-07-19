/// <reference types="cypress" />
import { BasePage } from '../base_page';
/**
 * Page object comprises of locators for web elements on the Google Search Page and functions that manipulate them
 */
declare class GoogleSearchPage extends BasePage {
    /** The css is associated with the Google Search Engine */
    private readonly googleSearchBoxCss;
    /** Instantiates a new Google Search page object */
    constructor();
    /**
     * @remarks - Get Google Search engine element locator
     * @returns A Chainable element locator for Google Search text box
     */
    get search(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Search in Google
     * @param msg - A product to search
     */
    serachBy(msg: string): this;
}
declare const _default: GoogleSearchPage;
export default _default;

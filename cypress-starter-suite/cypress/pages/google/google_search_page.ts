import { BasePage } from '../base_page'

/**
 * Page object comprises of locators for web elements on the Google Search Page and functions that manipulate them
 */
class GoogleSearchPage extends BasePage {

    /** The css is associated with the Google Search Engine */
    private readonly googleSearchBoxCss = '.gLFyf'

    /** Instantiates a new Google Search page object */
    constructor() {
        super()
    }

    /**
     * @remarks - Get Google Search engine element locator
     * @returns A Chainable element locator for Google Search text box
     */
    get search(): Cypress.Chainable<JQuery> {
        return cy.get(this.googleSearchBoxCss)
    }

    /**
     * @remarks - Search in Google
     * @param msg - A product to search
     */
    serachBy(msg: string): this {
        this.search.type(msg).type('{enter}')
        return this
    }

}

export default new GoogleSearchPage()
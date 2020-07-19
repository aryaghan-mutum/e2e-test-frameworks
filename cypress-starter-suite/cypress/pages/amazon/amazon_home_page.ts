import { BasePage } from '../base_page'
import util from 'util'

/**
 * Page object comprises of locators for web elements of "Amazon Home" page and methods that manipulate them
 */
class AmazonHomePage extends BasePage {

    /** The id is associated with the Amazon search text box */
    private readonly amazonSearchBoxId: string = '#twotabsearchtextbox'

    /** The css is associated with the Amazon Search button */
    private readonly amazonSearchBtnCss: string = '.nav-search-submit > .nav-input'

    /** The xpath is associated with the product name */
    private readonly productName: string = util.format('//span[text()="%s"]')

    /** The text is associated with the "Paperback" book type */
    private readonly paperbackText: string = 'Paperback'

    /** The text is associated with the "Hardcover" book type */
    private readonly hardcoverText: string = 'Hardcover'

    /** The text is associated with the "Other Sellers" book type */
    private readonly otherSellersText: string = 'Other Sellers'

    /** the id is associated with the "Add to Cart" button */
    private readonly addToCartBtnId: string = '#add-to-cart-button'

    /** Instantiates a new Amazon Home page object */
    constructor() {
        super()
    }

    /**
     * @remarks - Get Amazon Search box element locator
     * @returns A chainable element locator for Amazon Search text box
     */
    get searchBox(): Cypress.Chainable<JQuery> {
        return cy.get(this.amazonSearchBoxId)
    }

    /**
     * @remarks - Get Amazon Search box element locator
     * @returns A chainable element locator for Amazon Search button
     */
    get searchBtn(): Cypress.Chainable<JQuery> {
        return cy.get(this.amazonSearchBtnCss)
    }

    /**
     * @remarks - Get "Paperback" element locator"
     * @returns A chainable element locator for Paperback book type
     */
    get paperbackBookType(): Cypress.Chainable<JQuery> {
        return cy.get(this.paperbackText)
    }

    /**
     * @remarks - Get "Hardcover" element locator"
     * @returns A chainable element locator for Paperback book type
     */
    get hardcoverkBookType(): Cypress.Chainable<JQuery> {
        return cy.get(this.hardcoverText)
    }

    /**
     * @remarks - Get "Other Sellers" text element locator"
     * @returns A chainable element locator for Other Sellers text
     */
    get otherSellers(): Cypress.Chainable<JQuery> {
        return cy.get(this.otherSellersText)
    }

    /**
     * @remarks - Get "Add to Cart" button element locator"
     * @returns A chainable element locator for Add to Cart button
     */
    get addtoCartBtn(): Cypress.Chainable<JQuery> {
        return cy.get(this.addToCartBtnId)
    }

    /**
     * @remarks - Search Product in the search box
     * @param product - A product to search
     */
    searchProduct(product: string): this {
        this.searchBox.type(product)
            .get(this.amazonSearchBtnCss).click()
        return this
    }

    /**
     * @remarks - Select Product 
     * @param product - A product to select 
     */
    selectProduct(product: string): this {
        cy.xpath(util.format(this.productName, product)).click()
        return this
    }
}

export default new AmazonHomePage()
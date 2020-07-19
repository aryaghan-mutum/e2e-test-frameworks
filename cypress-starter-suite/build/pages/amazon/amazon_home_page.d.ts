/// <reference types="cypress" />
import { BasePage } from '../base_page';
/**
 * Page object comprises of locators for web elements of "Amazon Home" page and methods that manipulate them
 */
declare class AmazonHomePage extends BasePage {
    /** The id is associated with the Amazon search text box */
    private readonly amazonSearchBoxId;
    /** The css is associated with the Amazon Search button */
    private readonly amazonSearchBtnCss;
    /** The xpath is associated with the product name */
    private readonly productName;
    /** The text is associated with the "Paperback" book type */
    private readonly paperbackText;
    /** The text is associated with the "Hardcover" book type */
    private readonly hardcoverText;
    /** The text is associated with the "Other Sellers" book type */
    private readonly otherSellersText;
    /** the id is associated with the "Add to Cart" button */
    private readonly addToCartBtnId;
    /** Instantiates a new Amazon Home page object */
    constructor();
    /**
     * @remarks - Get Amazon Search box element locator
     * @returns A chainable element locator for Amazon Search text box
     */
    get searchBox(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Get Amazon Search box element locator
     * @returns A chainable element locator for Amazon Search button
     */
    get searchBtn(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Get "Paperback" element locator"
     * @returns A chainable element locator for Paperback book type
     */
    get paperbackBookType(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Get "Hardcover" element locator"
     * @returns A chainable element locator for Paperback book type
     */
    get hardcoverkBookType(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Get "Other Sellers" text element locator"
     * @returns A chainable element locator for Other Sellers text
     */
    get otherSellers(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Get "Add to Cart" button element locator"
     * @returns A chainable element locator for Add to Cart button
     */
    get addtoCartBtn(): Cypress.Chainable<JQuery>;
    /**
     * @remarks - Search Product in the search box
     * @param product - A product to search
     */
    searchProduct(product: string): this;
    /**
     * @remarks - Select Product
     * @param product - A product to select
     */
    selectProduct(product: string): this;
}
declare const _default: AmazonHomePage;
export default _default;

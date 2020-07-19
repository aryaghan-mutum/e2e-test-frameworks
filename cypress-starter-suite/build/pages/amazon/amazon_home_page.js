"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_page_1 = require("../base_page");
const util_1 = __importDefault(require("util"));
/**
 * Page object comprises of locators for web elements of "Amazon Home" page and methods that manipulate them
 */
class AmazonHomePage extends base_page_1.BasePage {
    /** Instantiates a new Amazon Home page object */
    constructor() {
        super();
        /** The id is associated with the Amazon search text box */
        this.amazonSearchBoxId = '#twotabsearchtextbox';
        /** The css is associated with the Amazon Search button */
        this.amazonSearchBtnCss = '.nav-search-submit > .nav-input';
        /** The xpath is associated with the product name */
        this.productName = util_1.default.format('//span[text()="%s"]');
        /** The text is associated with the "Paperback" book type */
        this.paperbackText = 'Paperback';
        /** The text is associated with the "Hardcover" book type */
        this.hardcoverText = 'Hardcover';
        /** The text is associated with the "Other Sellers" book type */
        this.otherSellersText = 'Other Sellers';
        /** the id is associated with the "Add to Cart" button */
        this.addToCartBtnId = '#add-to-cart-button';
    }
    /**
     * @remarks - Get Amazon Search box element locator
     * @returns A chainable element locator for Amazon Search text box
     */
    get searchBox() {
        return cy.get(this.amazonSearchBoxId);
    }
    /**
     * @remarks - Get Amazon Search box element locator
     * @returns A chainable element locator for Amazon Search button
     */
    get searchBtn() {
        return cy.get(this.amazonSearchBtnCss);
    }
    /**
     * @remarks - Get "Paperback" element locator"
     * @returns A chainable element locator for Paperback book type
     */
    get paperbackBookType() {
        return cy.get(this.paperbackText);
    }
    /**
     * @remarks - Get "Hardcover" element locator"
     * @returns A chainable element locator for Paperback book type
     */
    get hardcoverkBookType() {
        return cy.get(this.hardcoverText);
    }
    /**
     * @remarks - Get "Other Sellers" text element locator"
     * @returns A chainable element locator for Other Sellers text
     */
    get otherSellers() {
        return cy.get(this.otherSellersText);
    }
    /**
     * @remarks - Get "Add to Cart" button element locator"
     * @returns A chainable element locator for Add to Cart button
     */
    get addtoCartBtn() {
        return cy.get(this.addToCartBtnId);
    }
    /**
     * @remarks - Search Product in the search box
     * @param product - A product to search
     */
    searchProduct(product) {
        this.searchBox.type(product)
            .get(this.amazonSearchBtnCss).click();
        return this;
    }
    /**
     * @remarks - Select Product
     * @param product - A product to select
     */
    selectProduct(product) {
        cy.xpath(util_1.default.format(this.productName, product)).click();
        return this;
    }
}
exports.default = new AmazonHomePage();
//# sourceMappingURL=amazon_home_page.js.map
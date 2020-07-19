"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amazon_home_page_1 = __importDefault(require("../../../../pages/amazon/amazon_home_page"));
const amazon_cart_page_1 = __importDefault(require("../../../../pages/amazon/amazon_cart_page"));
const { uiUrl } = require('../../../../fixtures/ui/ui_config.json');
const faker = require('faker');
describe('Amazon Test', () => {
    const bookName = 'Intoduction to Algorithms (The MIT Press)';
    it('should search a product ', () => {
        amazon_home_page_1.default.openUrl(uiUrl.amazonUrl);
        cy.contains('amazon').should('be.visible');
        amazon_home_page_1.default.searchProduct(bookName).selectProduct(bookName)
            .paperbackBookType.should('be.visible').click();
        amazon_home_page_1.default.addtoCartBtn.should('be.visible').click();
        amazon_cart_page_1.default.clickCart().proceedToCheckout.should('be.visible').click();
    });
});
//# sourceMappingURL=amazon.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
/**
 * Page Object Base class consiss of procedures to manipulate the UI of web app
 */
class BasePage {
    /** Instantiates a new Base Page object  */
    constructor() {
        /**
         * Open a URL
         * @param url - An URL to open an app
         */
        this.openUrl = (url) => {
            cy.visit(url);
            return this;
        };
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=base_page.js.map
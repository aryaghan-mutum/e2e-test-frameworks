"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_search_page_1 = __importDefault(require("../../../../pages/google/google_search_page"));
const { uiUrl } = require('../../../../fixtures/ui/ui_config.json');
const StringUtils_1 = __importDefault(require("../../../../utils/StringUtils"));
describe('Google Search Test', () => {
    it('should search in google engine page ', () => {
        debugger;
        google_search_page_1.default.openUrl(uiUrl.googleUrl);
        cy.title().should("include", StringUtils_1.default.capitalizeFirstLetter('google'));
        google_search_page_1.default.serachBy('cypress');
        cy.title().should('include', 'cypress - Google Search');
    });
});
//# sourceMappingURL=google.spec.js.map
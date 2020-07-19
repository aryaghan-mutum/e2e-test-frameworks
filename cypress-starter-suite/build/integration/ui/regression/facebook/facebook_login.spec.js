"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const facebook_login_page_1 = __importDefault(require("../../../../pages/facebook/facebook_login_page"));
const { uiUrl } = require('../../../../fixtures/ui/ui_config');
describe('Facebook Login Test', () => {
    it('should login facebook account ', () => {
        facebook_login_page_1.default.openUrl(uiUrl.facebookUrl);
        facebook_login_page_1.default.username.should('be.visible').type('user');
        facebook_login_page_1.default.password.should('be.visible').type('pass');
        facebook_login_page_1.default.signin.should('be.visible').type('pass');
    });
});
//# sourceMappingURL=facebook_login.spec.js.map
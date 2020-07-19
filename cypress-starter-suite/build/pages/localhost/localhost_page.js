"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_page_1 = require("../base_page");
class LocalhostPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.nameTextBoxId = '#name';
        this.emailTextBoxId = '#email';
        this.messageTextBoxId = '#message';
        this.sendBtnText = 'SEND';
        /**
         * Set Name
         * @param name
         */
        this.setName = (name) => {
            cy.get(this.nameTextBoxId)
                .should('be.visible')
                .type(name).type('{enter}')
                .should("have.value", name);
            return this;
        };
        /**
         * Get Name
         * @returns Name
         */
        this.getName = () => {
            const name = Cypress.$(this.nameTextBoxId).text();
            return name;
        };
        /**
         * Set Email
         * @param email
         */
        this.setEmail = (email) => {
            cy.get(this.emailTextBoxId)
                .should('be.visible')
                .type(email).type('{enter}')
                .should("have.value", email);
            return this;
        };
        /**
         * Set Message
         * @param message
         */
        this.setMessage = (message) => {
            cy.get(this.messageTextBoxId)
                .should('be.visible')
                .type(message).type('{enter}');
            return this;
        };
        /**
         * Click Send
         */
        this.clickSend = () => {
            cy.contains(this.sendBtnText).should('be.visible').click();
            return this;
        };
    }
}
exports.default = new LocalhostPage();
//# sourceMappingURL=localhost_page.js.map
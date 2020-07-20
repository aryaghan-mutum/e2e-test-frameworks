import { BasePage } from '../base_page'

class LocalhostPage extends BasePage {

    private readonly nameTextBoxId = '#name'
    private readonly emailTextBoxId = '#email'
    private readonly messageTextBoxId = '#message'
    private readonly sendBtnText = 'SEND'

    constructor() {
        super()
    }

    /**
     * Set Name
     * @param name 
     */
    setName = (name: string): this => {
        cy.get(this.nameTextBoxId)
            .should('be.visible')
            .type(name).type('{enter}')
            .should("have.value", name)
        return this
    }

    /** 
     * Get Name 
     * @returns Name
     */
    getName = (): string => {
        const name = Cypress.$(this.nameTextBoxId).text()
        return name
    }

    /**
     * Set Email 
     * @param email 
     */
    setEmail = (email: string): this => {
        cy.get(this.emailTextBoxId)
            .should('be.visible')
            .type(email).type('{enter}')
            .should("have.value", email)
        return this
    }

    /**
     * Set Message
     * @param message 
     */
    setMessage = (message: string): this => {
        cy.get(this.messageTextBoxId)
            .should('be.visible')
            .type(message).type('{enter}')
        return this
    }

    /** 
     * Click Send 
     */
    clickSend = (): this => {
        cy.contains(this.sendBtnText).should('be.visible').click()
        return this
    }
}

export default new LocalhostPage()
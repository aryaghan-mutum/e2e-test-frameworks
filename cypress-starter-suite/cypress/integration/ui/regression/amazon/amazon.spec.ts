import amazonHomePage from '../../../../pages/amazon/amazon_home_page'
import amazonCartPage from '../../../../pages/amazon/amazon_cart_page'
const { uiUrl } = require('../../../../fixtures/ui/ui_config.json')
const faker = require('faker')

describe('Amazon Test', () => {

    const bookName: string = 'Intoduction to Algorithms (The MIT Press)'

    it('should search a product ', () => {
        amazonHomePage.openUrl(uiUrl.amazonUrl)
        cy.contains('amazon').should('be.visible')
        amazonHomePage.searchProduct(bookName).selectProduct(bookName)
            .paperbackBookType.should('be.visible').click()

        amazonHomePage.addtoCartBtn.should('be.visible').click()
        amazonCartPage.clickCart().proceedToCheckout.should('be.visible').click()

    })
})






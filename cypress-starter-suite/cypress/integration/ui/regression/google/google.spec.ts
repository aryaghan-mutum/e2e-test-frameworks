import googleSearchPage from '../../../../pages/google/google_search_page'
const { uiUrl } = require('../../../../fixtures/ui/ui_config.json')
import strUtil from '../../../../utils/StringUtils'

describe('Google Search Test', () => {

    it('should search in google engine page ', () => {
        googleSearchPage.openUrl(uiUrl.googleUrl)
        cy.title().should("include", strUtil.capitalizeFirstLetter('google'))
        googleSearchPage.serachBy('cypress')
        cy.title().should('include', 'cypress - Google Search')
    })

})



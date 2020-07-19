import facebookLoginPage from '../../../../pages/facebook/facebook_login_page'
const {uiUrl} = require('../../../../fixtures/ui/ui_config')

describe('Facebook Login Test', () => {

    it('should login facebook account ', () => {
        facebookLoginPage.openUrl(uiUrl.facebookUrl)
        facebookLoginPage.username.should('be.visible').type('user')
        facebookLoginPage.password.should('be.visible').type('pass')
        facebookLoginPage.signin.should('be.visible').type('pass')

    })

})

const { landingPageController, formPageController } = require('./controllers')
const { notFoundPageTemplate } = require('./templates')
const { handleHtmlPageResponse } = require('./utils')

const router = (req, res) => {
    const { url } = req;

    switch(url) {
        case Router_List.LANDING_PAGE:
            return landingPageController(req, res)
        
        case Router_List.MESSAGE_FORM_PAGE:
            return formPageController(req, res)

        default:
            return notFoundPage(req, res)
    }
}

const notFoundPage = (req, res) => {
    handleHtmlPageResponse(res, notFoundPageTemplate()).end();
}

const Router_List = {
    LANDING_PAGE: '/',
    MESSAGE_FORM_PAGE: '/message'
}

module.exports = router
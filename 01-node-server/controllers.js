const { landingPageTemplate, formPageTemplate } = require('./templates')
const { saveFileWithContent } = require('./services')
const { redirectTo, handleHtmlPageResponse } = require('./utils')

// LANDING PAGE
const landingPageController = (req, res) => {
    const { method } = req;

    switch(method){
        case 'GET':
            return landingPage(res)
        
        default:
            return null;
    }
}

const landingPage = (res) => {
    handleHtmlPageResponse(res, landingPageTemplate()).end()
}

// FORM PAGE
const formPageController = (req, res) => {
    const { method } = req;

    switch(method){
        case 'GET':
            return formPage(res)
            
        case 'POST':
            return handleFormPageSubmit(req, res)

        default:
            return null;
    }
}

const formPage = (res) => {
    handleHtmlPageResponse(res, formPageTemplate()).end()
} 

const handleFormPageSubmit = async (req, res) => {
    await saveFileWithContent(req, () => redirectTo(res, '/') )
}

module.exports = {
    landingPageController,
    formPageController
}
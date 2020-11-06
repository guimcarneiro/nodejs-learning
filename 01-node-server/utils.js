const redirectTo = (res, path) => {
    res.statusCode = 302
    res.setHeader('Location', path)
    
    return res.end();
}

const handleHtmlPageResponse = (res, page) => {
    // set content type to html
    res.setHeader('Content-Type', 'text/html')
    res.write(page)
    return res;
}

module.exports = {
    redirectTo,
    handleHtmlPageResponse
}
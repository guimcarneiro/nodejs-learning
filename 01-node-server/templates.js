const landingPageTemplate = () => {
    return `<html>
                <head>
                    <title>My Page</title>
                </head>
                <body>
                    <h1>Hello There!</h1>
                </body>
            </html>`
}

const formPageTemplate = () => {
    return `<html>
                <head>
                    <title>Enter Message</title>
                </head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text"  name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>`
}

const notFoundPageTemplate = () => {
    return `<html>
                <head>
                    <title>Not Found</title>
                </head>
                <body>
                    <h1>Not Found</h1>
                </body>
            </html>`
}

module.exports = {
    landingPageTemplate,
    formPageTemplate,
    notFoundPageTemplate
}
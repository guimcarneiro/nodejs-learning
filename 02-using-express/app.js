const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

/* Body Parser middleware, because express doesn't parse the request body by default */
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
/* You can group routes with the same 'start' path by using a path at the previous middleware, so
   it will filter just requests that match the path in the first middleware, and just after that goes
   into the specific router */
app.use('/admin', adminRoutes)
app.use(shopRoutes)

/* When the request doesn't enter any of the middlewares(no path match), it will go into the Not Found middleware */
app.use((req, res, next) => {
    /* It accepts chaining methods to construct the response */
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'))
})

app.listen(3000)
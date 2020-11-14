const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

/* The router is a middleware that isolates the routing logic of express. It can keep the organization as 
    you want and in a more clear way. */
const router = express.Router()

/* Express .use match the path string not on a === manner, but on an 'starts with' manner */
/* the .get behaves differently from .use, because it matches by 'exact', not by 'starts-with' */

// matches with GET => '/admin/add-product
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

/* .post is a .use, but just receives POST requests. There are other http methods besides .post, like .put, .patch, .delete and .get */
// matches with POST => '/admin/product
router.post('/product', (req, res, next) => {
    console.log('req.body', req.body)
    res.redirect('/')
})

module.exports = router
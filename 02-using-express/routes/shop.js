const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

/* the .get behaves differently from .use, because it matches by 'exact', not by 'starts-with' */
router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router
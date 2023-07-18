const router = require('express').Router()

router.use('/admin', require('./admin.js'))

module.exports = router
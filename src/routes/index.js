const router = require('express').Router();

//routes
router.use('/auth', require('./auth'))

router.use('/category', require('./category'))

router.use('/product', require('./product'))

router.use('/order', require('./order'))

module.exports = router;
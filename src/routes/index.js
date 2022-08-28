const router = require('express').Router();

//routes
router.use('/auth', require('./auth'))

module.exports = router;
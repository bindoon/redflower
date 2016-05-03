var router = require('koa-router')();
var index = require('../controllers/index')

router.get('/', index.index );

module.exports = router;

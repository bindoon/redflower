var router = require('koa-router')();
var index = require('./controllers/index')
var users = require('./controllers/users')

router.get('/', index.index );
router.get('/users', users.list);

module.exports = router;

var router = require('koa-router')();
var users = require('../controllers/users')

router.get('/users', users.list);

module.exports = router;

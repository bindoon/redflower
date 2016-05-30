var router = require('koa-router')();
var index = require('./controllers/index')
var create = require('./controllers/create')
var users = require('./controllers/users')
var task = require('./controllers/task')

router.get('/', index.index );
router.get('/users', users.list);


//首页
router.get('/api/index/tasklist', index.tasklist);  //任务列表

router.get('/api/create/hotlist', create.hotlist);   // 热门推荐
router.get('/api/create/query', create.query);   // 查询联想
router.get('/api/create/new', create.new);   // 创建

router.get('/api/task/checkin', task.checkin);    // 完成失败
router.get('/api/task/remove', task.remove);  //删除
router.get('/api/task/private', task.private);  //
router.get('/api/task/thought', task.thought);  //
router.get('/api/task/detail', task.detail);  //
router.get('/api/task/thoughtlist', task.thoughtlist);  //
router.get('/api/task/monthdetail', task.monthdetail);  //

module.exports = router;

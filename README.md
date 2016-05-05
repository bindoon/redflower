# redflower


##域名
http://bouda.cn:3200/

##api

//首页
router.get('/api/index/tasklist', index.tasklist);  //任务列表
router.get('/api/index/remove', index.remove);  //删除
router.get('/api/index/checkin', index.checkin);    // 完成失败

//创建页面
router.get('/api/create/hotlist', create.hotlist);   // 热门推荐
router.get('/api/create/query', create.query);   // 查询联想
router.get('/api/create/new', create.new);   // 创建

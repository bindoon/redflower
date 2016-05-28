# 小红花

##域名
http://bouda.cn:3300/

##api

###首页
* 任务列表 /api/index/tasklist

|入参|描述|是否必须|
|---|---|---|
|userid|用户id|yes|

* 任务配置 [设置取消私密，完成失败]

    /api/task/private
    /api/task/checkin
    /api/task/remove

### 创建页面
* 热门推荐 /api/create/hotlist  
	创建页面的时候自动拉取
  

* 查询联想 /api/create/query    

	|入参|描述|是否必须|
|---|---|---|
|keyword|查询关注|yes|

* 创建 /api/create/new    

	|入参|描述|是否必须|
|---|---|---|
|||yes|

### 任务配置
* 设置、取消私密 /api/task/private  
* 删除 /api/task/remove  
* 完成、失败 /api/task/checkin    
* 详细信息 /api/task/detail
* 闹钟 /api/task/clock
* 计划 /api/task/plan


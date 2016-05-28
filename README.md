# 小红花

##域名
http://bouda.cn:3300/

##api

###首页
* 任务列表 /api/index/tasklist

|入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|

* 任务配置 [设置取消私密，完成失败]

    /api/task/private
    /api/task/checkin
    /api/task/remove

### 创建页面
* 热门推荐 /api/create/hotlist  
    创建页面的时候自动拉取
  

* 查询联想 /api/create/query    

    |入参|描述|可选值|
|---|---|---|
|keyword|查询关注|必传|

* 创建 /api/create/new    

    |入参|描述|可选值|
|---|---|---|
|||必传|

### 任务配置
* 私密 /api/task/private  
    |入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|
|taskid|功课id|必传|
|state|是否私密|'true' 'false'|

* 删除 /api/task/remove  

    |入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|
|taskid|功课id|必传|

* 打卡 /api/task/checkin    

    |入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|
|taskid|功课id|必传|
|state|成功失败|'1' '0'|

* 提交心得 /api/task/thought 

    |入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|
|taskid|功课id|必传|
|pics|图片|图片数据|
|content|文字内容|

* 详细信息 /api/task/detail

    |入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|
|taskid|功课id|必传|

返回：

```
{
    "success":true,
    "result":{
        "info":{
            "taskid":1,
            "state":0,
            "name":"",
            "clock":"19:30",
            "count":22,
            "monthInfo":[1,3,5],
            "totalDay":50
        }
    }

}
```



* 心得列表 /api/task/thoughtlist

    |入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|
|taskid|功课id|必传|


返回：

```
{
    "success":true,
    "result":{
        "list":[{
            "pics":[],
            "content":"",
            "time": "2016-4-4 4:4:4"
        }]
    }

}
```

* 闹钟 /api/task/clock
* 计划 /api/task/plan

* 详细信息 /api/task/monthdetail

    |入参|描述|可选值|
|---|---|---|
|userid|用户id|必传|
|taskid|功课id|必传|
|month|月||

返回：

```
{
    "success":true,
    "result":{
        "info":{
            "count":22,
            "days:[0,1,3,5]
        }
    }

}
```

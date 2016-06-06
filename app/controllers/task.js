'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');

const UserTask = require('../models/usertask');
const Checkin = require('../models/checkin');
const Thought = require('../models/thought');


let taskController = {
    checkin:function *(next) {   //完成失败
        let params = this.getParams();
        let err =  helper.checkParams(params,['userid','taskid','state']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield Checkin.create(params);

        this.body = {
            success:true,
            message:'success'
        }
    },
    private:function *(next) {  //设置取消私密
        let params = this.getParams();

        let err =  helper.checkParams(params,['userid','taskid','state']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield UserTask.update(params,{
            where:{
                userid:params.userid,
                taskid:params.taskid
            }
        });

        this.body = {
            success:true,
            message:'success'
        }
    },
    remove:function *(next) {
        let params = this.getParams();
        let err =  helper.checkParams(params,['userid','taskid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield UserTask.remove(params);

        this.body = {
            success:true,
            message:'success'
        }
    },
    // 心得
    thought:function *(next) {
        let params = this.getParams();
        let err =  helper.checkParams(params,['userid','taskid','pics','content']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield Thought.create(params);

        this.body = {
            success:true,
            message:'success'
        }
    },
    // 任务详细信息
    detail:function *(next) {
        let params = this.getParams();
        let err =  helper.checkParams(params,['userid','taskid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield UserTask.findAll();

        this.body = {
            success:true,
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
    },
    // 心得列表
    thoughtlist:function *(next) {
        let params = this.getParams();
        let err =  helper.checkParams(params,['userid','taskid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield Thought.findAll();

        this.body = {
            "success":true,
            "result":{
                "list":[{
                    "pics":[],
                    "content":"",
                    "createat": "2016-4-4 4:4:4"
                }]
            }

        }
    },
    monthdetail:function *(next) {
        let params = this.getParams();
        let err = helper.checkParams(params, ['userid', 'taskid','month']);
        if (err.length) {
            this.body = helper.error(err.join(',') + ' required');
            return;
        }

        this.body = {
            "success":true,
            "result":{
                "info":{
                    "count":22,
                    "days":[0,1,3,5]
                }
            }

        }
    }
};


module.exports = helper.wrapControllerByTryCatch(taskController);

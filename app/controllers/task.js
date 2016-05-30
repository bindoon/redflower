'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');

const TaskPool = require('../models/taskpool');


let taskController = {
    checkin:function *(next) {   //完成失败
        let err =  helper.checkParams(this.getParams(),['userid','taskid','state']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        this.body = {
            success:true,
            message:'success'
        }
    },
    private:function *(next) {  //设置取消私密

        let err =  helper.checkParams(this.getParams(),['userid','taskid','state']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        this.body = {
            success:true,
            message:'success'
        }
    },
    remove:function *(next) {
        let err =  helper.checkParams(this.getParams(),['userid','taskid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield TaskPool.findAll();

        this.body = {
            success:true,
            message:'success'
        }
    },
    // 心得
    thought:function *(next) {
        let err =  helper.checkParams(this.getParams(),['userid','taskid','pics','content']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield TaskPool.findAll();

        this.body = {
            success:true,
            message:'success'
        }
    },
    // 任务详细信息
    detail:function *(next) {
        let err =  helper.checkParams(this.getParams(),['userid','taskid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield TaskPool.findAll();

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
        let err =  helper.checkParams(this.getParams(),['userid','taskid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield TaskPool.findAll();

        this.body = {
            "success":true,
            "result":{
                "list":[{
                    "pics":[],
                    "content":"",
                    "time": "2016-4-4 4:4:4"
                }]
            }

        }
    },
    monthdetail:function *(next) {
        let err = helper.checkParams(this.getParams(), ['userid', 'taskid','month']);
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

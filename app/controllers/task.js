'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');
const moment = require('moment');

const TaskPool = require('../models/taskpool');
const UserTask = require('../models/usertask');
const Checkin = require('../models/checkin');
const Thought = require('../models/thought');


let taskController = {
    checkin:function *(next) {   //完成失败
        let params = this.getParams();
        let err =  helper.checkParams(params,['userid','taskid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield Checkin.findOne({where:params});
        if(result) {
            result = result.dataValues;
            if(result.createdAt && moment(result.createdAt).format('YYYYMMDD') ===  moment().format('YYYYMMDD') ) {
                this.body = {
                    success: false,
                    message: '您已经打过卡了'
                }
                return;
            }
        }

        yield Checkin.create(params);

        this.body = {
            success:true,
            message:'success'
        }
    },
    private:function *(next) {  //设置取消私密
        let params = this.getParams();

        let err =  helper.checkParams(params,['userid','taskid','private']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield UserTask.upsert(params);

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

        let result = yield UserTask.destroy({where:params});

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

        let taskInfo = yield  TaskPool.findOne({
            where:{
                id:params.taskid
            },
            attributes:['id','title']
        });

        if(!taskInfo) {
            this.body = {
                success: false,
                message: 'task not found'
            }
            return;
        }

        let userTaskInfo = yield UserTask.findOne({
            where:UserTask.getObject(params)
        });

        if(!userTaskInfo) {
            this.body = {
                success: false,
                message: 'not found'
            }
            return;
        }

        let checkinInfo = yield Checkin.findAll({
            where:UserTask.getObject(params)
        })

        let checkInfo = checkinInfo.map((i)=>{
            return moment(i.createdAt).format('YYYY-MM-DD');
        })
        this.body = {
            success:true,
            "result":{
                "taskInfo":taskInfo,
                userTaskInfo:userTaskInfo,
                checkinInfo:checkInfo
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

        let result = yield Thought.findAll({
            where:Thought.getObject(params)
        });

        this.body = {
            "success":true,
            "result":{
                "list":result
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

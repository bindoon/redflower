'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');
const TaskPool = require('../models/taskpool');
const UserTask = require('../models/usertask');



let createController = {
    hotlist:function *(next) {

        let result = yield TaskPool.findAll({attributes:['id','title']});

        this.body = {
        success:true,
        message:'暂时缺maxNum字段后面补充',
        result: {
            data: result
        }
      }
    },
    query:function *(next) {

        let params = this.getParams();
        let err =  helper.checkParams(params,['keyword'], false);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield TaskPool.findAll({
            attributes:['id','title'],
            where:{
                title: {
                    $like:'%'+params.keyword+'%'
                }
            }
        });


        this.body = {
        success:true,
        message:'success',
        result:{
            data:result
        }
      }
    },
    newname:function*(next) {
        let params = this.getParams();
        let err =  helper.checkParams(params,['keyword']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield TaskPool.findOrCreate({
            where:{
                title:params.keyword
            }
        });

        this.body = {
            success:true,
            message:'success',
            result:{
                taskid:result[0].dataValues.id
            }
        }
    },
    new:function *(next) {    //完成失败

        let params = this.getParams();
        let err =  helper.checkParams(params,['userid','taskid','desc','alarm']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let result = yield UserTask.upsert({
            taskid:params.taskid,
            desc:params.desc,
            alarm:params.alarm,
            userid:params.userid
        });

        this.body = {
            success:true,
            message:'success'
        }
    }

};


module.exports = helper.wrapControllerByTryCatch(createController);

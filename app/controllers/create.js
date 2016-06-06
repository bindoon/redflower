'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');
const TaskPool = require('../models/taskpool');
const UserTask = require('../models/usertask');



let createController = {
    hotlist:function *(next) {

        let result = yield TaskPool.findAll();

        this.body = {
        success:true,
        message:'success',
        result: {
            data: [{
                title:'每天阅读半小时',
                nowNum:101

            },{
                title:'每天早起',
                nowNum:99

            },{
                title:'戒烟',
                nowNum:100

            },{
                title:'读书',
                nowNum:100

            }
            ]
        }
      }
    },
    query:function *(next) {

      this.body = {
        success:true,
        message:'success',
        result:{
            data:[
                '每日看书','每日阅读','天天看书','天天阅读'
            ]
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
                info:{
                    taskid:result[0].dataValues.id
                }
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

        let result = yield UserTask.findOrCreate({
            taskid:params.taskid,
            desc:params.desc,
            alarm:params.alarm,
            userid:params.userid
        });

        this.body = {
            success:true,
            message:'success',
            result:{
                info:result.dataValues
            }
        }
    }

};


module.exports = helper.wrapControllerByTryCatch(createController);

'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');

const TaskPool = require('../models/taskpool');


let taskController = {
    checkin:function *(next) {   //完成失败
        this.body = {
            success:true,
            message:'success'
        }
    },
    private:function *(next) {  //设置取消私密
        this.body = {
            success:true,
            message:'success'
        }
    },
    remove:function *(next) {
        let result = yield TaskPool.findAll();

        this.body = {
            success:true,
            message:'success'
        }
    }
};


module.exports = helper.wrapControllerByTryCatch(taskController);

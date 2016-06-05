'use strict';

/**
 * 首页
 * @type {dev|exports|module.exports}
 */

const logger = require('koa-logger');
const helper = require('../lib/helper');

const UserTask = require('../models/usertask');


let indexController = {


  /**
   * 获取项目列表的接口
   */
    index: function *(next) {
      yield this.render('index', {
        title: 'Hello World Koa!'
      });
    },

    tasklist:function *(next) {
        let params = this.getParams();
        let err =  helper.checkParams(params,['userid']);
        if(err.length) {
            this.body = helper.error(err.join(',')+' required');
            return;
        }

        let usertask = yield UserTask.findAll({where:{userid:params.userid}});


        this.body = {
        success:true,
        message:'success',
        result: {
            data: [{
                taskid:1,
                title:'每日早起',
                alarm:'6:03',
                weekFlower:29,
                insistMonth:4,
                private:false
            },{
                taskid:2,
                title:'每日练功一小时',
                alarm:'14:03',
                weekFlower:20,
                insistMonth:5,
                private:false
            }
            ]
        }
      }
    }

};


module.exports = helper.wrapControllerByTryCatch(indexController);

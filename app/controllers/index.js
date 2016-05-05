'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');



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

      this.body = {
        success:true,
        message:'success',
        result: {
            data: [{
                title:'每日早起',
                alarmClock:'6:03',
                repeatDay:[0,1,2], //周末，周一，周二
                weekFlower:29,
                insistMonth:4,
                isPrivate:false
            },{
                title:'每日练功一小时',
                alarmClock:'14:03',
                repeatDay:[1,2], //周末，周一，周二
                weekFlower:20,
                insistMonth:5,
                isPrivate:false
            }
            ]
        }
      }
    },
    remove:function *(next) {

      this.body = {
        success:true,
        message:'success'
      }
    },
    checkin:function *(next) {    //完成失败
      this.body = {
        success:true,
        message:'success'
      }
    }



};


module.exports = helper.wrapControllerByTryCatch(indexController);

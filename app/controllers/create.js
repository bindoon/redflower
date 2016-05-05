'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');



let createController = {
    hotlist:function *(next) {

      this.body = {
        success:true,
        message:'success',
        result: {
            data: [{
                title:'每天阅读半小时',
                nowNum:100

            },{
                title:'每天早起',
                nowNum:100

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
    new:function *(next) {    //完成失败
      this.body = {
        success:true,
        message:'success'
      }
    }



};


module.exports = helper.wrapControllerByTryCatch(createController);

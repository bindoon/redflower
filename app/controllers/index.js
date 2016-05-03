'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');



let groupController = {


  /**
   * 获取项目列表的接口
   */
  index: function *(next) {
    console.log(/index/)

      yield this.render('index', {
        title: 'Hello World Koa!'
      });
    }



};


module.exports = helper.wrapControllerByTryCatch(groupController);

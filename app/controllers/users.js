'use strict';


const logger = require('koa-logger');
const helper = require('../lib/helper');



let groupController = {


  /**
   * 获取项目列表的接口
   */
  list: function*(next) {

  this.body = 'this a users response!';


  }
};


module.exports = helper.wrapControllerByTryCatch(groupController);

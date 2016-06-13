'use strict';

const _ = require('lodash');

const logger = require('koa-logger');

module.exports = {

    /**
     * 用 try catch 包装 controller 对象
     *
     * @param {Object} obj
     * @return {Object}
     */
    wrapControllerByTryCatch: (obj) => {

        let real = {};

        _.map(obj, (value, key) => {
            real[key] = function* () {
                try {
                    yield obj[key].apply(this);
                } catch (err) {
                    console.error(err);
                    logger.error(err);
                    this.body = {success: false, message: err.message};
                }
            };
        });

        return real;
    },

    /**
     * 筛选对象的字段
     *
     * @param  {Object} data 原始对象
     * @param  {Array} keys 需要保留的属性
     * @return {Object}      筛选后的对象
     */
     getObjByKeys(data, keys) {

        let result = {};

        keys.forEach((key) => {
            if (data[key]) {
                result[key] = data[key];
            }
        });

        return result;
    },

    checkParams(obj,list, empty) {
        typeof empty === 'undefined' && (empty = true);
        return list.map((i)=>{
            return i in obj? (!empty&&!obj[i]? i:null):i;
        }).filter((i)=>{
            return i!=null
        })
    },
    error(message) {
      return {
          success:false,
          message
      }
    }
};

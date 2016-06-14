'use strict';

/**
 * 首页
 * @type {dev|exports|module.exports}
 */

const logger = require('koa-logger');
const helper = require('../lib/helper');

const UserTask = require('../models/usertask');
const TaskPool = require('../models/taskpool');
const Checkin = require('../models/checkin');
UserTask.belongsTo(TaskPool,{foreignKey:'taskid'});
const moment = require('moment');


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

        let usertask = yield UserTask.findAll({
            where:{userid:params.userid},
            attributes:['taskid','alarm','private'],
            include: {
                model: TaskPool,
                attributes:['title']
            }
        });

        let result = [];
        for (let i =0; i<usertask.length; i++) {
            let item = usertask[i].dataValues;
            item.title = item.TaskPool.title;
            delete item.TaskPool;
            item.weekFlower = 20;
            item.insistMonth = 4;

            let res = yield Checkin.findOne({
                where: {
                    userid: params.userid,
                    taskid: item.taskid,
                    createdAt: {
                        $lt: new Date(),
                        $gte: new Date(moment().format('YYYY-MM-DD 00:00:00'))
                    }
                }
            });

            if(res) {
                item.state = res.state? 1:0;
            } else item.state = -1;
            result.push(item)
        }


        this.body = {
        success:true,
        message:'success',
        result: {
            data:result
            //data: [{
            //    taskid:1,
            //    title:'每日早起',
            //    alarm:'6:03',
            //    weekFlower:29,
            //    insistMonth:4,
            //    private:false
            //},{
            //    taskid:2,
            //    title:'每日练功一小时',
            //    alarm:'14:03',
            //    weekFlower:20,
            //    insistMonth:5,
            //    private:false
            //}
            //]
        }
      }
    }

};


module.exports = helper.wrapControllerByTryCatch(indexController);

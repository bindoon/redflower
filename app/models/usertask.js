'use strict';

const db = global.db;
const helper = require('../lib/helper');

function getModelDefine() {
    return {
        id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: '页面id'
        },
        taskid: {
            type: db.Sequelize.INTEGER,
            allowNull: false,
            comment: '任务id'
        },
        userid: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '用户id'
        },
        title: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '页面标题'
        },
        desc: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '描述'
        },
        pic: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '图片'
        },
        alarm: {
            type: db.Sequelize.DATE,
            comment: '闹钟'
        },
        private: {
            type:db.Sequelize.BOOLEAN,
            comment: '私有'
        }
    };
}

const UserTask = db.define('UserTask', getModelDefine(), {

    tableName: 't_usertask',
    timestamps: true,

    // 类方法
    classMethods: {

        getObject(data) {
            const keys = ['id','taskid','userid','title','desc'];
            return helper.getObjByKeys(data, keys);
        }

    },

    // 实例方法
    instanceMethods: {
    }

});

module.exports = UserTask;


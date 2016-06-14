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
            unique: true,
            comment: '任务id'
        },
        userid: {
            type: db.Sequelize.STRING,
            allowNull: false,
            unique: true,
            comment: '用户id'
        },
        desc: {
            type: db.Sequelize.STRING,
            defaultValue: "",
            comment: '目标'
        },
        pic: {
            type: db.Sequelize.STRING,
            defaultValue: "",
            comment: '图片'
        },
        alarm: {
            type: db.Sequelize.STRING,
            defaultValue: '7:00:00',
            comment: '闹钟'
        },
        private: {
            type:db.Sequelize.BOOLEAN,
            defaultValue: false,
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
            const keys = ['taskid','userid'];
            return helper.getObjByKeys(data, keys);
        }
    },

    // 实例方法
    instanceMethods: {
    }

});

module.exports = UserTask;


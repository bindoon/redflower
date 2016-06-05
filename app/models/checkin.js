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
        status: {
            type: db.Sequelize.INTEGER,
            allowNull: false,
            comment: '状态'
        }
    };
}

const CheckIn = db.define('CheckIn', getModelDefine(), {

    tableName: 't_checkin',
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

module.exports = CheckIn;


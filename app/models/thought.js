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
        content: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '内容'
        },
        pics: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '图片'
        }
    };
}

const Thought = db.define('Thought', getModelDefine(), {

    tableName: 't_thought',
    timestamps: true,

    // 类方法
    classMethods: {

        getObject(data) {
            const keys = ['id','taskid','userid','content'];
            return helper.getObjByKeys(data, keys);
        }

    },

    // 实例方法
    instanceMethods: {
    }

});

module.exports = Thought;


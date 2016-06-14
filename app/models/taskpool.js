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
        title: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '页面标题'
        },
        desc: {
            type: db.Sequelize.STRING,
            defaultValue: '',
            comment: '描述'
        },
        alarm: {
            type: db.Sequelize.STRING,
            defaultValue: '7:00:00',
            comment: '创建人'
        }
    };
}

const TaskPool = db.define('TaskPool', getModelDefine(), {

    tableName: 't_taskpool',
    timestamps: true,

    // 类方法
    classMethods: {
        getObject(data) {
            const keys = ['id','title'];
            return helper.getObjByKeys(data, keys);
        }
    },

    // 实例方法
    instanceMethods: {
    }

});

module.exports = TaskPool;


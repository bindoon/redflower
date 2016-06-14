'use strict';

const db = global.db;
const helper = require('../lib/helper');

function getModelDefine() {
    return {
        id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'id'
        },
        email: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '邮箱'
        },
        username: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '页面标题'
        },
        password: {
            type: db.Sequelize.INTEGER,
            allowNull: false,
            comment: '创建人'
        },
        pic: {
            type: db.Sequelize.STRING,
            comment: '页面json',
            defaultValue: '{};'
        },
        gender: {
            type: db.Sequelize.STRING,
            comment: '页面组件包cdn地址'
        }
    };

}

const User = db.define('User', getModelDefine(), {

    tableName: 't_user',
    timestamps: true,

    // 类方法
    classMethods: {

        getObject(data) {
            const keys = ['id','email','username','password', 'pic', 'gender'];
            return helper.getObjByKeys(data, keys);
        }
    },

    // 实例方法
    instanceMethods: {
    }

});

module.exports = User;


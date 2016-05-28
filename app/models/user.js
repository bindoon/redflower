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
        project_id: {
            type: db.Sequelize.INTEGER,
            allowNull: false,
            comment: '所属项目id'
        },
        title: {
            type: db.Sequelize.STRING,
            allowNull: false,
            comment: '页面标题'
        },
        creator: {
            type: db.Sequelize.INTEGER,
            allowNull: false,
            comment: '创建人'
        },
        json: {
            type: db.Sequelize.TEXT,
            comment: '页面json',
            defaultValue: '{};'
        },
        package_url: {
            type: db.Sequelize.STRING,
            comment: '页面组件包cdn地址'
        }
    };

}

const PageDo = db.define('Page', getModelDefine(), {

    tableName: 'page',
    timestamps: true,

    // 类方法
    classMethods: {

        getObject(data) {
            const keys = ['id','project_id','title','creator', 'json', 'package_url'];
            return helper.getObjByKeys(data, keys);
        }

    },

    // 实例方法
    instanceMethods: {
    }

});

module.exports = PageDo;


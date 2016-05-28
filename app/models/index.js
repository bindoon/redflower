"use strict";

var Sequelize = require("sequelize");

var db = new Sequelize('redflower', 'root','',{dialect:'mysql',host:'127.0.0.1'});
db.authenticate().then(() => {
    console.log('db success')
}).catch((err) => {
    err.message = `数据库连接失败：${err.message}`;
    throw new Error(err);
});

db.Sequelize = Sequelize;
module.exports = db;

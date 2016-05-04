var app = require('koa')()
  , koa = require('koa-router')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , xtpl = require('xtpl/lib/koa')
  , path = require('path')
  , fs = require('fs')
  , onerror = require('koa-onerror');


const routers = require('./app/routers');

//xtemplate模板渲染
xtpl(app,{
    //配置模板目录，指向工程的view目录
    views: __dirname + '/app/views'
});

// // global middlewares
// app.use(views('views', {
//   root: __dirname + '/views',
//   default: 'xtpl'
// }));

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + 'app/public'));


// // routes definition
koa.use('', routers.routes(), routers.allowedMethods());
// koa.use('/users', users.routes(), users.allowedMethods());

// // mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

module.exports = app;

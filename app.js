const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const db = require('./db');

const router = require('./router');

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}));
app.use(json());

app.use(router.routes(),router.allowedMethods());

app.listen(3000, () => {
    console.log('程序监听在3000端口');
});
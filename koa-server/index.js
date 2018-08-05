const Koa = require('koa')
const app = new Koa()
const Config = require('./config/config')
const onerror = require('koa-onerror')
const history = require('koa2-connect-history-api-fallback')
const serve = require('koa-static')
const cors = require('koa-cors')
const route = require('koa-router')
const router = new route()
//错误信息处理
onerror(app)
app.use(history({
    // verbose: true,
    index: '/cinext/index.html',
    whiteList: ['/dist'],
    // rewrites: [
    //     {from: '/^/cinext$/', to: '/cinext/index.html'}
    // ]
}));
app.use(router.routes())
app.use(serve(__dirname + '/public/'))
app.use(cors())
//控制台打印请求信息
app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)

})

app.listen(Config.node.port)
console.log(`server start at port: ${Config.node.port}`)
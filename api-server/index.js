const Koa = require('koa')
const app = new Koa()
const Config = require('./config/config')
const onerror = require('koa-onerror')
const history = require('koa2-connect-history-api-fallback')
const serve = require('koa-static')
const cors = require('koa2-cors')
const route = require('koa-router')
const cinext = require('./mock-data/cinext.js')
const lamp = require('./mock-data/smartLamp.js')
const router = new route()

router.get('/api/get/carousel', (ctx, next) => {
    ctx.body = {
        code: 1,
        data: cinext.slideData
    }
})
router.get('/api/get/lampList', (ctx, next) => {
    ctx.body = {
        code: 1,
        data: lamp.data
    }
})
router.get('/api/get/cirecom', (ctx, next) => {
    ctx.body = {
        code: 1,
        data: cinext.ciRecom
    }
})
router.get('/api/get/hotList/:sequence', (ctx, next) => {
    const sequence = ctx.params.sequence
    if(sequence < 6) {
        if (sequence == 1) {
            ctx.body = {
                code: 1,
                data: cinext.hotList
            }
        }
        else {
            ctx.body = {
                code: 1,
                data: cinext.hotListMore
            }
        }
    }
    else{
        ctx.body = {
            code: 0,
            data: []
        }
    }
})
router.get('/api/get/newsList/:sequence', (ctx, next) => {
    const sequence = ctx.params.sequence
    if(sequence < 6) {
        if (sequence == 1) {
            ctx.body = {
                code: 1,
                data: cinext.newsList
            }
        }
        else {
            ctx.body = {
                code: 1,
                data: cinext.newsListMore
            }
        }
    }
    else{
        ctx.body = {
            code: 0,
            data: []
        }
    }
})
router.get('/api/get/newsListRecom', (ctx, next) => {
            ctx.body = {
                code: 1,
                data: cinext.newsListRecom
            }
})
//错误信息处理
onerror(app)
app.use(cors({
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(router.routes())
app.use(serve(__dirname + '/public/'))
//控制台打印请求信息
app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)

})

app.listen(Config.node.port)
console.log(`server start at port: ${Config.node.port}`)
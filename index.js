const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const helmet = require('koa-helmet')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const parseParamRegion = async (region, ctx, next) => {
    if (region) ctx.query = Object.assign(ctx.query, { region })
    await next()
}
const parseParamType = async (type, ctx, next) => {
    if (type) ctx.query = Object.assign(ctx.query, { type })
    await next()
}
const parseParamColor = async (color, ctx, next) => {
    if (color) ctx.query = Object.assign(ctx.query, { color })
    await next()
}

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()
    router
        .param('region', parseParamRegion)
        .param('type', parseParamType)
        .param('color', parseParamColor)
        .get('/region/:region/:type/:color', async ctx => {
            await app.render(ctx.req, ctx.res, '/region', ctx.query)
        })

    router
        .param('region', parseParamRegion)
        .param('type', parseParamType)
        .get('/region/:region/:type', async ctx => {
            await app.render(ctx.req, ctx.res, '/region', ctx.query)
        })

    router
        .param('region', parseParamRegion)
        .get('/region/:region', async ctx => {
            await app.render(ctx.req, ctx.res, '/region', ctx.query)
        })

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(helmet())
    if (dev) server.use(require('koa-logger')())
    server.use(router.routes())
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})

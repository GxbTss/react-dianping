const app = require('koa')()
const koaRouter = require('koa-router')()

// 首页 --- 广告
const homeAdData = require('./home/ad.js')
koaRouter.get('/api/homead', function(next) {
    this.body = homeAdData
})

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list')
koaRouter.get('/api/homelist/:city/:page', function *(next) {
    // 参数params
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
})

// 搜索结果页
const searchListData = require('./search/list.js')
// 搜索结果 - 三个参数
koaRouter.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    this.body = searchListData
})
// 搜索结果 - 两个参数
koaRouter.get('/api/search/:page/:city/:category', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info')
koaRouter.get('/api/detail/info/:id', function *(next) {
    console.log('详情页-商户信息')

    const params = this.params
    const id = params.id

    console.log('商户id：' + id)
    
    this.body = detailInfo
})

// 详情页 - 用户评论
const detailComment = require('./detail/comment')
koaRouter.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情页 - 用户点评')

    const params = this.params
    const  page = params.page
    const id = params.id

    console.log('用户ID:' + id)
    console.log('当前评论页数:' + page)

    this.body = detailComment
})

// 订单详情
const orderlist = require('./orderlist/orderlist')
koaRouter.get('/api/orderlist/:username', function *(next) {
    console.log('订单详情: ')

    const params = this.params
    const username = params.username
    console.log('用户名:' + username)

    this.body = orderlist
})

// 提交评论
koaRouter.post('/api/submitComment', function *(next) {
    console.log('提交评论')

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

// 开始服务并生成路由
app.use(koaRouter.routes())
app.use(koaRouter.allowedMethods())
app.listen(3300)
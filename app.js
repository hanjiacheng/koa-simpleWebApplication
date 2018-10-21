const Koa = require('koa')
const path = require('path')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')

const app = new Koa()

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, './view/home'),// 指定视图目录
    nunjucksConfig: {
      trimBlocks: true // 开启转义 防Xss
    }
  }));

 app.use(bodyParser())
 router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

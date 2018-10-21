koa-simpleWebApplication
=
  在学习使用koa之前，首先要知道什么是koa？学习koa需要掌握的基础知识。<br>其实，koa可以简单理解为一个web框架，类似Django。其中我们需要掌握的基础知识是node.js、ES6语法、了解HTTP协议。<br>下面我将使用koa简单实现一些web应用，包括路由、HTTP请求和简单模板。具体代码在[github](https://github.com/hanjiacheng/koa-simpleWebApplication)中，这里只简单记录下过程和安装配置。

一．Koa环境搭建
-
#### 1.安装node.js<br>

#### 2.安装koa<br>
  npm i koa -S或者npm install koa@2.0.0<br>
![image](https://github.com/hanjiacheng/koa-simpleWebApplication/blob/master/image/1.png)

出现warning:<br>

![image](https://github.com/hanjiacheng/koa-simpleWebApplication/blob/master/image/2.png)


二.重要概念理解
-
#### 中间件（middleware）<br>
async函数就是中间件。其中的两个参数ctx和next。<br>
#### 参数：<br>
ctx作为上下文使用，包含了基本的ctx.request和ctx.response。可以直接通过 ctx 获取一些常用的属性或者方法，比如，ctx.url、ctx.response.type 、ctx.response.body<br>
#### next 参数的作用是将处理的控制权转交给下一个中间件，而 next() 后面的代码，将会在下一个中间件及后面的中间件（如果有的话）执行结束后再执行。

三．路由实现
-
#### 使用koa-router实现路由，负责处理URL映射<br>
#### 3.1 安装koa-router<br>
npm i koa-router -S<br>

![image](https://github.com/hanjiacheng/koa-simpleWebApplication/blob/master/image/3.png)

仍然出现warning:<br>

![image](https://github.com/hanjiacheng/koa-simpleWebApplication/blob/master/image/4.png)

四．HTTP请求
-
  koa-router 提供了 .get、.post、.put 和 .del 接口来处理各种请求，但实际业务上，我们大部分只会接触到 POST 和 GET，所以接下来只针对这两种请求类型来说明。<br>
http请求的数据传递方式一般有三种。分别是请求参数放在 URL 后面、请求参数放在 URL 中间、请求参数放在 body 中。<br>
当用 post 方式请求时，我们会遇到一个问题：post 请求通常都会通过表单或 JSON 形式发送，而无论是 Node 还是 Koa，都 没有提供 解析 post 请求参数的功能。为了解决问题，需要koa-bodyparser 包。<br>
安装：npm i koa-bodyparser -S<br>

![image](https://github.com/hanjiacheng/koa-simpleWebApplication/blob/master/image/5.png)


五.view logic
-
#### 5.1 安装koa-nunjucks-2模板引擎<br>
npm i koa-nunjucks-2 -S<br>

![image](https://github.com/hanjiacheng/koa-simpleWebApplication/blob/master/image/6.png)



六．作业题 RESTful API 的优缺点<br>
-
#### 优点：<br>
* 适合开放性高的API。这几年的由于移动互联网流行使得前端设备多样化，业界急需一种统一的机制来规范API设计，使得API适用于各种各样的前端设备，REST符合这种需求。<br>
* 行为和资源分离，更容易理解。<br>
#### 缺点：<br>
* 对后端开发人员要求高，业务逻辑有时难以被抽象为资源的增删改查。<br>
* 对前端开发人员不友好，API粒度较粗，难以查询符合特殊要求的数据，同样的业务要比普通的API需要更多次HTTP请求。<br>

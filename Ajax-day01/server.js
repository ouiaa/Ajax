// 1.引入express
const { response, json, request } = require('express')
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// 1）SET请求使用get方法
// /server页面响应GET请求
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    response.send('hello ajax-2')
})
// 2）POST请求使用post方法
// all可以接收任意类型的请求
// /json-server页面响应POST请求及响应JSON数据
app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 响应头，*表示接收所有的响应头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 响应一个数据
    let data = {
        name: '孙悟空'
    }
    // 设置响应体
    // response.send('hello ajax')
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    response.send(str)
})
// 3）/ie页面 针对IE缓存问题
app.get('/ie', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    response.send('hello ajax-2')
})
// 4）/delay页面 延迟响应模拟超时和网络异常
app.get('/delay', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体  3s后再响应
    setTimeout(() => {
        response.send('延迟响应')
    }, 3000);
})
// 5)/jquery-server页面 jquery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体 
    let data = {
        name: '孙悟空'
    }
    // response.send('hello jquery ajax')
    // response.send(JSON.stringify(data))
    setTimeout(() => {
        response.send('延迟响应')
    }, 3000);
})
// 6）/axios-server页面 axios服务
app.all('/axios-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 响应头，*表示接收所有的响应头信息,写自定义头信息时需要写
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    let data = {
        name: '孙悟空'
    }
    response.send(JSON.stringify(data))
})
// 7）/fetch-server页面 fetch服务
app.all('/fetch-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 响应头，*表示接收所有的响应头信息,写自定义头信息时需要写
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    let data = {
        name: '孙悟空'
    }
    response.send(JSON.stringify(data))
})
// 8）/jsonp-server页面 jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('hello jsonp ajax')
    let data = {
        name: '刘德华'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果 使用模板字符串调用函数
    response.end(`handle(${str})`)
})
// 9）/check-username页面 检测用户名是否存在
app.all('/check-username', (request, response) => {
    let data = {
        exist: 1,
        msg: '用户名已存在'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果 使用模板字符串调用函数
    response.end(`handle(${str})`)
})
// 10）/jquery-jsonp-server页面 jquery发送jsonp请求
app.all('/jquery-jsonp-server', (request, response) => {
    let data = {
        name: '孙悟空',
        parter: ['唐僧', '猪八戒', '沙僧']
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 接收callback参数
    let cb = request.query.callback
    // 返回结果 使用模板字符串调用函数
    response.end(`${cb}(${str})`)
})
// 11）/cors-server页面 CORS解决跨域问题
app.all('/cors-server', (request, response) => {
    // 设置响应头 设置允许跨域 *表示所有页面，也可以写成指定页面才能跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('hello cors')
})
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...');
})
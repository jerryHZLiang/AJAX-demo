# nodejs-test


## 启动应用

`node server.js 8888`

或者

`node server 8888`

## 添加路由

1. 编辑 server.js 文件，添加 if else
2. 重新运行 node server.js 8888



## 后台启动应用

`node server.js 8888 >! log 2>&1 &`


##添加AJAX CORS跨域
1. 测试 vi etc/hosts 
   添加 "127.0.0.1 hzl.com:8001 
        127.0.0.1 jack.com:8002"测试
2. `node server 8001` and  `node server 8002 ` 
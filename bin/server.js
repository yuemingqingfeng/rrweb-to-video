const express = require('express');
const path = require('path');
const app = express()

const createServer = function () {

  //本地化配置
  app.use(express.static('public'));

  
  const server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("启动本地服务 http://127.0.0.1:%s", port)
  })
}

module.exports = {
  createServer
}

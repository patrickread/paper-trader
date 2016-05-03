const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/../index.html')
    const publicPath = express.static(path.join(__dirname, '../public'))

    app.use('/public', publicPath)
    app.get('/', function (req, res) {
      res.sendFile(indexPath) 
    })

    app.get('/portfolio', function (req, res) {
      res.sendFile(indexPath) 
    })

    app.get('/transactions', function (req, res) {
      res.sendFile(indexPath) 
    })

    return app
  }
}

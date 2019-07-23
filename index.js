require('dotenv').config()
const Proxy = require('static-web-proxy')
const crypto = require('crypto')
const path = require('path')
const proxy = new Proxy({
  proxy: [
    {
      host: process.env.API_HOST || 'd3find_api',
      port: process.env.API_PORT || 9501,
      path: '/api/',
      targetPath: '/',
    },
  ],
  web: {
    dir: path.join(__dirname, '/dist')
  },
})

proxy.start()

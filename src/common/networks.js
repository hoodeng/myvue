// URL = 'https://pgykeji.com/api'
// URL = 'http://192.168.1.4:8080/api'
URL = 'http://127.0.0.1:8080/api'
const actions = {
  getAddrTreeCascade: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/addr/cascade'
    request.request(url, data, success, fail)
  },
  getCategoryTree: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/cat/tree'
    request.request(url, data, success, fail)
  },
  getTopCatAndSvrs: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/cat/svr/tree'
    request.request(url, data, success, fail)
  },
  getTopCatList: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/top/cat/list'
    request.request(url, data, success, fail)
  },
  getServices: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/cat/list'
    request.request(url, data, success, fail)
  },
  getServicesType: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/svr/list'
    request.request(url, data, success, fail)
  },
  getCat: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/cat/list'
    request.request(url, data, success, fail)
  },
  getAddress: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/addr/list'
    request.request(url, data, success, fail)
  },
  getExpress: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/dict/expr/com/list'
    request.request(url, data, success, fail)
  },
  createOrder: function(data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/create'
    // let url = URL2 + '/user/order/create'
    request.request(url, data, success, fail)
  },
  search: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/search'
    request.request(url, data, success, fail)
  },
  detail: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/detail'
    request.request(url, data, success, fail)
  },
  getNewestOrder: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/index/order/newest'
    request.request(url, data, success, fail);
  },
  getUserToPayOrderCount: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/topay/count'
    request.request(url, data, success, fail);
  },
  getUserToPayOrderList: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/topay'
    request.request(url, data, success, fail);
  },
  getUserAllOrderList: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/all'
    request.request(url, data, success, fail);
  },
  cancelOrder: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/cancel'
    request.request(url, data, success, fail);
  },
  createWxPay: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/order/wxpay/create'
    request.request(url, data, success, fail);
  },
  login: function(jsCode, success, fail) {
    let request = require('request')
    let url = URL + '/user/wxlogin'
    request.request(url, {
      jsCode: jsCode
    }, success, fail);
  },
  feedback: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/user/feedback'
    request.request(url, data, success, fail);
  },
  getBlog: function (data, success, fail) {
    let request = require('request')
    let url = URL + '/blog/article'
    request.request(url, data, success, fail);
  }
}

module.exports = actions
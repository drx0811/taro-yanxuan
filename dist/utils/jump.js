'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jump;

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PAGE_WEBVIEW = '/pages/webview/webview';

/**
 * // NOTE 后端返回的 url 可能是网页链接，需要在 webview 中打开
 * 也可能是小程序自身的链接，只能用 navigate/redirect 之类的打开
 * 就需要有个地方统一判断处理
 */
function jump(options) {
  var url = options.url,
      _options$title = options.title,
      title = _options$title === undefined ? '' : _options$title,
      _options$payload = options.payload,
      payload = _options$payload === undefined ? {} : _options$payload,
      _options$method = options.method,
      method = _options$method === undefined ? 'navigateTo' : _options$method;


  if (/^https?:\/\//.test(url)) {
    _index2.default[method]({
      url: urlStringify(PAGE_WEBVIEW, { url: url, title: title })
    });
  } else if (/^\/pages\//.test(url)) {

    _index2.default[method]({
      url: urlStringify(url, payload)
    });
    // TODO H5 不支持 switchTab，暂时 hack 下
  }
}

function urlStringify(url, payload) {
  var encode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var arr = Object.keys(payload).map(function (key) {
    return key + '=' + (encode ? encodeURIComponent(payload[key]) : payload[key]);
  });

  // NOTE 注意支付宝小程序跳转链接如果没有参数，就不要带上 ?，否则可能无法跳转
  return arr.length ? url + '?' + arr.join('&') : url;
}
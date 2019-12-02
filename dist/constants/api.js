"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
var host = exports.host = "https://miniapp.you.163.com";
var hostM = exports.hostM = "https://m.you.163.com";
/* eslint-enable */

// pic
var CDN = exports.CDN = 'https://yanxuan.nosdn.127.net';

// home
var API_HOME = exports.API_HOME = host + "/xhr/index/index.json";
var API_HOME_SEARCH_COUNT = exports.API_HOME_SEARCH_COUNT = host + "/xhr/search/displayBar.json";
var API_HOME_PIN = exports.API_HOME_PIN = hostM + "/pin/min/item/recommend.json";
var API_HOME_RECOMMEND = exports.API_HOME_RECOMMEND = host + "/xhr/rcmd/index.json";

// cate
var API_CATE = exports.API_CATE = host + "/xhr/list/category.json";
var API_CATE_SUB = exports.API_CATE_SUB = host + "/xhr/list/subCate.json";
var API_CATE_SUB_LIST = exports.API_CATE_SUB_LIST = host + "/xhr/list/l2Items2.json";

// cart
var API_CART = exports.API_CART = host + "/xhr/promotionCart/getCarts.json";
var API_CART_NUM = exports.API_CART_NUM = host + "/xhr/promotionCart/getMiniCartNum.json";
var API_CART_RECOMMEND = exports.API_CART_RECOMMEND = host + "/xhr/rcmd/cart.json";
var API_CART_ADD = exports.API_CART_ADD = host + "/xhr/promotionCart/add.json";
var API_CART_UPDATE = exports.API_CART_UPDATE = host + "/xhr/promotionCart/update.json";
var API_CART_UPDATE_CHECK = exports.API_CART_UPDATE_CHECK = host + "/xhr/promotionCart/updateCheck.json";

// user
var API_USER = exports.API_USER = host + "/xhr/user/getDetail.json";
var API_USER_LOGIN = exports.API_USER_LOGIN = host + "/xhr/u/mailLogin.json";
var API_CHECK_LOGIN = exports.API_CHECK_LOGIN = host + "/xhr/u/checkLogin.json";

// item
var API_ITEM = exports.API_ITEM = host + "/xhr/item/detail.json";
var API_ITEM_RECOMMEND = exports.API_ITEM_RECOMMEND = host + "/xhr/rcmd/itemDetail.json";
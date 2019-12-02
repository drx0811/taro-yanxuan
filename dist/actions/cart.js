"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchUpdateCheck = exports.dispatchUpdate = exports.dispatchAdd = exports.dispatchRecommend = exports.dispatchCartNum = exports.dispatchCart = undefined;

var _cart = require("../constants/cart.js");

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

/**
 * 购物车信息
 * @param {*} payload
 */
var dispatchCart = exports.dispatchCart = function dispatchCart(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CART,
    type: _cart.CART_INFO,
    payload: payload
  });
};

/**
 * 购物车物品数量
 * @param {*} payload
 */
var dispatchCartNum = exports.dispatchCartNum = function dispatchCartNum(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CART_NUM,
    fetchOptions: {
      showToast: false,
      autoLogin: false
    },
    type: _cart.CART_NUM,
    payload: payload
  });
};

/**
 * 购物车推荐
 * @param {*} payload
 */
var dispatchRecommend = exports.dispatchRecommend = function dispatchRecommend(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CART_RECOMMEND,
    type: _cart.CART_RECOMMEND,
    payload: payload
  });
};

/**
 * 添加商品到购物车
 * @param {*} payload
 */
var dispatchAdd = exports.dispatchAdd = function dispatchAdd(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CART_ADD,
    method: 'POST',
    type: _cart.CART_ADD,
    payload: payload
  });
};

/**
 * 更新商品信息
 * @param {*} payload
 */
var dispatchUpdate = exports.dispatchUpdate = function dispatchUpdate(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CART_UPDATE,
    method: 'POST',
    type: _cart.CART_UPDATE,
    payload: payload
  });
};

/**
 * 更新商品选中状态
 * @param {*} payload
 */
var dispatchUpdateCheck = exports.dispatchUpdateCheck = function dispatchUpdateCheck(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CART_UPDATE_CHECK,
    method: 'POST',
    type: _cart.CART_UPDATE_CHECK,
    payload: payload
  });
};
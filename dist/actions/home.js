"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchRecommend = exports.dispatchPin = exports.dispatchSearchCount = exports.dispatchHome = undefined;

var _home = require("../constants/home.js");

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

/**
 * 首页数据
 * @param {*} payload
 */
var dispatchHome = exports.dispatchHome = function dispatchHome(payload) {
  return (0, _redux.createAction)({
    url: _api.API_HOME,
    type: _home.HOME_INFO,
    payload: payload
  });
};

/**
 * 商品总数
 * @param {*} payload
 */
var dispatchSearchCount = exports.dispatchSearchCount = function dispatchSearchCount(payload) {
  return (0, _redux.createAction)({
    url: _api.API_HOME_SEARCH_COUNT,
    type: _home.HOME_SEARCH_COUNT,
    payload: payload
  });
};

/**
 * 拼团
 * @param {*} payload
 */
var dispatchPin = exports.dispatchPin = function dispatchPin(payload) {
  return (0, _redux.createAction)({
    url: _api.API_HOME_PIN,
    type: _home.HOME_PIN,
    payload: payload
  });
};

/**
 * 推荐商品
 * @param {*} payload
 */
var dispatchRecommend = exports.dispatchRecommend = function dispatchRecommend(payload) {
  return (0, _redux.createAction)({
    url: _api.API_HOME_RECOMMEND,
    type: _home.HOME_RECOMMEND,
    payload: payload
  });
};
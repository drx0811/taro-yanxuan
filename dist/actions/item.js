"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchItemRecommend = exports.dispatchItem = undefined;

var _item = require("../constants/item.js");

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

/**
 * 首页数据
 * @param {*} payload
 */
var dispatchItem = exports.dispatchItem = function dispatchItem(payload) {
  return (0, _redux.createAction)({
    url: _api.API_ITEM,
    type: _item.ITEM_INFO,
    payload: payload
  });
};

/**
 * 推荐商品
 * @param {*} payload
 */
var dispatchItemRecommend = exports.dispatchItemRecommend = function dispatchItemRecommend(payload) {
  return (0, _redux.createAction)({
    url: _api.API_ITEM_RECOMMEND,
    type: _item.ITEM_RECOMMEND,
    payload: payload
  });
};
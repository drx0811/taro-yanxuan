"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchSubList = exports.dispatchSubMenu = exports.dispatchMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cate = require("../constants/cate.js");

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

/**
 * 分类菜单、列表
 * @param {*} payload
 */
var dispatchMenu = exports.dispatchMenu = function dispatchMenu(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CATE,
    type: _cate.CATE_MENU,
    payload: payload
  });
};

/**
 * 子级菜单
 * @param {*} payload
 */
var dispatchSubMenu = exports.dispatchSubMenu = function dispatchSubMenu(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CATE_SUB,
    type: _cate.CATE_SUB,
    payload: payload
  });
};

/**
 * 子级列表
 * @param {*} payload
 */
var dispatchSubList = exports.dispatchSubList = function dispatchSubList(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CATE_SUB_LIST,
    type: _cate.CATE_SUB_LIST,
    cb: function cb(res) {
      return _extends({}, res, { id: payload.categoryL2Id });
    },
    payload: payload
  });
};
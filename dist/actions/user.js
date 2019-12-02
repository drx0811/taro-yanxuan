"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchLogout = exports.dispatchLogin = exports.dispatchUser = undefined;

var _user = require("../constants/user.js");

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

/**
 * 获取用户信息
 * @param {*} payload
 */
var dispatchUser = exports.dispatchUser = function dispatchUser(payload) {
  return (0, _redux.createAction)({
    url: _api.API_USER,
    fetchOptions: {
      showToast: false,
      autoLogin: false
    },
    type: _user.USER_INFO,
    payload: payload
  });
};

/**
 * 用户登录
 * @param {*} payload
 */
var dispatchLogin = exports.dispatchLogin = function dispatchLogin(payload) {
  return (0, _redux.createAction)({
    url: _api.API_USER_LOGIN,
    type: _user.USER_LOGIN,
    payload: payload
  });
};

/**
 * 用户退出登录
 */
var dispatchLogout = exports.dispatchLogout = function dispatchLogout() {
  return { type: _user.USER_LOGOUT };
};
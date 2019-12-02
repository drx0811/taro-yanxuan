"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = user;

var _user = require("../constants/user.js");

var INITIAL_STATE = {
  userInfo: {}
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _user.USER_INFO:
      {
        return _extends({}, state, {
          userInfo: _extends({}, action.payload, {
            login: true
          })
        });
      }
    case _user.USER_LOGIN:
      {
        return _extends({}, state);
      }
    case _user.USER_LOGOUT:
      {
        return _extends({}, INITIAL_STATE);
      }
    default:
      return state;
  }
}
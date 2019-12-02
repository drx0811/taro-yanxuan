"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = cart;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _cart = require("../constants/cart.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  cartInfo: {},
  recommend: {}

  // TODO H5、RN 还不支持 setTabBarBadge
};var updateTabBar = function updateTabBar(count) {
  if (count > 0) {
    _index2.default.setTabBarBadge({
      index: 2,
      text: "" + count
    });
  } else {
    _index2.default.removeTabBarBadge({
      index: 2
    });
  }
};

function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _cart.CART_INFO:
    case _cart.CART_ADD:
    case _cart.CART_UPDATE:
    case _cart.CART_UPDATE_CHECK:
      {
        return _extends({}, state, {
          cartInfo: action.payload
        });
      }
    case _cart.CART_NUM:
      {
        updateTabBar(action.payload.countCornerMark);
        return state;
      }
    case _cart.CART_RECOMMEND:
      {
        return _extends({}, state, {
          recommend: action.payload
        });
      }
    default:
      return state;
  }
}
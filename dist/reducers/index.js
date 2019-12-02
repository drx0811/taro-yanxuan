"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _cate = require("./cate.js");

var _cate2 = _interopRequireDefault(_cate);

var _cart = require("./cart.js");

var _cart2 = _interopRequireDefault(_cart);

var _home = require("./home.js");

var _home2 = _interopRequireDefault(_home);

var _item = require("./item.js");

var _item2 = _interopRequireDefault(_item);

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  home: _home2.default,
  cate: _cate2.default,
  cart: _cart2.default,
  item: _item2.default,
  user: _user2.default
});
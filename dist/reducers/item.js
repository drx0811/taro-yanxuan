"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = item;

var _item = require("../constants/item.js");

var INITIAL_STATE = {
  itemInfo: {}
};

function item() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _item.ITEM_INFO:
      {
        return _extends({}, state, {
          itemInfo: action.payload
        });
      }
    case _item.ITEM_RECOMMEND:
      {
        return _extends({}, state);
      }
    default:
      return state;
  }
}
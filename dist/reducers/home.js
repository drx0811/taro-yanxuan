"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = home;

var _home = require("../constants/home.js");

var INITIAL_STATE = {
  homeInfo: {},
  searchCount: 0,
  pin: [],
  recommend: []
};

function home() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _home.HOME_INFO:
      {
        return _extends({}, state, {
          homeInfo: action.payload
        });
      }
    case _home.HOME_SEARCH_COUNT:
      {
        return _extends({}, state, {
          searchCount: action.payload.count
        });
      }
    case _home.HOME_PIN:
      {
        // 每3个分成一组
        var pin = [];
        action.payload.forEach(function (item, index) {
          var groupIndex = parseInt(index / 3);
          if (!pin[groupIndex]) {
            pin[groupIndex] = [];
          }
          pin[groupIndex].push(item);
        });
        return _extends({}, state, { pin: pin });
      }
    case _home.HOME_RECOMMEND:
      {
        return _extends({}, state, {
          recommend: state.recommend.concat(action.payload.rcmdItemList)
        });
      }
    default:
      return state;
  }
}
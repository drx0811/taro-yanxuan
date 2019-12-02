"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = cate;

var _cate = require("../constants/cate.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  menu: [],
  category: [],
  subMenu: [],
  subCategory: {}
};

function cate() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _cate.CATE_MENU:
      {
        var categoryList = action.payload.categoryList;

        var menu = categoryList.map(function (_ref) {
          var id = _ref.id,
              name = _ref.name;
          return { id: id, name: name };
        });
        return _extends({}, state, { menu: menu, category: categoryList });
      }
    case _cate.CATE_SUB:
      {
        return _extends({}, state, {
          subMenu: action.payload.category.subCategoryList
        });
      }
    case _cate.CATE_SUB_LIST:
      {
        var _action$payload = action.payload,
            id = _action$payload.id,
            itemList = _action$payload.itemList;

        return _extends({}, state, {
          subCategory: _extends({}, state.subCategory, _defineProperty({}, id, itemList))
        });
      }
    default:
      return state;
  }
}
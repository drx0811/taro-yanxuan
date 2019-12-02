"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Menu, _BaseComponent);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "list", "__fn_onClick", "current"], _this.handleClick = function (id) {
      _this.__triggerPropsFn("onClick", [null].concat([id]));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Menu.prototype.__proto__ || Object.getPrototypeOf(Menu.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          current = _props.current,
          list = _props.list;

      var loopArray0 = list.map(function (item) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var active = item.$original.id === current;
        var $loopState__temp2 = (0, _index4.default)('cate-menu__item', active && 'cate-menu__item--active');
        var $loopState__temp4 = (0, _index4.default)('cate-menu__item-name', active && 'cate-menu__item-name--active');
        return {
          active: active,
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        list: list
      });
      return this.__state;
    }
  }]);

  return Menu;
}(_index.Component), _class.properties = {
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "current": {
    "type": null,
    "value": null
  },
  "list": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick"], _class.defaultProps = {
  list: []
}, _temp2);
exports.default = Menu;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Menu));
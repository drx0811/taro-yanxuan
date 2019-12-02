"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _style = require("../../utils/style.js");

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonItem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ButtonItem, _BaseComponent);

  function ButtonItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ButtonItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonItem.__proto__ || Object.getPrototypeOf(ButtonItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "loading", "disabled", "openType", "text", "type", "plain", "compStyle", "textStyle"], _this.getCls = function (base) {
      var _this$props = _this.props,
          type = _this$props.type,
          plain = _this$props.plain,
          disabled = _this$props.disabled;

      return (0, _index4.default)(base, type === 'primary' && base + "--primary", plain && base + "--plain", disabled && base + "--disabled");
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ButtonItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ButtonItem.prototype.__proto__ || Object.getPrototypeOf(ButtonItem.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          compStyle = _props.compStyle,
          textStyle = _props.textStyle,
          openType = _props.openType,
          loading = _props.loading,
          disabled = _props.disabled,
          text = _props.text,
          onClick = _props.onClick,
          onGetUserInfo = _props.onGetUserInfo;

      var anonymousState__temp = this.getCls('comp-button');
      var anonymousState__temp2 = (0, _index.internal_inline_style)((0, _style.postcss)(compStyle));
      var anonymousState__temp3 = this.getCls('comp-button__txt');
      var anonymousState__temp4 = (0, _index.internal_inline_style)(textStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loading: loading,
        disabled: disabled,
        openType: openType,
        text: text
      });
      return this.__state;
    }
  }, {
    key: "funPrivatenyEbU",
    value: function funPrivatenyEbU() {
      this.__triggerPropsFn("onClick", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateknnuD",
    value: function funPrivateknnuD() {
      this.__triggerPropsFn("onGetUserInfo", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return ButtonItem;
}(_index.Component), _class.properties = {
  "type": {
    "type": null,
    "value": null
  },
  "plain": {
    "type": null,
    "value": null
  },
  "disabled": {
    "type": null,
    "value": null
  },
  "compStyle": {
    "type": null,
    "value": null
  },
  "textStyle": {
    "type": null,
    "value": null
  },
  "openType": {
    "type": null,
    "value": null
  },
  "loading": {
    "type": null,
    "value": null
  },
  "text": {
    "type": null,
    "value": null
  },
  "onClick": {
    "type": null,
    "value": null
  },
  "onGetUserInfo": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "__fn_onGetUserInfo": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["funPrivatenyEbU", "funPrivateknnuD"], _class.defaultProps = {
  compStyle: '',
  textStyle: '',
  openType: '',
  plain: false,
  loading: false,
  disabled: false,
  onClick: function onClick() {},
  onGetUserInfo: function onGetUserInfo() {}
}, _temp2);
exports.default = ButtonItem;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ButtonItem));
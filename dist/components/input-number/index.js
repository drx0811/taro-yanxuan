"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var minusIcon = "/components/input-number/assets/minus.png";
var minusDisabledIcon = "/components/input-number/assets/minus-disabled.png";
var plusIcon = "/components/input-number/assets/plus.png";

var InputNumber = (_temp2 = _class = function (_BaseComponent) {
  _inherits(InputNumber, _BaseComponent);

  function InputNumber() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "isMinusDisabled", "minusDisabledIcon", "minusIcon", "plusIcon", "num", "__fn_onChange", "compStyle", "numStyle"], _this.handleMinus = function () {
      if (_this.props.num > 1) {
        _this.__triggerPropsFn("onChange", [null].concat([_this.props.num - 1]));
      }
    }, _this.handlePlus = function () {
      _this.__triggerPropsFn("onChange", [null].concat([_this.props.num + 1]));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputNumber, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(InputNumber.prototype.__proto__ || Object.getPrototypeOf(InputNumber.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          num = _props.num,
          compStyle = _props.compStyle,
          numStyle = _props.numStyle;

      var isMinusDisabled = num <= 1;
      var anonymousState__temp = (0, _index.internal_inline_style)(compStyle);
      var anonymousState__temp2 = (0, _index4.default)('comp-input-number__minus', isMinusDisabled && 'comp-input-number__minus--disabled');
      var anonymousState__temp3 = (0, _index.internal_inline_style)(numStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        isMinusDisabled: isMinusDisabled,
        minusDisabledIcon: minusDisabledIcon,
        minusIcon: minusIcon,
        plusIcon: plusIcon,
        num: num
      });
      return this.__state;
    }
  }]);

  return InputNumber;
}(_index.Component), _class.properties = {
  "num": {
    "type": null,
    "value": null
  },
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "compStyle": {
    "type": null,
    "value": null
  },
  "numStyle": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleMinus", "handlePlus"], _class.defaultProps = {
  num: 0,
  compStyle: '',
  optStyle: '',
  numStyle: '',
  onChange: function onChange() {}
}, _temp2);
exports.default = InputNumber;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(InputNumber));
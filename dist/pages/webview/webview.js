"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * // NOTE Taro 的 RN 端还未提供 WebView 组件，可以引入原生组件来解决
 * （备注：Taro v1.2.16 已支持，这块代码还是保留作为演示）
 *
 * Taro 有开启了 tree shaking，对于未用到的内容编译时会自动去除
 * 因此可以把相应端的内容都 import 进来，再根据环境进行调用即可
 *
 * 另外 1.2.17 版本有提供了统一接口方式 https://nervjs.github.io/taro/docs/envs.html
 * 可以参考 ./src/pages/user-login 中的实现
 */

var _TaroComponentClass = (_temp2 = _class = function (_BaseComponent) {
  _inherits(_TaroComponentClass, _BaseComponent);

  function _TaroComponentClass() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _TaroComponentClass);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _TaroComponentClass.__proto__ || Object.getPrototypeOf(_TaroComponentClass)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["url"], _this.config = {
      navigationBarTitleText: ''
    }, _this.url = '', _this.title = '', _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_TaroComponentClass, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(_TaroComponentClass.prototype.__proto__ || Object.getPrototypeOf(_TaroComponentClass.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.url = decodeURIComponent(this.$router.params.url || '');
      this.title = decodeURIComponent(this.$router.params.title || '');
      _index2.default.setNavigationBarTitle({ title: this.title });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      var url = this.url;

      Object.assign(this.__state, {
        url: url
      });
      return this.__state;
    }
  }]);

  return _TaroComponentClass;
}(_index.Component), _class.properties = {}, _class.$$events = [], _temp2);

exports.default = _TaroComponentClass;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(_TaroComponentClass, true));
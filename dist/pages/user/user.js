"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _user = require("../../actions/user.js");

var actions = _interopRequireWildcard(_user);

var _cart = require("../../actions/cart.js");

var _style = require("../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, _extends({}, actions, { dispatchCartNum: _cart.dispatchCartNum })), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "userInfo", "dispatchUser", "dispatchCartNum"], _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.handleLogin = function () {
      _index2.default.navigateTo({
        url: '/pages/user-login/user-login'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.props.dispatchUser();
      this.props.dispatchCartNum();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var userInfo = this.__props.userInfo;


      var anonymousState__temp = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        userInfo: userInfo
      });
      return this.__state;
    }
  }]);

  return User;
}(_index.Component), _class2.properties = {
  "dispatchUser": {
    "type": null,
    "value": null
  },
  "dispatchCartNum": {
    "type": null,
    "value": null
  },
  "userInfo": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleLogin"], _temp2)) || _class);
exports.default = User;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(User, true));
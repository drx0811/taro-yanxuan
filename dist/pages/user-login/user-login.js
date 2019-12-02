"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _user = require("../../actions/user.js");

var actions = _interopRequireWildcard(_user);

var _api = require("../../constants/api.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// NOTE 使用统一接口的多端文件进行跨端处理
// auth 中有 index.js/index.weapp.js/index.alipay.js
// 若是编译微信，则实际引入的是 index.weapp.js
// 若是编译 H5，因为不存在 index.h5.js，所以引入的是默认的 index.js


var LOGO = _api.CDN + "/a7ba557fde54270c71656222c7837396.png";

// TODO 由于 RN 的 app.js 中 initPxTransform 执行顺序关系，不能在 class 外用到 Taro.pxTransform
// const BUTTON = {
//   marginTop: Taro.pxTransform(30)
// }

var UserLogin = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(UserLogin, _BaseComponent);

  function UserLogin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserLogin.__proto__ || Object.getPrototypeOf(UserLogin)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["LOGO", "BUTTON"], _this.config = {
      navigationBarTitleText: '登录'
    }, _this.handleClick = function (type) {
      if (type !== 'email') {
        _index2.default.showToast({
          title: '目前只实现了邮箱登录~',
          icon: 'none'
        });
        return;
      }

      _index2.default.navigateTo({
        url: '/pages/user-login-email/user-login-email'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserLogin, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserLogin.prototype.__proto__ || Object.getPrototypeOf(UserLogin.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var BUTTON = {
        marginTop: _index2.default.pxTransform(30)
      };

      Object.assign(this.__state, {
        LOGO: LOGO,
        BUTTON: BUTTON
      });
      return this.__state;
    }
  }]);

  return UserLogin;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["handleClick"], _temp2)) || _class);
exports.default = UserLogin;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(UserLogin, true));
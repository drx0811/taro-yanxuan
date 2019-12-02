"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _md = require("../../npm/blueimp-md5/js/md5.js");

var _md2 = _interopRequireDefault(_md);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _user = require("../../actions/user.js");

var actions = _interopRequireWildcard(_user);

var _api = require("../../constants/api.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOGO = _api.CDN + "/6dbf208804386f12aa9e662d82abe563.png";
var EMAIL_SUFFIX = ['163.com', '126.com', 'yeah.net', 'vip.163.com', 'vip.126.com'];

var UserLoginEmail = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(UserLoginEmail, _BaseComponent);

  function UserLoginEmail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserLoginEmail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserLoginEmail.__proto__ || Object.getPrototypeOf(UserLoginEmail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray0", "LOGO", "username", "password", "isShowSuggest", "EMAIL_SUFFIX", "isBtnDisabled", "loading", "dispatchLogin"], _this.config = {
      navigationBarTitleText: '登录'
    }, _this.state = {
      username: '',
      password: '',
      isShowSuggest: false,
      loading: false
    }, _this.handleInput = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
      if (key === 'username') {
        var isFinish = /\.(com|net)$/.test(value);
        if (!_this.state.isShowSuggest && value && !isFinish) {
          _this.setState({ isShowSuggest: true });
        } else if (_this.state.isShowSuggest && (!value || isFinish)) {
          _this.setState({ isShowSuggest: false });
        }
      }
    }, _this.handleSuggest = function (value) {
      _this.handleInput('username', value);
    }, _this.handleLogin = function () {
      var payload = {
        username: _this.state.username,
        password: (0, _md2.default)(_this.state.password)
      };
      _this.setState({ loading: true });
      _this.props.dispatchLogin(payload).then(function () {
        _this.setState({ loading: false });
        _index2.default.navigateBack({ delta: 2 });
        // TODO RN 的 navigateBack 参数 delta 无效，暂时用如下方式解决
      }).catch(function () {
        _this.setState({ loading: false });
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserLoginEmail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserLoginEmail.prototype.__proto__ || Object.getPrototypeOf(UserLoginEmail.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _index2.default.showToast({
        title: '注意，严选小程序的登录有变动，目前无法正常登录',
        icon: 'none',
        duration: 5000
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          username = _state.username,
          password = _state.password,
          isShowSuggest = _state.isShowSuggest,
          loading = _state.loading;

      var isBtnDisabled = !username || !password;

      // XXX 暂未实现 input 的 autoFocus 的逻辑
      var anonymousState__temp = {
        background: '#b59f7b',
        borderRadius: _index2.default.pxTransform(4)
      };
      var anonymousState__temp2 = {
        color: isBtnDisabled ? 'rgba(255, 255, 255, 0.4)' : '#ffffff'
      };
      var loopArray0 = isShowSuggest ? EMAIL_SUFFIX.map(function (suffix) {
        suffix = {
          $original: (0, _index.internal_get_original)(suffix)
        };

        var name = username.split('@')[0];
        var value = name + "@" + suffix.$original;
        return {
          name: name,
          value: value,
          $original: suffix.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray0: loopArray0,
        LOGO: LOGO,
        EMAIL_SUFFIX: EMAIL_SUFFIX,
        isBtnDisabled: isBtnDisabled
      });
      return this.__state;
    }
  }]);

  return UserLoginEmail;
}(_index.Component), _class2.properties = {
  "dispatchLogin": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleInput", "handleSuggest", "handleLogin"], _temp2)) || _class);
exports.default = UserLoginEmail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(UserLoginEmail, true));
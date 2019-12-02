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

var _cart = require("../../actions/cart.js");

var actions = _interopRequireWildcard(_cart);

var _api = require("../../constants/api.js");

var _request = require("../../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _style = require("../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state.cart;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "anonymousState__temp2", "cartInfo", "isEmpty", "cartGroupList", "cartList", "extList", "recommend", "isShowFooter", "loaded", "login", "dispatchCart", "dispatchCartNum", "dispatchRecommend", "dispatchUpdate", "__fn_onUpdate", "dispatchUpdateCheck", "__fn_onUpdateCheck"], _this.config = {
      navigationBarTitleText: '购物车'
    }, _this.state = {
      loaded: false,
      login: false
    }, _this.toLogin = function () {
      _index2.default.navigateTo({
        url: '/pages/user-login/user-login'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this2 = this;

      (0, _request2.default)({ url: _api.API_CHECK_LOGIN, showToast: false, autoLogin: false }).then(function (res) {
        if (res) {
          _this2.setState({ loaded: true, login: true });
          _this2.props.dispatchCart();
          _this2.props.dispatchCartNum();
          _this2.props.dispatchRecommend();
        } else {
          _this2.setState({ loaded: true, login: false });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          cartInfo = _props.cartInfo,
          recommend = _props.recommend;
      var _cartInfo$cartGroupLi = cartInfo.cartGroupList,
          cartGroupList = _cartInfo$cartGroupLi === undefined ? [] : _cartInfo$cartGroupLi;

      var cartList = cartGroupList.filter(function (i) {
        return !i.promType;
      });
      var extList = recommend.extList || [];
      var isEmpty = !cartList.length;
      var isShowFooter = !isEmpty;

      if (!this.__state.loaded) {
        return null;
      }

      if (!this.__state.login) {
        _$anonymousState__temp = {
          background: '#b59f7b',
          borderRadius: _index2.default.pxTransform(4)
        };
      }

      var anonymousState__temp2 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        cartInfo: cartInfo,
        isEmpty: isEmpty,
        cartGroupList: cartGroupList,
        cartList: cartList,
        extList: extList,
        recommend: recommend,
        isShowFooter: isShowFooter
      });
      return this.__state;
    }
  }, {
    key: "funPrivateeawNt",
    value: function funPrivateeawNt() {
      this.__triggerPropsFn("dispatchUpdate", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivatejrLMf",
    value: function funPrivatejrLMf() {
      this.__triggerPropsFn("dispatchUpdateCheck", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatchCart": {
    "type": null,
    "value": null
  },
  "dispatchCartNum": {
    "type": null,
    "value": null
  },
  "dispatchRecommend": {
    "type": null,
    "value": null
  },
  "cartInfo": {
    "type": null,
    "value": null
  },
  "recommend": {
    "type": null,
    "value": null
  },
  "dispatchUpdate": {
    "type": null,
    "value": null
  },
  "__fn_onUpdate": {
    "type": null,
    "value": null
  },
  "dispatchUpdateCheck": {
    "type": null,
    "value": null
  },
  "__fn_onUpdateCheck": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["toLogin", "funPrivateeawNt", "funPrivatejrLMf"], _temp2)) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));
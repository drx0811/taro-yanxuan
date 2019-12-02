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

var _home = require("../../actions/home.js");

var actions = _interopRequireWildcard(_home);

var _cart = require("../../actions/cart.js");

var _style = require("../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchIcon = "/pages/home/assets/search.png";

var RECOMMEND_SIZE = 20;

var Home = (_dec = (0, _index3.connect)(function (state) {
  return state.home;
}, _extends({}, actions, { dispatchCartNum: _cart.dispatchCartNum })), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Home, _BaseComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "searchIcon", "homeInfo", "pin", "recommend", "searchCount", "loaded", "loading", "lastItemId", "hasMore", "dispatchHome", "dispatchCartNum", "dispatchSearchCount", "dispatchPin", "dispatchRecommend"], _this.config = {
      navigationBarTitleText: '网易严选'
    }, _this.state = {
      loaded: false,
      loading: false,
      lastItemId: 0,
      hasMore: true
    }, _this.loadRecommend = function () {
      if (!_this.state.hasMore || _this.state.loading) {
        return;
      }

      var payload = {
        lastItemId: _this.state.lastItemId,
        size: RECOMMEND_SIZE
      };
      _this.setState({ loading: true });
      _this.props.dispatchRecommend(payload).then(function (res) {
        var lastItem = res.rcmdItemList[res.rcmdItemList.length - 1];
        _this.setState({
          loading: false,
          hasMore: res.hasMore,
          lastItemId: lastItem && lastItem.id
        });
      }).catch(function () {
        _this.setState({ loading: false });
      });
    }, _this.handlePrevent = function () {
      // XXX 时间关系，首页只实现底部推荐商品的点击
      _index2.default.showToast({
        title: '目前只可点击底部推荐商品',
        icon: 'none'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // NOTE 暂时去掉不适配的内容
      _index2.default.showToast({
        title: '注意，由于严选小程序首页界面、接口大幅变动，暂时去掉不相符的部分，后续再跟进改动',
        icon: 'none',
        duration: 6000
      });

      this.props.dispatchHome().then(function () {
        _this2.setState({ loaded: true });
      });
      this.props.dispatchCartNum();
      this.props.dispatchSearchCount();
      this.props.dispatchPin({ orderType: 4, size: 12 });
      this.loadRecommend();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      if (!this.__state.loaded) {
        return null;
      }

      var _props = this.__props,
          homeInfo = _props.homeInfo,
          searchCount = _props.searchCount,
          recommend = _props.recommend,
          pin = _props.pin;

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        searchIcon: searchIcon,
        homeInfo: homeInfo,
        pin: pin,
        recommend: recommend,
        searchCount: searchCount
      });
      return this.__state;
    }
  }]);

  return Home;
}(_index.Component), _class2.properties = {
  "dispatchHome": {
    "type": null,
    "value": null
  },
  "dispatchCartNum": {
    "type": null,
    "value": null
  },
  "dispatchSearchCount": {
    "type": null,
    "value": null
  },
  "dispatchPin": {
    "type": null,
    "value": null
  },
  "dispatchRecommend": {
    "type": null,
    "value": null
  },
  "homeInfo": {
    "type": null,
    "value": null
  },
  "searchCount": {
    "type": null,
    "value": null
  },
  "recommend": {
    "type": null,
    "value": null
  },
  "pin": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handlePrevent", "loadRecommend"], _temp2)) || _class);
exports.default = Home;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Home, true));
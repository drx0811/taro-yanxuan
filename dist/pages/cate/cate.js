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

var _cate = require("../../actions/cate.js");

var actions = _interopRequireWildcard(_cate);

var _style = require("../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cate = (_dec = (0, _index3.connect)(function (state) {
  return state.cate;
}, _extends({}, actions)), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Cate, _BaseComponent);

  function Cate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cate.__proto__ || Object.getPrototypeOf(Cate)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "current", "menu", "loading", "banner", "list", "loaded", "dispatchMenu", "category"], _this.config = {
      navigationBarTitleText: '分类'
    }, _this.state = {
      current: -1,
      loaded: false,
      loading: false
    }, _this.handleMenu = function (id) {
      _this.setState({ loading: true }, function () {
        _this.setState({ current: id, loading: false });
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cate, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Cate.prototype.__proto__ || Object.getPrototypeOf(Cate.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.dispatchMenu().then(function (res) {
        _this2.setState({
          loaded: true,
          current: res.categoryList[0].id
        });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          menu = _props.menu,
          category = _props.category;
      var _state = this.__state,
          current = _state.current,
          loading = _state.loading;

      var currentCategory = category.find(function (item) {
        return item.id === current;
      }) || {};
      var banner = currentCategory.focusBannerList || [];
      var list = currentCategory.categoryGroupList || [];
      var height = (0, _style.getWindowHeight)();

      if (!this.__state.loaded) {
        return null;
      }

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: height });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ height: height });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        menu: menu,
        banner: banner,
        list: list
      });
      return this.__state;
    }
  }]);

  return Cate;
}(_index.Component), _class2.properties = {
  "dispatchMenu": {
    "type": null,
    "value": null
  },
  "menu": {
    "type": null,
    "value": null
  },
  "category": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleMenu"], _temp2)) || _class);
exports.default = Cate;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Cate, true));
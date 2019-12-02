"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _cate = require("../../actions/cate.js");

var actions = _interopRequireWildcard(_cate);

var _style = require("../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CateSub = (_dec = (0, _index3.connect)(function (state) {
  return state.cate;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(CateSub, _BaseComponent);

  function CateSub() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CateSub);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CateSub.__proto__ || Object.getPrototypeOf(CateSub)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "subMenu", "current", "loaded", "loading", "dispatchSubMenu", "subCategory", "dispatchSubList"], _this.config = {
      navigationBarTitleText: ''
    }, _this.handleMenu = function (index) {
      var menu = _this.props.subMenu[index];
      _this.setState({ current: index });
      _this.loadList(menu.id);
    }, _this.handleChange = function (e) {
      var _this$props = _this.props,
          subMenu = _this$props.subMenu,
          subCategory = _this$props.subCategory;
      var current = e.detail.current;

      _this.setState({ current: current });

      var menu = subMenu[current];
      if (!subCategory[menu.id]) {
        _this.loadList(menu.id);
      }
    }, _this.loadList = function (id) {
      var loading = _this.state.loading;

      if (loading[id]) {
        return;
      }

      _this.setState({ loading: _extends({}, loading, _defineProperty({}, id, true)) });
      _this.props.dispatchSubList({
        categoryL1Id: _this.categoryId,
        categoryL2Id: id
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CateSub, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CateSub.prototype.__proto__ || Object.getPrototypeOf(CateSub.prototype), "_constructor", this).call(this, props);
      this.state = {
        current: 0,
        loaded: false,
        loading: {}
      };
      this.subId = parseInt(this.$router.params.subId);
      this.categoryId = parseInt(this.$router.params.categoryId);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var payload = { categoryId: this.categoryId };
      this.props.dispatchSubMenu(payload).then(function (res) {
        _this2.setState({ loaded: true });

        var _res$category = res.category,
            name = _res$category.name,
            subCategoryList = _res$category.subCategoryList;

        _index2.default.setNavigationBarTitle({ title: name });
        setTimeout(function () {
          var index = subCategoryList.findIndex(function (item) {
            return item.id === _this2.subId;
          });
          _this2.handleMenu(index);
        }, 0);
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
          subMenu = _props.subMenu,
          subCategory = _props.subCategory;
      var current = this.__state.current;

      var height = (0, _style.getWindowHeight)(false);

      if (!this.__state.loaded) {
        return null;
      }

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: height });
      var loopArray0 = subMenu.map(function (item) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var list = subCategory[item.$original.id] || [];
        var $loopState__temp3 = !!list.length ? (0, _index.internal_inline_style)({ height: height }) : null;
        return {
          list: list,
          $loopState__temp3: $loopState__temp3,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        subMenu: subMenu
      });
      return this.__state;
    }
  }]);

  return CateSub;
}(_index.Component), _class2.properties = {
  "dispatchSubMenu": {
    "type": null,
    "value": null
  },
  "subMenu": {
    "type": null,
    "value": null
  },
  "subCategory": {
    "type": null,
    "value": null
  },
  "dispatchSubList": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleMenu", "handleChange"], _temp2)) || _class);
exports.default = CateSub;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CateSub, true));
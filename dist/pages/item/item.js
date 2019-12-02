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

var _item = require("../../actions/item.js");

var actions = _interopRequireWildcard(_item);

var _cart = require("../../actions/cart.js");

var _style = require("../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = (_dec = (0, _index3.connect)(function (state) {
  return state.item;
}, _extends({}, actions, { dispatchAdd: _cart.dispatchAdd })), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Item, _BaseComponent);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "gallery", "itemInfo", "itemDetail", "popupStyle", "loaded", "selected", "visible", "dispatchItem", "dispatchAdd"], _this.config = {
      navigationBarTitleText: '商品详情'
    }, _this.handleSelect = function (selected) {
      _this.setState({ selected: selected });
    }, _this.handleAdd = function () {
      // 添加购物车是先从 skuSpecValueList 中选择规格，再去 skuMap 中找 skuId，多个规格时用 ; 组合
      var itemInfo = _this.props.itemInfo;
      var _itemInfo$skuSpecList = itemInfo.skuSpecList,
          skuSpecList = _itemInfo$skuSpecList === undefined ? [] : _itemInfo$skuSpecList;
      var _this$state = _this.state,
          visible = _this$state.visible,
          selected = _this$state.selected;

      var isSelected = visible && !!selected.id && itemInfo.skuMap[selected.id];
      var isSingleSpec = skuSpecList.every(function (spec) {
        return spec.skuSpecValueList.length === 1;
      });

      if (isSelected || isSingleSpec) {
        var selectedItem = isSelected ? selected : {
          id: skuSpecList.map(function (spec) {
            return spec.skuSpecValueList[0].id;
          }).join(';'),
          cnt: 1
        };
        var skuItem = itemInfo.skuMap[selectedItem.id] || {};
        var payload = {
          skuId: skuItem.id,
          cnt: selectedItem.cnt
        };
        _this.props.dispatchAdd(payload).then(function () {
          _index2.default.showToast({
            title: '加入购物车成功',
            icon: 'none'
          });
        });
        if (isSelected) {
          _this.toggleVisible();
        }
        return;
      }

      if (!visible) {
        _this.setState({ visible: true });
      } else {
        // XXX 加购物车逻辑不一定准确
        _index2.default.showToast({
          title: '请选择规格（或换个商品测试）',
          icon: 'none'
        });
      }
    }, _this.toggleVisible = function () {
      _this.setState({
        visible: !_this.state.visible,
        selected: {}
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Item.prototype.__proto__ || Object.getPrototypeOf(Item.prototype), "_constructor", this).call(this, props);
      this.state = {
        loaded: false,
        selected: {}
      };
      this.itemId = parseInt(this.$router.params.itemId);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.dispatchItem({ itemId: this.itemId }).then(function () {
        _this2.setState({ loaded: true });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var itemInfo = this.__props.itemInfo;
      var _itemInfo$itemDetail = itemInfo.itemDetail,
          itemDetail = _itemInfo$itemDetail === undefined ? {} : _itemInfo$itemDetail;

      var gallery = [itemInfo.listPicUrl, itemDetail.picUrl1, itemDetail.picUrl2, itemDetail.picUrl3, itemDetail.picUrl4].filter(function (i) {
        return i;
      });
      var height = (0, _style.getWindowHeight)(false);
      // XXX RN 的 transform 写法不同，这块可以统一放到 @utils/style 的 postcss() 中处理
      var popupStyle = { transform: "translateY(" + _index2.default.pxTransform(-100) + ")" };

      if (!this.__state.loaded) {
        return null;
      }

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: height });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        gallery: gallery,
        itemInfo: itemInfo,
        itemDetail: itemDetail,
        popupStyle: popupStyle
      });
      return this.__state;
    }
  }]);

  return Item;
}(_index.Component), _class2.properties = {
  "dispatchItem": {
    "type": null,
    "value": null
  },
  "itemInfo": {
    "type": null,
    "value": null
  },
  "dispatchAdd": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["toggleVisible", "handleSelect", "handleAdd"], _temp2)) || _class);
exports.default = Item;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Item, true));
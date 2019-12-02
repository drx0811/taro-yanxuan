"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Footer, _BaseComponent);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "cartInfo", "__fn_onUpdateCheck"], _this.handleUpdateCheck = function () {
      var cartInfo = _this.props.cartInfo;
      var _cartInfo$cartGroupLi = cartInfo.cartGroupList,
          cartGroupList = _cartInfo$cartGroupLi === undefined ? [] : _cartInfo$cartGroupLi,
          countCornerMark = cartInfo.countCornerMark,
          selectedCount = cartInfo.selectedCount;

      var cartList = cartGroupList.slice(1);
      var payload = { skuList: [] };
      var isAllChecked = !!selectedCount && parseInt(countCornerMark) === selectedCount;
      var nextChecked = !isAllChecked;
      cartList.forEach(function (group) {
        group.cartItemList.forEach(function (item) {
          payload.skuList.push({
            skuId: item.skuId,
            type: item.type,
            extId: item.extId,
            cnt: item.cnt,
            checked: nextChecked,
            canCheck: true,
            promId: group.promId,
            promType: group.promType
          });
        });
      });
      _this.__triggerPropsFn("onUpdateCheck", [null].concat([payload]));
    }, _this.handleOrder = function () {
      _index2.default.showToast({
        title: '敬请期待',
        icon: 'none'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Footer, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Footer.prototype.__proto__ || Object.getPrototypeOf(Footer.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var cartInfo = this.__props.cartInfo;

      var anonymousState__temp = !!cartInfo.selectedCount;
      var anonymousState__temp2 = parseFloat(cartInfo.actualPrice).toFixed(2);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        cartInfo: cartInfo
      });
      return this.__state;
    }
  }]);

  return Footer;
}(_index.Component), _class.properties = {
  "cartInfo": {
    "type": null,
    "value": null
  },
  "__fn_onUpdateCheck": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleUpdateCheck", "handleOrder"], _class.defaultProps = {
  cartInfo: {},
  onToggle: function onToggle() {}
}, _temp2);
exports.default = Footer;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Footer));
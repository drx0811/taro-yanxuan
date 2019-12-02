"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var closeIcon = "/components/popup/assets/close.png";

var Popup = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Popup, _BaseComponent);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "closeIcon", "isShow", "compStyle", "__fn_onClick", "visible", "children"], _this.handleClose = function () {
      _this.__triggerPropsFn("onClose", [null].concat([]));
    }, _this.handleTouchMove = function (e) {
      e.stopPropagation();
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Popup.prototype.__proto__ || Object.getPrototypeOf(Popup.prototype), "_constructor", this).call(this, props);
      this.state = {
        isShow: props.visible
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var visible = nextProps.visible;
      var isShow = this.state.isShow;

      if (visible !== isShow) {
        this.setState({
          isShow: visible
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          onClose = _props.onClose,
          compStyle = _props.compStyle;
      var isShow = this.__state.isShow;


      var anonymousState__temp = (0, _index4.default)('comp-popup', isShow && 'comp-popup--visible');
      var anonymousState__temp2 = (0, _index.internal_inline_style)(compStyle);
      var anonymousState__temp3 = (0, _index.internal_inline_style)({ height: _index2.default.pxTransform(750) });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        closeIcon: closeIcon
      });
      return this.__state;
    }
  }, {
    key: "funPrivatepknVj",
    value: function funPrivatepknVj() {
      this.__triggerPropsFn("onClose", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return Popup;
}(_index.Component), _class.properties = {
  "__fn_onClose": {
    "type": null,
    "value": null
  },
  "onClose": {
    "type": null,
    "value": null
  },
  "compStyle": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "visible": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleTouchMove", "funPrivatepknVj"], _class.defaultProps = {
  visible: false,
  compStyle: '',
  onClose: function onClose() {}
}, _temp2);
exports.default = Popup;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Popup));
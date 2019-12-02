"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spec = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Spec, _BaseComponent);

  function Spec() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Spec);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Spec.__proto__ || Object.getPrototypeOf(Spec)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "loopArray0", "data", "skuSpecList", "selected", "img", "cnt", "__fn_onSelect"], _this.state = {
      selected: {},
      img: '',
      cnt: 1
    }, _this.isValid = function (item) {
      // XXX 暂未实现多规格时的判断逻辑
      var _this$props$data = _this.props.data,
          _this$props$data$skuM = _this$props$data.skuMap,
          skuMap = _this$props$data$skuM === undefined ? {} : _this$props$data$skuM,
          _this$props$data$skuS = _this$props$data.skuSpecList,
          skuSpecList = _this$props$data$skuS === undefined ? [] : _this$props$data$skuS;

      if (skuSpecList.length > 1) {
        return true;
      }

      return skuMap[item.id] ? skuMap[item.id].sellVolume : false;
    }, _this.isSelected = function (item, groupId) {
      return _this.state.selected[groupId] === item.id;
    }, _this.handleSelect = function (item, groupId) {
      if (_this.isValid(item)) {
        var selected = _extends({}, _this.state.selected, _defineProperty({}, groupId, item.id));
        var id = Object.keys(selected).sort(function (a, b) {
          return a - b;
        }).map(function (key) {
          return selected[key];
        }).join(';');

        _this.setState({ selected: selected });
        if (item.picUrl) {
          _this.setState({ img: item.picUrl });
        }
        _this.__triggerPropsFn("onSelect", [null].concat([{ id: id, cnt: _this.state.cnt }]));
      }
    }, _this.handleUpdate = function (cnt) {
      _this.setState({ cnt: cnt });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Spec, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Spec.prototype.__proto__ || Object.getPrototypeOf(Spec.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var data = this.__props.data;
      var _data$skuSpecList = data.skuSpecList,
          skuSpecList = _data$skuSpecList === undefined ? [] : _data$skuSpecList;


      var anonymousState__temp3 = {
        marginTop: _index2.default.pxTransform(20),
        height: _index2.default.pxTransform(68)
      };
      var anonymousState__temp4 = {
        width: _index2.default.pxTransform(130)
      };
      var loopArray0 = skuSpecList.map(function (group) {
        group = {
          $original: (0, _index.internal_get_original)(group)
        };
        var $anonymousCallee__0 = group.$original.skuSpecValueList.map(function (item) {
          item = {
            $original: (0, _index.internal_get_original)(item)
          };
          var $loopState__temp2 = (0, _index4.default)('item-spec__group-list-item', {
            'item-spec__group-list-item--active': _this2.isSelected(item.$original, group.$original.id),
            'item-spec__group-list-item--disabled': !_this2.isValid(item.$original)
          });
          return {
            $loopState__temp2: $loopState__temp2,
            $original: item.$original
          };
        });
        return {
          $anonymousCallee__0: $anonymousCallee__0,
          $original: group.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray0: loopArray0,
        data: data,
        skuSpecList: skuSpecList
      });
      return this.__state;
    }
  }]);

  return Spec;
}(_index.Component), _class.properties = {
  "data": {
    "type": null,
    "value": null
  },
  "__fn_onSelect": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleSelect", "handleUpdate"], _class.defaultProps = {
  data: {},
  selected: {},
  onSelect: function onSelect() {}
}, _temp2);
exports.default = Spec;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Spec));
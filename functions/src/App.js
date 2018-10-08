"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _default = function _default(props) {
  var restaurants = props.restaurants.map(function (rest) {
    return _react.default.createElement("li", {
      key: rest._id
    }, rest.name);
  });
  return _react.default.createElement("ul", null, restaurants);
};

exports.default = _default;
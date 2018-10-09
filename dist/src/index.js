"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _restaurants = _interopRequireDefault(require("./restaurants"));

(0, _restaurants.default)().then(function (restaurants) {
  return (0, _reactDom.render)(_react.default.createElement(_App.default, {
    restaurants: restaurants
  }), document.querySelector('#root'));
}).catch(function (err) {
  if (err) {
    console.log("deu ruim: " + err);
  }
});
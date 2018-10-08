"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var getRestaurants = function getRestaurants() {
  return (0, _isomorphicFetch.default)('https://billy-server.herokuapp.com/api/restaurants').then(function (res) {
    return res.json();
  });
};

var _default = getRestaurants;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrApp = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var functions = _interopRequireWildcard(require("firebase-functions"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _App = _interopRequireDefault(require("./src/App"));

var _restaurants = _interopRequireDefault(require("./src/restaurants"));

var app = (0, _express.default)();

var index = _fs.default.readFileSync(__dirname + '/index.html', 'utf8');

app.get('**', function (req, res) {
  var restaurants = [{
    _id: 1,
    name: "Test"
  }, {
    _id: 2,
    name: "Test2"
  }, {
    _id: 3,
    name: "Test3"
  }];
  var html = (0, _server.renderToString)(_react.default.createElement(_App.default, {
    restaurants: restaurants
  }));
  var replacedHtml = index.replace('<!-- ::APP:: -->', html);
  res.set('Cache-Control', 'public, max-age=600, s-maxage = 1200');
  console.log(html);
  res.send(replacedHtml);
});
var ssrApp = functions.https.onRequest(app);
exports.ssrApp = ssrApp;
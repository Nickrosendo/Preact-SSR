"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _App = _interopRequireDefault(require("./src/App"));

var _restaurants = _interopRequireDefault(require("./src/restaurants"));

var app = (0, _express.default)();

var index = _fs.default.readFileSync(__dirname + '/public/index.html', 'utf8');

app.get('**', function (req, res) {
  (0, _restaurants.default)().then(function (restaurants) {
    var html = (0, _server.renderToString)(_react.default.createElement(_App.default, {
      restaurants: restaurants
    }));
    var replacedHtml = index.replace('<!-- ::APP:: -->', html);
    res.send(replacedHtml);
  }).catch(function (err) {
    if (err) {
      console.error(err);
    }

    console.log('deu ruim');
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Node running on port ' + port);
});
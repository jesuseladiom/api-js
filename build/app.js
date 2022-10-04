"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import dotenv from 'dotenv'
var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.set("port", PORT); //middleware

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json()); //routes

app.use("/api/persons", _index["default"]);
var _default = app;
exports["default"] = _default;
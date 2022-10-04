"use strict";

var _promiseMysql = _interopRequireDefault(require("promise-mysql"));

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connection = _promiseMysql["default"].createConnection({
  host: _constants["default"].HOST,
  database: _constants["default"].DB,
  user: _constants["default"].USER,
  password: _constants["default"].PWD
});

var getConnection = function getConnection() {
  return connection;
};

module.exports = {
  getConnection: getConnection
};
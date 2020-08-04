"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _operations = _interopRequireDefault(require("../../../constants/operations"));

var endpoint = {
  getOperation: function getOperation() {
    return _operations["default"].PNRemoveUUIDMetadataOperation;
  },
  validateParams: function validateParams() {},
  getURL: function getURL(_ref, params) {
    var _ref2;

    var config = _ref.config;
    return "/v2/objects/".concat(config.subscribeKey, "/uuids/").concat((_ref2 = params === null || params === void 0 ? void 0 : params.uuid) !== null && _ref2 !== void 0 ? _ref2 : config.getUUID());
  },
  useDelete: function useDelete() {
    return true;
  },
  getRequestTimeout: function getRequestTimeout(_ref3) {
    var config = _ref3.config;
    return config.getTransactionTimeout();
  },
  isAuthSupported: function isAuthSupported() {
    return true;
  },
  getAuthToken: function getAuthToken(_ref4) {
    var tokenManager = _ref4.tokenManager;
    return tokenManager.getToken('user');
  },
  prepareParams: function prepareParams(_ref5, params) {
    var _ref6;

    var config = _ref5.config;
    return {
      uuid: (_ref6 = params === null || params === void 0 ? void 0 : params.uuid) !== null && _ref6 !== void 0 ? _ref6 : config.getUUID()
    };
  },
  handleResponse: function handleResponse(_, response) {
    return {
      status: response.status,
      data: response.data
    };
  }
};
var _default = endpoint;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=remove.js.map
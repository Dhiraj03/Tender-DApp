"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are in the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/f6d453a1bc224de8bbcfb9711387b884");
  web3 = new _web2.default(provider);
}
var getProvider = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.web3.currentProvider.enable();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getProvider() {
    return _ref.apply(this, arguments);
  };
}();

getProvider();
/* window.web3.currentProvider assumes that MetaMask has
  automatically injected web3 into the page
*/
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJnZXRQcm92aWRlciIsImVuYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7Ozs7O0FBQ0EsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3ZFO0FBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBR0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7O0FBQ0QsSUFBTSwwQkFBQTtzRkFBYyxtQkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNaLE9BQU8sQUFBUCxLQUFZLEFBQVosZ0JBQTRCLEFBQTVCLEFBRFk7O2VBQUE7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFkOztnQ0FBQTs0QkFBQTtBQUFBO0FBQU47O0FBSUE7QUFDQSxBQUdBOzs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RoaXJhL0Rlc2t0b3AvVGVuZGVyLURBcHAifQ==
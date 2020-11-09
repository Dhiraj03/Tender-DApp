"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /* This file is used to create an instance of web3 attached to a provider
                   to be used in other deployment scripts
                   */


if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in an Ethereum supported browser, so a provider is available
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are in the server OR the user is not running MetaMask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/f6d453a1bc224de8bbcfb9711387b884");
  web3 = new _web2.default(provider);
}
// const getProvider = async () => {
//   await window.web3.currentProvider.enable(); // Request authentication for the web3provider
// };

// getProvider();
// /* window.web3.currentProvider assumes that MetaMask has
//   automatically injected web3 into the page
// */
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU87Ozs7OztBQUNQLElBQUksWUFBSixHQUpBOzs7OztBQU1BLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RCxhQUFhLEFBQ3ZFO0FBQ0E7U0FBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzdCO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7O0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEFBQ0E7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RoaXJhL0Rlc2t0b3AvVGVuZGVyLURBcHAifQ==
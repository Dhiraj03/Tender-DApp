webpackHotUpdate_N_E("pages/tenders/viewbidsfinal",{

/***/ "./pages/tenders/viewbidsfinal.js":
/*!****************************************!*\
  !*** ./pages/tenders/viewbidsfinal.js ***!
  \****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var BidDisplay = function BidDisplay(_ref) {
  var address = _ref.address,
      bids = _ref.bids;

  var renderCards = function renderCards() {
    var items = bids.map(function (bid) {
      return {
        header: 'Bid Amount:   ' + bid.bidAmount,
        description: 'Bid Address:   ' + bid.bidaddress,
        fluid: true
      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
      items: items
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("h3", null, "Bid Show"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 10
  }, renderCards()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 6
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/tenders/".concat(address, "/")
  }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true
  }, "Details of the tender.")))))));
};

_c = BidDisplay;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (BidDisplay);

var _c;

$RefreshReg$(_c, "BidDisplay");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVuZGVycy92aWV3Ymlkc2ZpbmFsLmpzIl0sIm5hbWVzIjpbIkJpZERpc3BsYXkiLCJhZGRyZXNzIiwiYmlkcyIsInJlbmRlckNhcmRzIiwiaXRlbXMiLCJtYXAiLCJiaWQiLCJoZWFkZXIiLCJiaWRBbW91bnQiLCJkZXNjcmlwdGlvbiIsImJpZGFkZHJlc3MiLCJmbHVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXFCO0FBQUEsTUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFFdEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBUztBQUM1QixhQUFPO0FBQ0xDLGNBQU0sRUFBRSxtQkFBbUJELEdBQUcsQ0FBQ0UsU0FEMUI7QUFFTEMsbUJBQVcsRUFBRSxvQkFBb0JILEdBQUcsQ0FBQ0ksVUFGaEM7QUFHTEMsYUFBSyxFQUFFO0FBSEYsT0FBUDtBQUtELEtBTlcsQ0FBZDtBQU9FLFdBQU8sTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxXQUFLLEVBQUVQO0FBQW5CLE1BQVA7QUFDRCxHQVRIOztBQVlBLFNBQ0UsTUFBQywwREFBRCxRQUNFLDZCQURGLEVBRUUsTUFBQyxzREFBRCxRQUNFLE1BQUMsc0RBQUQsQ0FBTSxHQUFOLFFBQ0UsTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxTQUFLLEVBQUU7QUFBcEIsS0FBeUJELFdBQVcsRUFBcEMsQ0FERixFQUVFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFO0FBQXBCLElBRkYsQ0FERixFQUtFLE1BQUMsc0RBQUQsQ0FBTSxHQUFOLFFBQ0UsTUFBQyxzREFBRCxDQUFNLE1BQU4sUUFDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxxQkFBY0YsT0FBZDtBQUFYLEtBQ0UsaUJBQ0UsTUFBQyx3REFBRDtBQUFRLFdBQU87QUFBZiw4QkFERixDQURGLENBREYsQ0FERixDQUxGLENBRkYsQ0FERjtBQW9CRCxDQWxDRDs7S0FBTUQsVTs7QUEyRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlbmRlcnMvdmlld2JpZHNmaW5hbC40YjdkYTUxMjU0NTI0YzVhZmY4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgVGVuZGVyIGZyb20gXCIuLi8uLi9ldGhlcmV1bS90ZW5kZXJcIjtcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBCaWREaXNwbGF5ID0gKHthZGRyZXNzLCBiaWRzfSkgPT4ge1xyXG5cclxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gYmlkcy5tYXAoKGJpZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBoZWFkZXI6ICdCaWQgQW1vdW50OiAgICcgKyBiaWQuYmlkQW1vdW50LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdCaWQgQWRkcmVzczogICAnICsgYmlkLmJpZGFkZHJlc3MsXHJcbiAgICAgICAgICBmbHVpZDogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5CaWQgU2hvdzwvaDM+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PntyZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PjwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL3RlbmRlcnMvJHthZGRyZXNzfS9gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5EZXRhaWxzIG9mIHRoZSB0ZW5kZXIuPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdGVuZGVyID0gVGVuZGVyKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmNvdW50KTtcclxuICBjb25zdCBiaWRzID0gW11cclxuICB2YXIgaTtcclxuICBmb3IgKGkgPSAxOyBpIDw9IHByb3BzLnF1ZXJ5LmNvdW50OyBpKyspXHJcbiAge1xyXG4gICAgY29uc3QgYmlkID0gYXdhaXQgdGVuZGVyLm1ldGhvZHMuc2hvd0JpZChpKS5jYWxsKCk7XHJcbiAgICBiaWRzLnB1c2goe1xyXG4gICAgICBiaWQ6IGJpZFsyXSxcclxuICAgICAgYmlkQW1vdW50OiBiaWRbMV0sXHJcbiAgICAgIGJpZEFkZHJlc3M6IGJpZFswXVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhiaWQpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYWRkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgIGJpZHM6IGJpZHNcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlkRGlzcGxheTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
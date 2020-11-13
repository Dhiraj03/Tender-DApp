webpackHotUpdate_N_E("pages/tenders/show",{

/***/ "./pages/tenders/show.js":
/*!*******************************!*\
  !*** ./pages/tenders/show.js ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_tender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/tender */ "./ethereum/tender.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);




var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 //import ContributeForm from "../../components/ContributeForm";




var TenderShow = function TenderShow(_ref) {
  _s();

  var isComplete = _ref.isComplete,
      address = _ref.address,
      manager = _ref.manager,
      description = _ref.description,
      count = _ref.count;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    value: "",
    errorMessage: "",
    loading: false,
    index: ""
  }),
      state = _useState[0],
      setState = _useState[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var tender, accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              tender = Object(_ethereum_tender__WEBPACK_IMPORTED_MODULE_5__["default"])(address);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context.prev = 3;
              _context.next = 6;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return tender.methods.verifyManager().send({
                from: accounts[0]
              });

            case 9:
              router.push("/tenders/".concat(address, "/viewbids/").concat(count));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                errorMessage: _context.t0.message
              }));

            case 15:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false,
                value: ""
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12]]);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onClick = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].replaceRoute("/tenders/".concat(address, "/finalBid"));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onClick(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var renderCards = function renderCards() {
    var items = [{
      header: manager,
      meta: "Address of manager",
      description: "The manager floated this tender and decides who to award the tender to.",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: description,
      meta: "Project description",
      description: "A brief description and summary of requirements."
    }, {
      header: count,
      meta: "Number of bidders",
      description: "Number of vendors/suppliers who have already placed their bids."
    }];
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Group, {
      items: items
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("h3", null, "Campaign Show"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 10
  }, renderCards())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 2
  }, state.errorMessage && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    error: true,
    header: "Oops!",
    content: state.errorMessage
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: onSubmit,
    disabled: isComplete || count == 0,
    primary: true,
    loading: state.loading
  }, "View!")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 3
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    route: "/tenders/".concat(address, "/bid")
  }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    disabled: isComplete,
    primary: true
  }, "Make a Bid!")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 4
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    route: "/tenders/".concat(address, "/finalize")
  }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    disabled: isComplete,
    primary: true
  }, "Finalize the Winning Bid!")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, winner.bidder)));
};

_s(TenderShow, "Hv3ywhCtDc0QzIlUv4cEsK9+N3U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c = TenderShow;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (TenderShow);

var _c;

$RefreshReg$(_c, "TenderShow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVuZGVycy9zaG93LmpzIl0sIm5hbWVzIjpbIlRlbmRlclNob3ciLCJpc0NvbXBsZXRlIiwiYWRkcmVzcyIsIm1hbmFnZXIiLCJkZXNjcmlwdGlvbiIsImNvdW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJpbmRleCIsInN0YXRlIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZW5kZXIiLCJUZW5kZXIiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJ2ZXJpZnlNYW5hZ2VyIiwic2VuZCIsImZyb20iLCJwdXNoIiwibWVzc2FnZSIsIm9uQ2xpY2siLCJSb3V0ZXIiLCJyZXBsYWNlUm91dGUiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2lubmVyIiwiYmlkZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTBEO0FBQUE7O0FBQUEsTUFBdkRDLFVBQXVELFFBQXZEQSxVQUF1RDtBQUFBLE1BQTNDQyxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMzRSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQyRSxrQkFFakRDLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRSxFQUQwQjtBQUVqQ0MsZ0JBQVksRUFBRSxFQUZtQjtBQUdqQ0Ms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QU8sRUFBRVEsS0FBSyxDQUFDRjtBQUpqQixhQUpGLENBSkYsRUFpQkUsTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxTQUFLLEVBQUU7QUFBcEIsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxxQkFBY1QsT0FBZDtBQUFYLEtBQ0UsaUJBQ0UsTUFBQyx3REFBRDtBQUFRLFlBQVEsRUFBRUQsVUFBbEI7QUFBOEIsV0FBTztBQUFyQyxtQkFERixDQURGLENBREYsQ0FqQkYsRUEwQkUsTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxTQUFLLEVBQUU7QUFBcEIsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxxQkFBY0MsT0FBZDtBQUFYLEtBQ0UsaUJBQ0UsTUFBQyx3REFBRDtBQUFRLFlBQVEsRUFBRUQsVUFBbEI7QUFBOEIsV0FBTztBQUFyQyxpQ0FERixDQURGLENBREYsQ0ExQkYsRUFtQ0UsTUFBQyxzREFBRCxDQUFNLEdBQU4sUUFBV3NDLE1BQU0sQ0FBQ0MsTUFBbEIsQ0FuQ0YsQ0FGRixDQURGO0FBMENELENBaEdEOztHQUFNeEMsVTtVQUNXTyxxRDs7O0tBRFhQLFU7O0FBZ0lTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZW5kZXJzL3Nob3cuNzRhN2YxZDJjZWE3NjBmYzljMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgVGVuZGVyIGZyb20gXCIuLi8uLi9ldGhlcmV1bS90ZW5kZXJcIjtcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcbi8vaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVGVuZGVyU2hvdyA9ICh7IGlzQ29tcGxldGUsIGFkZHJlc3MsIG1hbmFnZXIsIGRlc2NyaXB0aW9uLCBjb3VudCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgaW5kZXg6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGVuZGVyID0gVGVuZGVyKGFkZHJlc3MpO1xyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgdGVuZGVyLm1ldGhvZHMudmVyaWZ5TWFuYWdlcigpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuICAgICAgcm91dGVyLnB1c2goYC90ZW5kZXJzLyR7YWRkcmVzc30vdmlld2JpZHMvJHtjb3VudH1gKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHZhbHVlOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvdGVuZGVycy8ke2FkZHJlc3N9L2ZpbmFsQmlkYCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgbWFuYWdlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUaGUgbWFuYWdlciBmbG9hdGVkIHRoaXMgdGVuZGVyIGFuZCBkZWNpZGVzIHdobyB0byBhd2FyZCB0aGUgdGVuZGVyIHRvLlwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YTogXCJQcm9qZWN0IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBicmllZiBkZXNjcmlwdGlvbiBhbmQgc3VtbWFyeSBvZiByZXF1aXJlbWVudHMuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGNvdW50LFxyXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIGJpZGRlcnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiTnVtYmVyIG9mIHZlbmRvcnMvc3VwcGxpZXJzIHdobyBoYXZlIGFscmVhZHkgcGxhY2VkIHRoZWlyIGJpZHMuXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3JlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Mn0+XHJcbiAgICAgICAgICB7c3RhdGUuZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtzdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQ29tcGxldGUgfHwgY291bnQgPT0gMH1cclxuICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICBsb2FkaW5nPXtzdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWV3IVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvdGVuZGVycy8ke2FkZHJlc3N9L2JpZGB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0NvbXBsZXRlfSBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAgTWFrZSBhIEJpZCFcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cclxuICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL3RlbmRlcnMvJHthZGRyZXNzfS9maW5hbGl6ZWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0NvbXBsZXRlfSBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAgRmluYWxpemUgdGhlIFdpbm5pbmcgQmlkIVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8R3JpZC5Sb3c+e3dpbm5lci5iaWRkZXJ9PC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCB0ZW5kZXIgPSBUZW5kZXIocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHRlbmRlci5tZXRob2RzLmdldFRlbmRlckRldGFpbHMoKS5jYWxsKCk7XHJcbiAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGVuZGVyLm1ldGhvZHMuZ2V0VGVuZGVyU3RhdGUoKS5jYWxsKCk7XHJcbiAgLy8gY29uc3QgbnVtYmVyT2ZCaWRzID0gYXdhaXQgdGVuZGVyLm1ldGhvZHMubnVtYmVyT2ZCaWRzKCkuY2FsbCgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKG51bWJlck9mQmlkcyk7XHJcbiAgdmFyIGlzQ29tcGxldGU7XHJcbiAgaWYgKHN0YXR1cyA9PT0gXCJPbmdvaW5nXCIpIGlzQ29tcGxldGUgPSBmYWxzZTtcclxuICBlbHNlIGlzQ29tcGxldGUgPSB0cnVlO1xyXG5cclxuICB2YXIgd2luSW5kZXgsIHdpbm5lcjtcclxuICBpZiAoaXNDb21wbGV0ZSlcclxuICB7XHJcbiAgICB3aW5uZXIgPSBhd2FpdCB0ZW5kZXIubWV0aG9kcy53aW5uZXIoKS5jYWxsKCk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAvLyBjb25zdCBpc0NvbXBsZXRlID0gYXdhaXQgdGVuZGVyLm1ldGhvZHMuY29tcGxldGUoKS5jYWxsKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzFdLFxyXG4gICAgICBjb3VudDogc3VtbWFyeVsyXSxcclxuICAgICAgaXNDb21wbGV0ZTogaXNDb21wbGV0ZSxcclxuICAgICAgd2lubmVyXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZW5kZXJTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
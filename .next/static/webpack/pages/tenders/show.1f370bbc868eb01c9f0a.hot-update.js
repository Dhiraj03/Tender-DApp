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
    disabled: isComplete || count,
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
  }, "Finalize the Winning Bid!")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVuZGVycy9zaG93LmpzIl0sIm5hbWVzIjpbIlRlbmRlclNob3ciLCJpc0NvbXBsZXRlIiwiYWRkcmVzcyIsIm1hbmFnZXIiLCJkZXNjcmlwdGlvbiIsImNvdW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJpbmRleCIsInN0YXRlIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZW5kZXIiLCJUZW5kZXIiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJ2ZXJpZnlNYW5hZ2VyIiwic2VuZCIsImZyb20iLCJwdXNoIiwibWVzc2FnZSIsIm9uQ2xpY2siLCJSb3V0ZXIiLCJyZXBsYWNlUm91dGUiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTBEO0FBQUE7O0FBQUEsTUFBdkRDLFVBQXVELFFBQXZEQSxVQUF1RDtBQUFBLE1BQTNDQyxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMzRSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQyRSxrQkFFakRDLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRSxFQUQwQjtBQUVqQ0MsZ0JBQVksRUFBRSxFQUZtQjtBQUdqQ0MsV0FBTyxFQUFFLEtBSHdCO0FB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SkYsQ0FKRixFQWlCRSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFNBQUssRUFBRTtBQUFwQixLQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLHFCQUFjVCxPQUFkO0FBQVgsS0FDRSxpQkFDRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFFRCxVQUFsQjtBQUE4QixXQUFPO0FBQXJDLG1CQURGLENBREYsQ0FERixDQWpCRixFQTBCRSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFNBQUssRUFBRTtBQUFwQixLQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLHFCQUFjQyxPQUFkO0FBQVgsS0FDRSxpQkFDRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFFRCxVQUFsQjtBQUE4QixXQUFPO0FBQXJDLGlDQURGLENBREYsQ0FERixDQTFCRixFQW1DRSxNQUFDLHNEQUFELENBQU0sR0FBTixPQW5DRixDQUZGLENBREY7QUEwQ0QsQ0FoR0Q7O0dBQU1ELFU7VUFDV08scUQ7OztLQURYUCxVOztBQXdIU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVuZGVycy9zaG93LjFmMzcwYmJjODY4ZWIwMWM5ZjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFRlbmRlciBmcm9tIFwiLi4vLi4vZXRoZXJldW0vdGVuZGVyXCI7XHJcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG4vL2ltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFRlbmRlclNob3cgPSAoeyBpc0NvbXBsZXRlLCBhZGRyZXNzLCBtYW5hZ2VyLCBkZXNjcmlwdGlvbiwgY291bnQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGluZGV4OiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRlbmRlciA9IFRlbmRlcihhZGRyZXNzKTtcclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IHRlbmRlci5tZXRob2RzLnZlcmlmeU1hbmFnZXIoKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvdGVuZGVycy8ke2FkZHJlc3N9L3ZpZXdiaWRzLyR7Y291bnR9YCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCB2YWx1ZTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL3RlbmRlcnMvJHthZGRyZXNzfS9maW5hbEJpZGApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIG1hbmFnZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlIG1hbmFnZXIgZmxvYXRlZCB0aGlzIHRlbmRlciBhbmQgZGVjaWRlcyB3aG8gdG8gYXdhcmQgdGhlIHRlbmRlciB0by5cIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1ldGE6IFwiUHJvamVjdCBkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgYnJpZWYgZGVzY3JpcHRpb24gYW5kIHN1bW1hcnkgb2YgcmVxdWlyZW1lbnRzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBjb3VudCxcclxuICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBiaWRkZXJzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIk51bWJlciBvZiB2ZW5kb3JzL3N1cHBsaWVycyB3aG8gaGF2ZSBhbHJlYWR5IHBsYWNlZCB0aGVpciBiaWRzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q2FtcGFpZ24gU2hvdzwvaDM+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PntyZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezJ9PlxyXG4gICAgICAgICAge3N0YXRlLmVycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17c3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0NvbXBsZXRlIHx8IGNvdW50fVxyXG4gICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3N0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFZpZXchXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC90ZW5kZXJzLyR7YWRkcmVzc30vYmlkYH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzQ29tcGxldGV9IHByaW1hcnk+XHJcbiAgICAgICAgICAgICAgICBNYWtlIGEgQmlkIVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvdGVuZGVycy8ke2FkZHJlc3N9L2ZpbmFsaXplYH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzQ29tcGxldGV9IHByaW1hcnk+XHJcbiAgICAgICAgICAgICAgICBGaW5hbGl6ZSB0aGUgV2lubmluZyBCaWQhXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDxHcmlkLlJvdz48L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRlbmRlciA9IFRlbmRlcihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgdGVuZGVyLm1ldGhvZHMuZ2V0VGVuZGVyRGV0YWlscygpLmNhbGwoKTtcclxuICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0ZW5kZXIubWV0aG9kcy5nZXRUZW5kZXJTdGF0ZSgpLmNhbGwoKTtcclxuICAvLyBjb25zdCBudW1iZXJPZkJpZHMgPSBhd2FpdCB0ZW5kZXIubWV0aG9kcy5udW1iZXJPZkJpZHMoKS5jYWxsKCk7XHJcbiAgLy8gY29uc29sZS5sb2cobnVtYmVyT2ZCaWRzKTtcclxuICB2YXIgaXNDb21wbGV0ZTtcclxuICBpZiAoc3RhdHVzID09PSBcIk9uZ29pbmdcIikgaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gIGVsc2UgaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgLy8gY29uc3QgaXNDb21wbGV0ZSA9IGF3YWl0IHRlbmRlci5tZXRob2RzLmNvbXBsZXRlKCkuY2FsbCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICBkZXNjcmlwdGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgbWFuYWdlcjogc3VtbWFyeVsxXSxcclxuICAgICAgY291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgIGlzQ29tcGxldGU6IGlzQ29tcGxldGUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZW5kZXJTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
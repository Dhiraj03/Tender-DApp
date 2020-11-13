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
      count = _ref.count,
      winnerAddress = _ref.winnerAddress,
      winnerBidAmount = _ref.winnerBidAmount;
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
  }, "Finalize the Winning Bid!")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, winnerAddress && winnerAddress)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVuZGVycy9zaG93LmpzIl0sIm5hbWVzIjpbIlRlbmRlclNob3ciLCJpc0NvbXBsZXRlIiwiYWRkcmVzcyIsIm1hbmFnZXIiLCJkZXNjcmlwdGlvbiIsImNvdW50Iiwid2lubmVyQWRkcmVzcyIsIndpbm5lckJpZEFtb3VudCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiaW5kZXgiLCJzdGF0ZSIsInNldFN0YXRlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGVuZGVyIiwiVGVuZGVyIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwidmVyaWZ5TWFuYWdlciIsInNlbmQiLCJmcm9tIiwicHVzaCIsIm1lc3NhZ2UiLCJvbkNsaWNrIiwiUm91dGVyIiwicmVwbGFjZVJvdXRlIiwicmVuZGVyQ2FyZHMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQVFiO0FBQUE7O0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsT0FLSSxRQUxKQSxPQUtJO0FBQUEsTUFKSkMsV0FJSSxRQUpKQSxXQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsYUFFSSxRQUZKQSxhQUVJO0FBQUEsTUFESkMsZUFDSSxRQURKQSxlQUNJO0FBQ0osTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFESSxrQkFFc0JDLHNEQUFRLENBQUM7QUFD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QVUsSUFBSUksS0FBSyxJQUFJLENBRm5DO0FBR0UsV0FBTyxNQUhUO0FBSUUsV0FBTyxFQUFFVSxLQUFLLENBQUNGO0FBSmpCLGFBSkYsQ0FKRixFQWlCRSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFNBQUssRUFBRTtBQUFwQixLQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLHFCQUFjWCxPQUFkO0FBQVgsS0FDRSxpQkFDRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFFRCxVQUFsQjtBQUE4QixXQUFPO0FBQXJDLG1CQURGLENBREYsQ0FERixDQWpCRixFQTBCRSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFNBQUssRUFBRTtBQUFwQixLQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLHFCQUFjQyxPQUFkO0FBQVgsS0FDRSxpQkFDRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFFRCxVQUFsQjtBQUE4QixXQUFPO0FBQXJDLGlDQURGLENBREYsQ0FERixDQTFCRixFQW1DRSxNQUFDLHNEQUFELENBQU0sR0FBTixRQUFXSyxhQUFhLElBQUlBLGFBQTVCLENBbkNGLENBRkYsQ0FERjtBQTBDRCxDQXhHRDs7R0FBTU4sVTtVQVNXUyxxRDs7O0tBVFhULFU7O0FBMElTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZW5kZXJzL3Nob3cuNGUzMGM2Njk5ZGY4MDkxMmRiZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgVGVuZGVyIGZyb20gXCIuLi8uLi9ldGhlcmV1bS90ZW5kZXJcIjtcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcbi8vaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVGVuZGVyU2hvdyA9ICh7XHJcbiAgaXNDb21wbGV0ZSxcclxuICBhZGRyZXNzLFxyXG4gIG1hbmFnZXIsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY291bnQsXHJcbiAgd2lubmVyQWRkcmVzcyxcclxuICB3aW5uZXJCaWRBbW91bnQsXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBpbmRleDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0ZW5kZXIgPSBUZW5kZXIoYWRkcmVzcyk7XHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCB0ZW5kZXIubWV0aG9kcy52ZXJpZnlNYW5hZ2VyKCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByb3V0ZXIucHVzaChgL3RlbmRlcnMvJHthZGRyZXNzfS92aWV3Ymlkcy8ke2NvdW50fWApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgdmFsdWU6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC90ZW5kZXJzLyR7YWRkcmVzc30vZmluYWxCaWRgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxyXG4gICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBtYW5hZ2VyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSBtYW5hZ2VyIGZsb2F0ZWQgdGhpcyB0ZW5kZXIgYW5kIGRlY2lkZXMgd2hvIHRvIGF3YXJkIHRoZSB0ZW5kZXIgdG8uXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBkZXNjcmlwdGlvbixcclxuICAgICAgICBtZXRhOiBcIlByb2plY3QgZGVzY3JpcHRpb25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGJyaWVmIGRlc2NyaXB0aW9uIGFuZCBzdW1tYXJ5IG9mIHJlcXVpcmVtZW50cy5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogY291bnQsXHJcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgYmlkZGVyc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJOdW1iZXIgb2YgdmVuZG9ycy9zdXBwbGllcnMgd2hvIGhhdmUgYWxyZWFkeSBwbGFjZWQgdGhlaXIgYmlkcy5cIixcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgzPkNhbXBhaWduIFNob3c8L2gzPlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57cmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsyfT5cclxuICAgICAgICAgIHtzdGF0ZS5lcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3N0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNDb21wbGV0ZSB8fCBjb3VudCA9PSAwfVxyXG4gICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3N0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFZpZXchXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC90ZW5kZXJzLyR7YWRkcmVzc30vYmlkYH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzQ29tcGxldGV9IHByaW1hcnk+XHJcbiAgICAgICAgICAgICAgICBNYWtlIGEgQmlkIVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvdGVuZGVycy8ke2FkZHJlc3N9L2ZpbmFsaXplYH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzQ29tcGxldGV9IHByaW1hcnk+XHJcbiAgICAgICAgICAgICAgICBGaW5hbGl6ZSB0aGUgV2lubmluZyBCaWQhXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDxHcmlkLlJvdz57d2lubmVyQWRkcmVzcyAmJiB3aW5uZXJBZGRyZXNzfTwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdGVuZGVyID0gVGVuZGVyKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCB0ZW5kZXIubWV0aG9kcy5nZXRUZW5kZXJEZXRhaWxzKCkuY2FsbCgpO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRlbmRlci5tZXRob2RzLmdldFRlbmRlclN0YXRlKCkuY2FsbCgpO1xyXG4gIC8vIGNvbnN0IG51bWJlck9mQmlkcyA9IGF3YWl0IHRlbmRlci5tZXRob2RzLm51bWJlck9mQmlkcygpLmNhbGwoKTtcclxuICAvLyBjb25zb2xlLmxvZyhudW1iZXJPZkJpZHMpO1xyXG4gIHZhciBpc0NvbXBsZXRlO1xyXG4gIGlmIChzdGF0dXMgPT09IFwiT25nb2luZ1wiKSBpc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgZWxzZSBpc0NvbXBsZXRlID0gdHJ1ZTtcclxuXHJcbiAgdmFyIHdpbkluZGV4LCB3aW5uZXI7XHJcbiAgaWYgKGlzQ29tcGxldGUpXHJcbiAge1xyXG4gICAgd2lubmVyID0gYXdhaXQgdGVuZGVyLm1ldGhvZHMud2lubmVyKCkuY2FsbCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgLy8gY29uc3QgaXNDb21wbGV0ZSA9IGF3YWl0IHRlbmRlci5tZXRob2RzLmNvbXBsZXRlKCkuY2FsbCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICBkZXNjcmlwdGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgbWFuYWdlcjogc3VtbWFyeVsxXSxcclxuICAgICAgY291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgIGlzQ29tcGxldGU6IGlzQ29tcGxldGUsXHJcbiAgICAgIHdpbm5lckFkZHJlc3M6IHdpbm5lci5iaWRkZXIsXHJcbiAgICAgIHdpbm5lckJpZEFtb3VudDogd2lubmVyLmJpZEFtb3VudCxcclxuICAgICAgd2lubmVyQmlkOiB3aW5uZXIuYmlkXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZW5kZXJTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
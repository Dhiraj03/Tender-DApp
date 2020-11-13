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
  }, "Finalize the Winning Bid!")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, winnerAddress && winner.bidder)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVuZGVycy9zaG93LmpzIl0sIm5hbWVzIjpbIlRlbmRlclNob3ciLCJpc0NvbXBsZXRlIiwiYWRkcmVzcyIsIm1hbmFnZXIiLCJkZXNjcmlwdGlvbiIsImNvdW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJpbmRleCIsInN0YXRlIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZW5kZXIiLCJUZW5kZXIiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJ2ZXJpZnlNYW5hZ2VyIiwic2VuZCIsImZyb20iLCJwdXNoIiwibWVzc2FnZSIsIm9uQ2xpY2siLCJSb3V0ZXIiLCJyZXBsYWNlUm91dGUiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2lubmVyQWRkcmVzcyIsIndpbm5lciIsImJpZGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwRDtBQUFBOztBQUFBLE1BQXZEQyxVQUF1RCxRQUF2REEsVUFBdUQ7QUFBQSxNQUEzQ0MsT0FBMkMsUUFBM0NBLE9BQTJDO0FBQUEsTUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLE1BQXpCQyxXQUF5QixRQUF6QkEsV0FBeUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDM0UsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEMkUsa0JBRWpEQyxzREFBUSxDQUFDO0FBQ2pDQyxTQUFLLEVBQUUsRUFEMEI7QUFFakNDLGdCQUFZLEVB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QUFPLE1BSFQ7QUFJRSxXQUFPLEVBQUVRLEtBQUssQ0FBQ0Y7QUFKakIsYUFKRixDQUpGLEVBaUJFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFO0FBQXBCLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUsscUJBQWNULE9BQWQ7QUFBWCxLQUNFLGlCQUNFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUVELFVBQWxCO0FBQThCLFdBQU87QUFBckMsbUJBREYsQ0FERixDQURGLENBakJGLEVBMEJFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFO0FBQXBCLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUsscUJBQWNDLE9BQWQ7QUFBWCxLQUNFLGlCQUNFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUVELFVBQWxCO0FBQThCLFdBQU87QUFBckMsaUNBREYsQ0FERixDQURGLENBMUJGLEVBbUNFLE1BQUMsc0RBQUQsQ0FBTSxHQUFOLFFBQVdzQyxhQUFhLElBQUlDLE1BQU0sQ0FBQ0MsTUFBbkMsQ0FuQ0YsQ0FGRixDQURGO0FBMENELENBaEdEOztHQUFNekMsVTtVQUNXTyxxRDs7O0tBRFhQLFU7O0FBZ0lTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZW5kZXJzL3Nob3cuM2RmYjdjOTI1MmNkMTU3M2UxNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgVGVuZGVyIGZyb20gXCIuLi8uLi9ldGhlcmV1bS90ZW5kZXJcIjtcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcbi8vaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVGVuZGVyU2hvdyA9ICh7IGlzQ29tcGxldGUsIGFkZHJlc3MsIG1hbmFnZXIsIGRlc2NyaXB0aW9uLCBjb3VudCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgaW5kZXg6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGVuZGVyID0gVGVuZGVyKGFkZHJlc3MpO1xyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgdGVuZGVyLm1ldGhvZHMudmVyaWZ5TWFuYWdlcigpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuICAgICAgcm91dGVyLnB1c2goYC90ZW5kZXJzLyR7YWRkcmVzc30vdmlld2JpZHMvJHtjb3VudH1gKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHZhbHVlOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvdGVuZGVycy8ke2FkZHJlc3N9L2ZpbmFsQmlkYCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgbWFuYWdlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUaGUgbWFuYWdlciBmbG9hdGVkIHRoaXMgdGVuZGVyIGFuZCBkZWNpZGVzIHdobyB0byBhd2FyZCB0aGUgdGVuZGVyIHRvLlwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YTogXCJQcm9qZWN0IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBicmllZiBkZXNjcmlwdGlvbiBhbmQgc3VtbWFyeSBvZiByZXF1aXJlbWVudHMuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGNvdW50LFxyXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIGJpZGRlcnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiTnVtYmVyIG9mIHZlbmRvcnMvc3VwcGxpZXJzIHdobyBoYXZlIGFscmVhZHkgcGxhY2VkIHRoZWlyIGJpZHMuXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3JlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Mn0+XHJcbiAgICAgICAgICB7c3RhdGUuZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtzdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQ29tcGxldGUgfHwgY291bnQgPT0gMH1cclxuICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICBsb2FkaW5nPXtzdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWV3IVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvdGVuZGVycy8ke2FkZHJlc3N9L2JpZGB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0NvbXBsZXRlfSBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAgTWFrZSBhIEJpZCFcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cclxuICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL3RlbmRlcnMvJHthZGRyZXNzfS9maW5hbGl6ZWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0NvbXBsZXRlfSBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAgRmluYWxpemUgdGhlIFdpbm5pbmcgQmlkIVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8R3JpZC5Sb3c+e3dpbm5lckFkZHJlc3MgJiYgd2lubmVyLmJpZGRlcn08L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRlbmRlciA9IFRlbmRlcihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgdGVuZGVyLm1ldGhvZHMuZ2V0VGVuZGVyRGV0YWlscygpLmNhbGwoKTtcclxuICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0ZW5kZXIubWV0aG9kcy5nZXRUZW5kZXJTdGF0ZSgpLmNhbGwoKTtcclxuICAvLyBjb25zdCBudW1iZXJPZkJpZHMgPSBhd2FpdCB0ZW5kZXIubWV0aG9kcy5udW1iZXJPZkJpZHMoKS5jYWxsKCk7XHJcbiAgLy8gY29uc29sZS5sb2cobnVtYmVyT2ZCaWRzKTtcclxuICB2YXIgaXNDb21wbGV0ZTtcclxuICBpZiAoc3RhdHVzID09PSBcIk9uZ29pbmdcIikgaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gIGVsc2UgaXNDb21wbGV0ZSA9IHRydWU7XHJcblxyXG4gIHZhciB3aW5JbmRleCwgd2lubmVyO1xyXG4gIGlmIChpc0NvbXBsZXRlKVxyXG4gIHtcclxuICAgIHdpbm5lciA9IGF3YWl0IHRlbmRlci5tZXRob2RzLndpbm5lcigpLmNhbGwoKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gIC8vIGNvbnN0IGlzQ29tcGxldGUgPSBhd2FpdCB0ZW5kZXIubWV0aG9kcy5jb21wbGV0ZSgpLmNhbGwoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgZGVzY3JpcHRpb246IHN1bW1hcnlbMF0sXHJcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbMV0sXHJcbiAgICAgIGNvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgICBpc0NvbXBsZXRlOiBpc0NvbXBsZXRlLFxyXG4gICAgICB3aW5uZXJBZGRyZXNzOiB3aW5uZXIuYmlkZGVyLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVuZGVyU2hvdztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
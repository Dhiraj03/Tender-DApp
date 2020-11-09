"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\Tender-DApp\\pages\\index.js?entry";


var TenderIndex = function (_Component) {
  (0, _inherits3.default)(TenderIndex, _Component);

  function TenderIndex() {
    (0, _classCallCheck3.default)(this, TenderIndex);

    return (0, _possibleConstructorReturn3.default)(this, (TenderIndex.__proto__ || (0, _getPrototypeOf2.default)(TenderIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(TenderIndex, [{
    key: "renderTenders",

    /*Creates a array containing all relevant attributes of tender cards
      to be displayed
    */
    value: function renderTenders() {
      var items = this.props.tenders.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/tenders/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, "View Tender")),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        //Layout is a custom tag created in components/layout
        _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, _react2.default.createElement(_routes.Link, { route: "/tenders/new", __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          content: "Float a Tender",
          icon: "add circle",
          primary: true,
          floated: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }))), this.renderTenders()))
      );
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var tenders;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedTenders().call();

              case 2:
                tenders = _context.sent;
                return _context.abrupt("return", { tenders: tenders });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TenderIndex;
}(_react.Component);

exports.default = TenderIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTWVudSIsIkxpbmsiLCJMYXlvdXQiLCJUZW5kZXJJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJ0ZW5kZXJzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJUZW5kZXJzIiwibWV0aG9kcyIsImdldERlcGxveWVkVGVuZGVycyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBR2IsQTs7Ozs7Ozs7OztTQU1KOzs7OztvQ0FHZ0IsQUFDZDtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLG1CQUFXLEFBQzlDOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyxxQkFBTixBQUF5Qjt3QkFBekI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7aUJBUEYsQUFBTyxBQU9FLEFBRVY7QUFUUSxBQUNMO0FBRkosQUFBYyxBQVdkLE9BWGM7MkNBV1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQO0FBQ0U7QUFDQTt3QkFBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtzQkFBWjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsQUFBQzttQkFBRCxBQUNVLEFBQ1I7Z0JBRkYsQUFFTyxBQUNMO21CQUhGLEFBSUU7bUJBSkYsQUFJVTs7c0JBSlY7d0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsbUJBUFosQUFFRSxBQUNFLEFBV0csQUFBSyxBQUliOzs7Ozs7Ozs7Ozs7O3VCQXhDdUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHFCQUFoQixBQUFxQyxBOzttQkFBckQ7QTtpREFDQyxFQUFFLFNBQUYsQUFBVyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSkksQSxBQThDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC9UZW5kZXItREFwcCJ9
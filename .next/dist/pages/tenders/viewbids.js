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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _tender = require("../../ethereum/tender");

var _tender2 = _interopRequireDefault(_tender);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\Tender-DApp\\pages\\tenders\\viewbids.js?entry";


var BidDisplay = function (_Component) {
  (0, _inherits3.default)(BidDisplay, _Component);

  function BidDisplay() {
    (0, _classCallCheck3.default)(this, BidDisplay);

    return (0, _possibleConstructorReturn3.default)(this, (BidDisplay.__proto__ || (0, _getPrototypeOf2.default)(BidDisplay)).apply(this, arguments));
  }

  (0, _createClass3.default)(BidDisplay, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          index = _props.index,
          bidAmount = _props.bidAmount,
          description = _props.description;

      var items = [{
        header: index,
        meta: "ID of the Bid",
        description: "The unique identification number of the given bid.",
        style: { overflowWrap: "break-word" }
      }, {
        header: bidAmount,
        meta: "Bid Amount",
        description: "The price of the bid made by the bidder."
      }, {
        header: description,
        meta: "Description",
        description: "Proposal of the bidder."
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Bid Show"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_routes.Link, { route: "/tenders/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Details of the tender.")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var tender, index, bid;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tender = (0, _tender2.default)(props.query.address);
                index = props.query.index;
                _context.next = 4;
                return tender.methods.hiddenBids(index).call();

              case 4:
                bid = _context.sent;
                return _context.abrupt("return", {
                  index: bid.ID,
                  bidAmount: bid.bidAmount,
                  description: bid.bid
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return BidDisplay;
}(_react.Component);

exports.default = BidDisplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0ZW5kZXJzXFx2aWV3Ymlkcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIlRlbmRlciIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkxpbmsiLCJCaWREaXNwbGF5IiwicHJvcHMiLCJpbmRleCIsImJpZEFtb3VudCIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJ0ZW5kZXIiLCJxdWVyeSIsIm1ldGhvZHMiLCJoaWRkZW5CaWRzIiwiY2FsbCIsImJpZCIsIklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUdmOzs7Ozs7Ozs7OztrQ0FjUzttQkFLTixLQUxNLEFBS0Q7VUFMQyxBQUVOLGVBRk0sQUFFTjtVQUZNLEFBR04sbUJBSE0sQUFHTjtVQUhNLEFBSU4scUJBSk0sQUFJTixBQUVMOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBTkMsQUFDWixBQUtTLEFBQWdCO0FBTHpCLEFBQ0UsT0FGVTtnQkFRWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBWFUsQUFRWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBaEJKLEFBQWMsQUFhWixBQUlJLEFBR047QUFQRSxBQUNFOzJDQU1HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBSUMsQUFDUjs2QkFDSSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSw2QkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQXlCO0FBQXpCO2NBREEsQUFDQSxBQUF5QixBQUFLLEFBQzlCLDhDQUFBLEFBQUMsc0JBQUQsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUhKLEFBQ0ksQUFFQSxBQUdBO0FBSEE7MkJBR0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLEFBQUMsOEJBQUsscUJBQW1CLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBYmhCLEFBQ0ksQUFFQSxBQU1JLEFBQ0EsQUFDSSxBQUNBLEFBQ0ksQUFPbkI7Ozs7OzJHQWhFNEIsQTs7Ozs7bUJBRXZCO0EseUJBQVMsc0JBQU8sTUFBQSxBQUFNLE1BQWIsQUFBbUIsQSxBQUM1QjtBLHdCQUFRLE1BQUEsQUFBTSxNQUFNLEE7O3VCQUNSLE9BQUEsQUFBTyxRQUFQLEFBQWUsV0FBZixBQUEwQixPQUExQixBLEFBQWlDOzttQkFBN0M7QTs7eUJBRU0sSUFETCxBQUNTLEFBQ1o7NkJBQVksSUFGVCxBQUVhLEFBQ2hCOytCQUFjLElBSFgsQUFHZSxBO0FBSGYsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBxQixBLEFBb0V6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ2aWV3Ymlkcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kaGlyYS9EZXNrdG9wL1RlbmRlci1EQXBwIn0=
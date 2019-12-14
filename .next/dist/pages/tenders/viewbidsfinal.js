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

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\tender\\pages\\tenders\\viewbidsfinal.js?entry";


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
          bidAddress = _props.bidAddress,
          bidAmount = _props.bidAmount,
          description = _props.description;

      var items = [{
        header: bidAddress,
        meta: "Address of the bidder.",
        description: "The unique address of the bidder.",
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
          lineNumber: 40
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Bid Show"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_routes.Link, { route: "/tenders/" + this.props.address + "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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
                return tender.methods.getBidSummary(index).call();

              case 4:
                bid = _context.sent;
                return _context.abrupt("return", {
                  bidAddress: bid[0],
                  bidAmount: bid[1],
                  description: bid[2]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0ZW5kZXJzXFx2aWV3Ymlkc2ZpbmFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiVGVuZGVyIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwiTGluayIsIkJpZERpc3BsYXkiLCJwcm9wcyIsImJpZEFkZHJlc3MiLCJiaWRBbW91bnQiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwidGVuZGVyIiwicXVlcnkiLCJpbmRleCIsIm1ldGhvZHMiLCJnZXRCaWRTdW1tYXJ5IiwiY2FsbCIsImJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7a0NBWVU7bUJBQ21DLEtBRG5DLEFBQ3dDO1VBRHhDLEFBQ0osb0JBREksQUFDSjtVQURJLEFBQ1EsbUJBRFIsQUFDUTtVQURSLEFBQ21CLHFCQURuQixBQUNtQixBQUMvQjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQUxDLEFBQ1osQUFJUyxBQUFnQjtBQUp6QixBQUNFLE9BRlU7Z0JBT1osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQVZVLEFBT1osQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQWZKLEFBQWMsQUFZWixBQUdlLEFBR2pCO0FBTkUsQUFDRTsyQ0FLRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUM5Qiw4Q0FBQSxBQUFDLHNCQUFELEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFOzJCQUVELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLHFCQUFtQixLQUFBLEFBQUssTUFBeEIsQUFBOEIsVUFBcEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBWmQsQUFDRSxBQUVFLEFBS0UsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVFmOzs7OzsyRyxBQXZENEI7Ozs7O21CQUNyQjtBLHlCQUFTLHNCQUFPLE1BQUEsQUFBTSxNQUFiLEFBQW1CLEFBQzVCLEE7QSx3QkFBUSxNQUFBLEFBQU0sTSxBQUFNOzt1QkFDUixPQUFBLEFBQU8sUUFBUCxBQUFlLGNBQWYsQUFBNkIsT0FBN0IsQSxBQUFvQzs7bUJBQWhEO0E7OzhCQUVRLElBRFAsQUFDTyxBQUFJLEFBQ2hCOzZCQUFXLElBRk4sQUFFTSxBQUFJLEFBQ2Y7K0JBQWEsSUFIUixBQUdRLEFBQUksQTtBQUhaLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFObUIsQSxBQTJEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidmlld2JpZHNmaW5hbC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kaGlyYS9EZXNrdG9wL3RlbmRlciJ9
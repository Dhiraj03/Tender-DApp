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

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\tender\\pages\\tenders\\show.js?entry";
//import ContributeForm from "../../components/ContributeForm";


var TenderShow = function (_Component) {
  (0, _inherits3.default)(TenderShow, _Component);

  function TenderShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TenderShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TenderShow.__proto__ || (0, _getPrototypeOf2.default)(TenderShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: "",
      errorMessage: "",
      loading: false,
      index: ""

    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var tender, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                tender = (0, _tender2.default)(_this.props.address);

                _this.setState({ loading: true });
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return tender.methods.verify().send({
                  from: accounts[0]
                });

              case 9:

                _routes.Router.replaceRoute("/tenders/" + _this.props.address + "/viewbids/" + _this.state.value);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                _this.setState({ loading: false, value: "" });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onClick = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _routes.Router.replaceRoute("/tenders/" + _this.props.address + "/finalBid");

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TenderShow, [{
    key: "renderCards",

    /* onSumbitFinal = async event => {
       event.preventDefault();
       console.log("lol");
       const tender = Tender(this.props.address);
       const windex = await tender.methods.winIndex().call();
       this.setState({winIndex:windex});
       this.setState({ loadingFinal: true });
       try {
         const accounts = await web3.eth.getAccounts();
         Router.replaceRoute(
           `/tenders/${this.props.address}/viewbids/${this.props.valueFinal}/final`
         );
       } catch (errFinal) {
         this.setState({ errorMessageFinal: errFinal.message});
       }
       this.setState({ loadingFinal: false, valueFinal: "" });
    
     };
     */
    value: function renderCards() {
      var _props = this.props,
          manager = _props.manager,
          description = _props.description,
          count = _props.count;

      var items = [{
        header: manager,
        meta: "Address of manager",
        description: "The manager floated this tender and decides who to award the tender to.",
        style: { overflowWrap: "break-word" }
      }, {
        header: "Project description",
        meta: "A brief description and summary of requirements.",
        description: description
      }, {
        header: count,
        meta: "Number of bidders",
        description: "Number of vendors/suppliers who have already placed their bids."
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isComplete = this.props.isComplete;

      console.log(isComplete);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Campaign Show"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Enter Bid Index to be viewed:"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        disabled: isComplete,
        primary: true,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "View!"))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_routes.Link, { route: "/tenders/" + this.props.address + "/bid", __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { disabled: isComplete, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Bid for this project")))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement(_routes.Link, { route: "/tenders/" + this.props.address + "/finalize", __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { disabled: isComplete, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "Finalize the Winning Bid!"))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onClick, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "View all details of bids!"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var tender, data, summary, isComplete;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                tender = (0, _tender2.default)(props.query.address);
                _context3.next = 3;
                return tender.methods.data().call();

              case 3:
                data = _context3.sent;
                _context3.next = 6;
                return tender.methods.getSummary().call();

              case 6:
                summary = _context3.sent;

                console.log(summary);
                _context3.next = 10;
                return tender.methods.complete().call();

              case 10:
                isComplete = _context3.sent;
                return _context3.abrupt("return", {
                  address: props.query.address,
                  description: summary[0],
                  manager: summary[1],
                  count: summary[2],
                  isComplete: isComplete

                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TenderShow;
}(_react.Component);

exports.default = TenderShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0ZW5kZXJzXFxzaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiVGVuZGVyIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsIlJvdXRlciIsIkxpbmsiLCJUZW5kZXJTaG93Iiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJpbmRleCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRlbmRlciIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJ2ZXJpZnkiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJvbkNsaWNrIiwibWFuYWdlciIsImRlc2NyaXB0aW9uIiwiY291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImlzQ29tcGxldGUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ2FyZHMiLCJ0YXJnZXQiLCJxdWVyeSIsImRhdGEiLCJjYWxsIiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBTSxBQUFPOztBQUMxQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7OztBQUN2QixBQUNBLEFBQVMsQUFBWTs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0o7YUFBUSxBQUNDLEFBQ1A7b0JBRk0sQUFFUSxBQUNkO2VBSE0sQUFHRyxBQUNUO2EsQUFKTSxBQUlBOztBQUpBLEFBQ04sYUFzQkYsQTsy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QUF5QkUsQUFVRSxBQUNFLEFBQ0UsQUFDRSxBQU9SLGtEQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFTLEtBQWpCLEFBQXNCLFNBQVMsU0FBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQWpEUixBQUNFLEFBRUUsQUE2Q0UsQUFDRSxBQU9UOzs7Ozs2R0E5STRCLEE7Ozs7O21CQUNyQjtBLHlCQUFTLHNCQUFPLE1BQUEsQUFBTSxNQUFiLEFBQW1CLEE7O3VCQUNmLE9BQUEsQUFBTyxRQUFQLEFBQWUsT0FBZixBLEFBQXNCOzttQkFBbkM7QTs7dUJBQ2dCLE9BQUEsQUFBTyxRQUFQLEFBQWUsYUFBZixBQUE0QixBOzttQkFBNUM7QSxvQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3VCQUNhLE9BQUEsQUFBTyxRQUFQLEFBQWUsV0FBZixBQUEwQixBOzttQkFBN0M7QTs7MkJBRUssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7K0JBQWEsUUFGUixBQUVRLEFBQVEsQUFDckI7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7eUJBQU8sUUFKRixBQUlFLEFBQVEsQUFDZjs4QkFMSyxBQUtPLEE7O0FBTFAsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZtQixBLEFBMEp6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RoaXJhL0Rlc2t0b3AvdGVuZGVyIn0=
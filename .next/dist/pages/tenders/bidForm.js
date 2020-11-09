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

var _semanticUiReact = require("semantic-ui-react");

var _tender = require("../../ethereum/tender");

var _tender2 = _interopRequireDefault(_tender);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\Tender-DApp\\pages\\tenders\\bidForm.js?entry";


var BidNew = function (_Component) {
    (0, _inherits3.default)(BidNew, _Component);

    function BidNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, BidNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BidNew.__proto__ || (0, _getPrototypeOf2.default)(BidNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            bidAmount: "",
            description: "",
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var tender, _this$state, bidAmount, description, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                //prevents routing to some other page (which is default action)
                                event.preventDefault();

                                tender = (0, _tender2.default)(_this.props.address);
                                _this$state = _this.state, bidAmount = _this$state.bidAmount, description = _this$state.description;

                                _this.setState({ loading: true, errorMessage: "" });
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return tender.methods.makeBid(bidAmount, description).send({ from: accounts[0] });

                            case 10:
                                _routes.Router.pushRoute('/');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(BidNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_routes.Link, { route: "/tenders/" + this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, "Back")), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, "Bid Amount"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.bidAmount,
                onChange: function onChange(event) {
                    return _this3.setState({ bidAmount: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, "Create!")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return BidNew;
}(_react.Component);

exports.default = BidNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0ZW5kZXJzXFxiaWRGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIlRlbmRlciIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiQmlkTmV3Iiwic3RhdGUiLCJiaWRBbW91bnQiLCJkZXNjcmlwdGlvbiIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZW5kZXIiLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwibWFrZUJpZCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBUzs7QUFDaEMsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDSjt1QkFBUSxBQUNLLEFBQ1g7eUJBRk0sQUFFTyxBQUNiO3FCQUhNLEFBR0csQUFDVDswQixBQUpNLEFBSVM7QUFKVCxBQUNOLGlCQU1GLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO2lFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDVDtBQUNBO3NDQUFBLEFBQU0sQUFFQTs7QUFKRyx5Q0FJTSxzQkFBTyxNQUFBLEFBQUssTUFKbEIsQUFJTSxBQUFrQjs4Q0FDRSxNQUwxQixBQUsrQixPQUwvQixBQUtELHdCQUxDLEFBS0QsV0FMQyxBQUtVLDBCQUxWLEFBS1UsQUFDbkI7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBTnRCLEFBTVQsQUFBYyxBQUErQjtnREFOcEM7Z0RBQUE7dUNBUWdCLGNBQUEsQUFBSyxJQVJyQixBQVFnQixBQUFTOztpQ0FBMUI7QUFSQyxvREFBQTtnREFBQTt1Q0FTRCxPQUFBLEFBQU8sUUFBUCxBQUNILFFBREcsQUFDSyxXQURMLEFBQ2dCLGFBRGhCLEFBRUgsS0FBSyxFQUFFLE1BQU0sU0FYVCxBQVNELEFBRUUsQUFBUSxBQUFTOztpQ0FDekI7K0NBQUEsQUFBTyxVQVpBLEFBWVAsQUFBaUI7Z0RBWlY7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBY1A7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFkdkIsQUFjUCxBQUFjLEFBQW9COztpQ0FFcEM7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FoQlAsQUFnQlQsQUFBYyxBQUFXOztpQ0FoQmhCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBd0JBO3lCQUNMOzttQ0FDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsOEJBQUsscUJBQW1CLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBQ0ksQUFDQSxBQU1BLDBCQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDQTtBQURBOytCQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdDQUFBLEFBQUM7dUJBQ00sS0FBQSxBQUFLLE1BRFosQUFDa0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQ04sT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUQ3QixBQUNOLEFBQWMsQUFBNEI7QUFIOUM7OzhCQUFBO2dDQUhKLEFBQ0EsQUFFSSxBQU9KO0FBUEk7QUFDQSxpQ0FNSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwrQkFBQSxBQUFDO3VCQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FEM0IsQUFDTixBQUFjLEFBQTBCO0FBSDVDOzs4QkFBQTtnQ0FaSixBQVVBLEFBRUksQUFPSjtBQVBJO0FBQ0EsaUNBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FuQkEsQUFtQkEsQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQTdCSixBQUNBLEFBUUksQUFvQkEsQUFJWDs7Ozs7bUhBdkNnQyxBOzs7OztpQ0FDbEI7QSwwQ0FBVyxNQUFNLEEsTUFBakIsQTtrRUFDQSxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTdCTSxBLEFBcUVyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJiaWRGb3JtLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RoaXJhL0Rlc2t0b3AvVGVuZGVyLURBcHAifQ==
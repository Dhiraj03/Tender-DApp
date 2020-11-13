module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "@fluentui/react");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dhira\\Desktop\\Tender-DApp\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = ({
  theme,
  setTheme
}) => {
  return __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__["CommandBar"], {
    style: {
      borderBottom: '1px solid grey'
    },
    items: [{
      key: 'home',
      text: 'Tender 2.0',
      href: '/'
    }],
    farItems: [{
      key: 'newTender',
      text: 'Create a Tender',
      iconProps: {
        iconName: 'Add'
      },
      href: '/tenders/new'
    }, {
      key: 'theme',
      iconProps: {
        iconName: theme !== 'light' ? 'Sunny' : 'ClearNight'
      },
      onClick: () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "@fluentui/react");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fluentui_react_theme_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-theme-provider */ "@fluentui/react-theme-provider");
/* harmony import */ var _fluentui_react_theme_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react_theme_provider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./context.js");
var _jsxFileName = "C:\\Users\\dhira\\Desktop\\Tender-DApp\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const darkTheme = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["createTheme"])({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#0b0b0b',
    neutralLighter: '#151515',
    neutralLight: '#252525',
    neutralQuaternaryAlt: '#2f2f2f',
    neutralQuaternary: '#373737',
    neutralTertiaryAlt: '#595959',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#000000'
  }
});
const lightTheme = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["createTheme"])({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#ffffff'
  }
});

const Layout = props => {
  const {
    theme: curTheme,
    setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return __jsx(_fluentui_react_theme_provider__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: curTheme === 'light' ? lightTheme : darkTheme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Tender DApp 2.0")), __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: curTheme,
    setTheme: setTheme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    style: {
      padding: '15px 8%',
      minHeight: '100vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./ethereum/build/tenderFactory.json":
/*!*******************************************!*\
  !*** ./ethereum/build/tenderFactory.json ***!
  \*******************************************/
/*! exports provided: assembly, bytecode, functionHashes, gasEstimates, interface, metadata, opcodes, runtimeBytecode, srcmap, srcmapRuntime, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":26,\"end\":572,\"name\":\"MSTORE\"},{\"begin\":26,\"end\":572,\"name\":\"CALLVALUE\"},{\"begin\":26,\"end\":572,\"name\":\"ISZERO\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPI\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"DUP1\"},{\"begin\":26,\"end\":572,\"name\":\"REVERT\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":26,\"end\":572,\"name\":\"DUP1\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"CODECOPY\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a72305820bca6b876c08f8f66c6fba8479eebab55b74bc3514d23d89f071960c8e6a5c6220029\",\".code\":[{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":26,\"end\":572,\"name\":\"MSTORE\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"CALLDATALOAD\"},{\"begin\":26,\"end\":572,\"name\":\"DIV\"},{\"begin\":26,\"end\":572,\"name\":\"AND\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"27C15C51\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"EQ\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPI\"},{\"begin\":26,\"end\":572,\"name\":\"DUP1\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"8202082F\"},{\"begin\":26,\"end\":572,\"name\":\"EQ\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPI\"},{\"begin\":26,\"end\":572,\"name\":\"DUP1\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"BF60C7DB\"},{\"begin\":26,\"end\":572,\"name\":\"EQ\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPI\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"DUP1\"},{\"begin\":26,\"end\":572,\"name\":\"REVERT\"},{\"begin\":234,\"end\":397,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":234,\"end\":397,\"name\":\"JUMPDEST\"},{\"begin\":234,\"end\":397,\"name\":\"CALLVALUE\"},{\"begin\":234,\"end\":397,\"name\":\"ISZERO\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":234,\"end\":397,\"name\":\"JUMPI\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":234,\"end\":397,\"name\":\"DUP1\"},{\"begin\":234,\"end\":397,\"name\":\"REVERT\"},{\"begin\":234,\"end\":397,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":234,\"end\":397,\"name\":\"JUMPDEST\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"CALLDATALOAD\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"ADD\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP1\"},{\"begin\":234,\"end\":397,\"name\":\"DUP4\"},{\"begin\":234,\"end\":397,\"name\":\"ADD\"},{\"begin\":234,\"end\":397,\"name\":\"CALLDATALOAD\"},{\"begin\":234,\"end\":397,\"name\":\"DUP1\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":234,\"end\":397,\"name\":\"DUP3\"},{\"begin\":234,\"end\":397,\"name\":\"ADD\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP1\"},{\"begin\":234,\"end\":397,\"name\":\"DIV\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"MUL\"},{\"begin\":234,\"end\":397,\"name\":\"ADD\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":234,\"end\":397,\"name\":\"MLOAD\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP1\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"ADD\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":234,\"end\":397,\"name\":\"MSTORE\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"DUP2\"},{\"begin\":234,\"end\":397,\"name\":\"MSTORE\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP3\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP2\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP1\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":234,\"end\":397,\"name\":\"DUP5\"},{\"begin\":234,\"end\":397,\"name\":\"ADD\"},{\"begin\":234,\"end\":397,\"name\":\"DUP4\"},{\"begin\":234,\"end\":397,\"name\":\"DUP4\"},{\"begin\":234,\"end\":397,\"name\":\"DUP1\"},{\"begin\":234,\"end\":397,\"name\":\"DUP3\"},{\"begin\":234,\"end\":397,\"name\":\"DUP5\"},{\"begin\":234,\"end\":397,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP5\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP7\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":234,\"end\":397,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":234,\"end\":397,\"name\":\"SWAP6\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":234,\"end\":397,\"name\":\"JUMP\"},{\"begin\":234,\"end\":397,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":234,\"end\":397,\"name\":\"JUMPDEST\"},{\"begin\":234,\"end\":397,\"name\":\"STOP\"},{\"begin\":462,\"end\":569,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":462,\"end\":569,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":569,\"name\":\"CALLVALUE\"},{\"begin\":462,\"end\":569,\"name\":\"ISZERO\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":462,\"end\":569,\"name\":\"JUMPI\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":462,\"end\":569,\"name\":\"DUP1\"},{\"begin\":462,\"end\":569,\"name\":\"REVERT\"},{\"begin\":462,\"end\":569,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":462,\"end\":569,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":462,\"end\":569,\"name\":\"JUMP\"},{\"begin\":462,\"end\":569,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":462,\"end\":569,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":462,\"end\":569,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":569,\"name\":\"DUP1\"},{\"begin\":462,\"end\":569,\"name\":\"DUP3\"},{\"begin\":462,\"end\":569,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":569,\"name\":\"DUP2\"},{\"begin\":462,\"end\":569,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":569,\"name\":\"DUP2\"},{\"begin\":462,\"end\":569,\"name\":\"ADD\"},{\"begin\":462,\"end\":569,\"name\":\"DUP4\"},{\"begin\":462,\"end\":569,\"name\":\"DUP2\"},{\"begin\":462,\"end\":569,\"name\":\"DUP2\"},{\"begin\":462,\"end\":569,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":569,\"name\":\"DUP2\"},{\"begin\":462,\"end\":569,\"name\":\"MSTORE\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":569,\"name\":\"ADD\"},{\"begin\":462,\"end\":569,\"name\":\"SWAP2\"},{\"begin\":462,\"end\":569,\"name\":\"POP\"},{\"begin\":462,\"end\":569,\"name\":\"DUP1\"},{\"begin\":462,\"end\":569,\"name\":\"MLOAD\"},{\"begin\":462,\"end\":569,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":569,\"name\":\"ADD\"},{\"begin\":462,\"end\":569,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":569,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":462,\"end\":569,\"name\":\"MUL\"},{\"begin\":462,\"end\":569,\"name\":\"DUP1\"},{\"begin\":462,\"end\":569,\"name\":\"DUP4\"},{\"begin\":462,\"end\":569,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":29,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":99,\"end\":100,\"name\":\"DUP1\"},{\"begin\":94,\"end\":97,\"name\":\"DUP3\"},{\"begin\":90,\"end\":93,\"name\":\"ADD\"},{\"begin\":84,\"end\":89,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":74,\"name\":\"DUP4\"},{\"begin\":71,\"end\":74,\"name\":\"DUP3\"},{\"begin\":71,\"end\":74,\"name\":\"ADD\"},{\"begin\":64,\"end\":70,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":48,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP3\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"RETURN\"},{\"begin\":114,\"end\":145,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":114,\"end\":145,\"name\":\"JUMPDEST\"},{\"begin\":114,\"end\":145,\"name\":\"CALLVALUE\"},{\"begin\":114,\"end\":145,\"name\":\"ISZERO\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":114,\"end\":145,\"name\":\"JUMPI\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":114,\"end\":145,\"name\":\"DUP1\"},{\"begin\":114,\"end\":145,\"name\":\"REVERT\"},{\"begin\":114,\"end\":145,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":114,\"end\":145,\"name\":\"JUMPDEST\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":114,\"end\":145,\"name\":\"CALLDATALOAD\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":114,\"end\":145,\"name\":\"JUMP\"},{\"begin\":114,\"end\":145,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":114,\"end\":145,\"name\":\"JUMPDEST\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":114,\"end\":145,\"name\":\"MLOAD\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP1\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP2\"},{\"begin\":114,\"end\":145,\"name\":\"AND\"},{\"begin\":114,\"end\":145,\"name\":\"DUP2\"},{\"begin\":114,\"end\":145,\"name\":\"MSTORE\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":114,\"end\":145,\"name\":\"ADD\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":114,\"end\":145,\"name\":\"MLOAD\"},{\"begin\":114,\"end\":145,\"name\":\"DUP1\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP2\"},{\"begin\":114,\"end\":145,\"name\":\"SUB\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP1\"},{\"begin\":114,\"end\":145,\"name\":\"RETURN\"},{\"begin\":234,\"end\":397,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":234,\"end\":397,\"name\":\"JUMPDEST\"},{\"begin\":297,\"end\":313,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":327,\"end\":338,\"name\":\"DUP2\"},{\"begin\":340,\"end\":350,\"name\":\"CALLER\"},{\"begin\":316,\"end\":351,\"name\":\"PUSH [tag]\",\"value\":\"18\"},{\"begin\":316,\"end\":351,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":316,\"end\":351,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":316,\"end\":351,\"name\":\"tag\",\"value\":\"18\"},{\"begin\":316,\"end\":351,\"name\":\"JUMPDEST\"},{\"begin\":316,\"end\":351,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":316,\"end\":351,\"name\":\"DUP3\"},{\"begin\":316,\"end\":351,\"name\":\"AND\"},{\"begin\":316,\"end\":351,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":316,\"end\":351,\"name\":\"DUP3\"},{\"begin\":316,\"end\":351,\"name\":\"ADD\"},{\"begin\":316,\"end\":351,\"name\":\"MSTORE\"},{\"begin\":316,\"end\":351,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":316,\"end\":351,\"name\":\"DUP1\"},{\"begin\":316,\"end\":351,\"name\":\"DUP3\"},{\"begin\":316,\"end\":351,\"name\":\"MSTORE\"},{\"begin\":316,\"end\":351,\"name\":\"DUP2\"},{\"begin\":316,\"end\":351,\"name\":\"SWAP1\"},{\"begin\":316,\"end\":351,\"name\":\"DUP2\"},{\"begin\":316,\"end\":351,\"name\":\"ADD\"},{\"begin\":316,\"end\":351,\"name\":\"DUP5\"},{\"begin\":316,\"end\":351,\"name\":\"DUP2\"},{\"begin\":316,\"end\":351,\"name\":\"DUP2\"},{\"begin\":316,\"end\":351,\"name\":\"MLOAD\"},{\"begin\":316,\"end\":351,\"name\":\"DUP2\"},{\"begin\":316,\"end\":351,\"name\":\"MSTORE\"},{\"begin\":316,\"end\":351,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":316,\"end\":351,\"name\":\"ADD\"},{\"begin\":316,\"end\":351,\"name\":\"SWAP2\"},{\"begin\":316,\"end\":351,\"name\":\"POP\"},{\"begin\":316,\"end\":351,\"name\":\"DUP1\"},{\"begin\":316,\"end\":351,\"name\":\"MLOAD\"},{\"begin\":316,\"end\":351,\"name\":\"SWAP1\"},{\"begin\":316,\"end\":351,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":316,\"end\":351,\"name\":\"ADD\"},{\"begin\":316,\"end\":351,\"name\":\"SWAP1\"},{\"begin\":316,\"end\":351,\"name\":\"DUP1\"},{\"begin\":316,\"end\":351,\"name\":\"DUP4\"},{\"begin\":316,\"end\":351,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":29,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"21\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":99,\"end\":100,\"name\":\"DUP1\"},{\"begin\":94,\"end\":97,\"name\":\"DUP3\"},{\"begin\":90,\"end\":93,\"name\":\"ADD\"},{\"begin\":84,\"end\":89,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":74,\"name\":\"DUP4\"},{\"begin\":71,\"end\":74,\"name\":\"DUP3\"},{\"begin\":71,\"end\":74,\"name\":\"ADD\"},{\"begin\":64,\"end\":70,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":48,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"21\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP2\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3,\"end\":112,\"name\":\"AND\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"ISZERO\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPI\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP3\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP4\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3,\"end\":112,\"name\":\"EXP\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"NOT\"},{\"begin\":3,\"end\":112,\"name\":\"AND\"},{\"begin\":3,\"end\":112,\"name\":\"DUP2\"},{\"begin\":3,\"end\":112,\"name\":\"MSTORE\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPDEST\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP4\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3,\"end\":112,\"name\":\"CREATE\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"ISZERO\"},{\"begin\":3,\"end\":112,\"name\":\"ISZERO\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH [tag]\",\"value\":\"24\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPI\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"REVERT\"},{\"begin\":3,\"end\":112,\"name\":\"tag\",\"value\":\"24\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPDEST\"},{\"begin\":297,\"end\":351,\"name\":\"SWAP1\"},{\"begin\":297,\"end\":351,\"name\":\"POP\"},{\"begin\":358,\"end\":373,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":358,\"end\":389,\"name\":\"DUP1\"},{\"begin\":358,\"end\":389,\"name\":\"SLOAD\"},{\"begin\":358,\"end\":389,\"name\":\"DUP1\"},{\"begin\":358,\"end\":389,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":358,\"end\":389,\"name\":\"ADD\"},{\"begin\":358,\"end\":389,\"name\":\"DUP3\"},{\"begin\":358,\"end\":389,\"name\":\"DUP2\"},{\"begin\":358,\"end\":389,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP2\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP1\"},{\"begin\":358,\"end\":389,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":358,\"end\":389,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":358,\"end\":389,\"name\":\"tag\",\"value\":\"25\"},{\"begin\":358,\"end\":389,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":358,\"end\":389,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP2\"},{\"begin\":358,\"end\":389,\"name\":\"DUP3\"},{\"begin\":358,\"end\":389,\"name\":\"MSTORE\"},{\"begin\":358,\"end\":389,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP1\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP2\"},{\"begin\":358,\"end\":389,\"name\":\"KECCAK256\"},{\"begin\":358,\"end\":389,\"name\":\"ADD\"},{\"begin\":358,\"end\":389,\"name\":\"DUP1\"},{\"begin\":358,\"end\":389,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":358,\"end\":389,\"name\":\"AND\"},{\"begin\":358,\"end\":389,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP3\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP1\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP3\"},{\"begin\":358,\"end\":389,\"name\":\"AND\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP2\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP1\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP2\"},{\"begin\":358,\"end\":389,\"name\":\"OR\"},{\"begin\":358,\"end\":389,\"name\":\"SWAP1\"},{\"begin\":358,\"end\":389,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":234,\"end\":397,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":462,\"end\":569,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":462,\"end\":569,\"name\":\"JUMPDEST\"},{\"begin\":512,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":512,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":512,\"end\":520,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":512,\"end\":520,\"name\":\"tag\",\"value\":\"28\"},{\"begin\":512,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":546,\"end\":561,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":539,\"end\":561,\"name\":\"DUP1\"},{\"begin\":539,\"end\":561,\"name\":\"SLOAD\"},{\"begin\":539,\"end\":561,\"name\":\"DUP1\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":539,\"end\":561,\"name\":\"MUL\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":539,\"end\":561,\"name\":\"ADD\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":539,\"end\":561,\"name\":\"MLOAD\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP1\"},{\"begin\":539,\"end\":561,\"name\":\"DUP2\"},{\"begin\":539,\"end\":561,\"name\":\"ADD\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":539,\"end\":561,\"name\":\"MSTORE\"},{\"begin\":539,\"end\":561,\"name\":\"DUP1\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP3\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP2\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP1\"},{\"begin\":539,\"end\":561,\"name\":\"DUP2\"},{\"begin\":539,\"end\":561,\"name\":\"DUP2\"},{\"begin\":539,\"end\":561,\"name\":\"MSTORE\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":539,\"end\":561,\"name\":\"ADD\"},{\"begin\":539,\"end\":561,\"name\":\"DUP3\"},{\"begin\":539,\"end\":561,\"name\":\"DUP1\"},{\"begin\":539,\"end\":561,\"name\":\"SLOAD\"},{\"begin\":539,\"end\":561,\"name\":\"DUP1\"},{\"begin\":539,\"end\":561,\"name\":\"ISZERO\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":539,\"end\":561,\"name\":\"JUMPI\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":539,\"end\":561,\"name\":\"MUL\"},{\"begin\":539,\"end\":561,\"name\":\"DUP3\"},{\"begin\":539,\"end\":561,\"name\":\"ADD\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP2\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP1\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":539,\"end\":561,\"name\":\"MSTORE\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":539,\"end\":561,\"name\":\"KECCAK256\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP1\"},{\"begin\":539,\"end\":561,\"name\":\"tag\",\"value\":\"32\"},{\"begin\":539,\"end\":561,\"name\":\"JUMPDEST\"},{\"begin\":539,\"end\":561,\"name\":\"DUP2\"},{\"begin\":539,\"end\":561,\"name\":\"SLOAD\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":539,\"end\":561,\"name\":\"AND\"},{\"begin\":539,\"end\":561,\"name\":\"DUP2\"},{\"begin\":539,\"end\":561,\"name\":\"MSTORE\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP1\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP2\"},{\"begin\":539,\"end\":561,\"name\":\"ADD\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP1\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":539,\"end\":561,\"name\":\"ADD\"},{\"begin\":539,\"end\":561,\"name\":\"DUP1\"},{\"begin\":539,\"end\":561,\"name\":\"DUP4\"},{\"begin\":539,\"end\":561,\"name\":\"GT\"},{\"begin\":539,\"end\":561,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":539,\"end\":561,\"name\":\"JUMPI\"},{\"begin\":539,\"end\":561,\"name\":\"tag\",\"value\":\"31\"},{\"begin\":539,\"end\":561,\"name\":\"JUMPDEST\"},{\"begin\":539,\"end\":561,\"name\":\"POP\"},{\"begin\":539,\"end\":561,\"name\":\"POP\"},{\"begin\":539,\"end\":561,\"name\":\"POP\"},{\"begin\":539,\"end\":561,\"name\":\"POP\"},{\"begin\":539,\"end\":561,\"name\":\"POP\"},{\"begin\":539,\"end\":561,\"name\":\"SWAP1\"},{\"begin\":539,\"end\":561,\"name\":\"POP\"},{\"begin\":462,\"end\":569,\"name\":\"tag\",\"value\":\"30\"},{\"begin\":462,\"end\":569,\"name\":\"JUMPDEST\"},{\"begin\":462,\"end\":569,\"name\":\"SWAP1\"},{\"begin\":462,\"end\":569,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":114,\"end\":145,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":114,\"end\":145,\"name\":\"JUMPDEST\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":114,\"end\":145,\"name\":\"DUP1\"},{\"begin\":114,\"end\":145,\"name\":\"SLOAD\"},{\"begin\":114,\"end\":145,\"name\":\"DUP3\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP1\"},{\"begin\":114,\"end\":145,\"name\":\"DUP2\"},{\"begin\":114,\"end\":145,\"name\":\"LT\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":114,\"end\":145,\"name\":\"JUMPI\"},{\"begin\":114,\"end\":145,\"name\":\"INVALID\"},{\"begin\":114,\"end\":145,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":114,\"end\":145,\"name\":\"JUMPDEST\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP2\"},{\"begin\":114,\"end\":145,\"name\":\"DUP3\"},{\"begin\":114,\"end\":145,\"name\":\"MSTORE\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP1\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP2\"},{\"begin\":114,\"end\":145,\"name\":\"KECCAK256\"},{\"begin\":114,\"end\":145,\"name\":\"ADD\"},{\"begin\":114,\"end\":145,\"name\":\"SLOAD\"},{\"begin\":114,\"end\":145,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":114,\"end\":145,\"name\":\"AND\"},{\"begin\":114,\"end\":145,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":114,\"end\":145,\"name\":\"DUP2\"},{\"begin\":114,\"end\":145,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":26,\"end\":572,\"name\":\"MLOAD\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":26,\"end\":572,\"name\":\"DUP1\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":26,\"end\":572,\"name\":\"DUP4\"},{\"begin\":26,\"end\":572,\"name\":\"CODECOPY\"},{\"begin\":26,\"end\":572,\"name\":\"ADD\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP1\"},{\"begin\":26,\"end\":572,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"SLOAD\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"DUP4\"},{\"begin\":26,\"end\":572,\"name\":\"SSTORE\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"ISZERO\"},{\"begin\":26,\"end\":572,\"name\":\"GT\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPI\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"DUP4\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"MSTORE\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP1\"},{\"begin\":26,\"end\":572,\"name\":\"KECCAK256\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP2\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"ADD\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP1\"},{\"begin\":26,\"end\":572,\"name\":\"DUP4\"},{\"begin\":26,\"end\":572,\"name\":\"ADD\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"37\"},{\"begin\":26,\"end\":572,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"36\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"POP\"},{\"begin\":26,\"end\":572,\"name\":\"POP\"},{\"begin\":26,\"end\":572,\"name\":\"POP\"},{\"begin\":26,\"end\":572,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":26,\"end\":572,\"name\":\"MLOAD\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP1\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"ADD\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":26,\"end\":572,\"name\":\"MSTORE\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"MSTORE\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP1\"},{\"begin\":26,\"end\":572,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"37\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"30\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP2\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP1\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"39\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"DUP1\"},{\"begin\":26,\"end\":572,\"name\":\"DUP3\"},{\"begin\":26,\"end\":572,\"name\":\"GT\"},{\"begin\":26,\"end\":572,\"name\":\"ISZERO\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"40\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPI\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":26,\"end\":572,\"name\":\"DUP2\"},{\"begin\":26,\"end\":572,\"name\":\"SSTORE\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":26,\"end\":572,\"name\":\"ADD\"},{\"begin\":26,\"end\":572,\"name\":\"PUSH [tag]\",\"value\":\"39\"},{\"begin\":26,\"end\":572,\"name\":\"JUMP\"},{\"begin\":26,\"end\":572,\"name\":\"tag\",\"value\":\"40\"},{\"begin\":26,\"end\":572,\"name\":\"JUMPDEST\"},{\"begin\":26,\"end\":572,\"name\":\"POP\"},{\"begin\":26,\"end\":572,\"name\":\"SWAP1\"},{\"begin\":26,\"end\":572,\"name\":\"JUMP\"}],\".data\":{\"0\":{\".code\":[{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":1265,\"end\":1266,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1238,\"end\":1266,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1238,\"end\":1266,\"name\":\"SSTORE\"},{\"begin\":2645,\"end\":2799,\"name\":\"CALLVALUE\"},{\"begin\":2645,\"end\":2799,\"name\":\"ISZERO\"},{\"begin\":2645,\"end\":2799,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":2645,\"end\":2799,\"name\":\"JUMPI\"},{\"begin\":2645,\"end\":2799,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP1\"},{\"begin\":2645,\"end\":2799,\"name\":\"REVERT\"},{\"begin\":2645,\"end\":2799,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":2645,\"end\":2799,\"name\":\"JUMPDEST\"},{\"begin\":2645,\"end\":2799,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2645,\"end\":2799,\"name\":\"MLOAD\"},{\"begin\":2645,\"end\":2799,\"name\":\"PUSHSIZE\"},{\"begin\":2645,\"end\":2799,\"name\":\"CODESIZE\"},{\"begin\":2645,\"end\":2799,\"name\":\"SUB\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP1\"},{\"begin\":2645,\"end\":2799,\"name\":\"PUSHSIZE\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP4\"},{\"begin\":2645,\"end\":2799,\"name\":\"CODECOPY\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP2\"},{\"begin\":2645,\"end\":2799,\"name\":\"ADD\"},{\"begin\":2645,\"end\":2799,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2645,\"end\":2799,\"name\":\"MSTORE\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP1\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP1\"},{\"begin\":2645,\"end\":2799,\"name\":\"MLOAD\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP3\"},{\"begin\":2645,\"end\":2799,\"name\":\"ADD\"},{\"begin\":2645,\"end\":2799,\"name\":\"SWAP2\"},{\"begin\":2645,\"end\":2799,\"name\":\"SWAP1\"},{\"begin\":2645,\"end\":2799,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2645,\"end\":2799,\"name\":\"ADD\"},{\"begin\":2645,\"end\":2799,\"name\":\"DUP1\"},{\"begin\":2645,\"end\":2799,\"name\":\"MLOAD\"},{\"begin\":2733,\"end\":2740,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2733,\"end\":2750,\"name\":\"DUP1\"},{\"begin\":2733,\"end\":2750,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2733,\"end\":2750,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":2733,\"end\":2750,\"name\":\"DUP4\"},{\"begin\":2733,\"end\":2750,\"name\":\"AND\"},{\"begin\":2733,\"end\":2750,\"name\":\"OR\"},{\"begin\":2733,\"end\":2750,\"name\":\"SWAP1\"},{\"begin\":2733,\"end\":2750,\"name\":\"SSTORE\"},{\"begin\":2733,\"end\":2750,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2775,\"end\":2791,\"name\":\"DUP3\"},{\"begin\":2775,\"end\":2791,\"name\":\"DUP1\"},{\"begin\":2761,\"end\":2791,\"name\":\"MLOAD\"},{\"begin\":2761,\"end\":2791,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":2761,\"end\":2791,\"name\":\"SWAP3\"},{\"begin\":2761,\"end\":2791,\"name\":\"SWAP2\"},{\"begin\":2761,\"end\":2791,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2761,\"end\":2791,\"name\":\"ADD\"},{\"begin\":2761,\"end\":2791,\"name\":\"SWAP1\"},{\"begin\":2761,\"end\":2791,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":2761,\"end\":2791,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":2761,\"end\":2791,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":2761,\"end\":2791,\"name\":\"JUMPDEST\"},{\"begin\":2761,\"end\":2791,\"name\":\"POP\"},{\"begin\":2645,\"end\":2799,\"name\":\"POP\"},{\"begin\":2645,\"end\":2799,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":576,\"end\":4792,\"name\":\"MUL\"},{\"begin\":576,\"end\":4792,\"name\":\"SUB\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"KECCAK256\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"LT\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"MLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":576,\"end\":4792,\"name\":\"NOT\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP4\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"OR\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP6\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP6\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"GT\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"MLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP3\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"GT\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"CODECOPY\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a723058209f8d1a281cbe8730c1482a0eb3d9731e73ec2ab43f629a329d3e163882576d460029\",\".code\":[{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"CALLDATASIZE\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"CALLDATALOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"A46572F\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"10D2F82F\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"17D531FC\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"28F6A48A\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"2A4230E2\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"2B50EF0E\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"481C6A75\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"7284E416\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"79A408E5\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"89C8BC63\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"8FDEE0C5\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"DFBF53AE\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"F7BBC787\"},{\"begin\":576,\"end\":4792,\"name\":\"EQ\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"REVERT\"},{\"begin\":1612,\"end\":1632,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":1612,\"end\":1632,\"name\":\"JUMPDEST\"},{\"begin\":1612,\"end\":1632,\"name\":\"CALLVALUE\"},{\"begin\":1612,\"end\":1632,\"name\":\"ISZERO\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":1612,\"end\":1632,\"name\":\"JUMPI\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1612,\"end\":1632,\"name\":\"DUP1\"},{\"begin\":1612,\"end\":1632,\"name\":\"REVERT\"},{\"begin\":1612,\"end\":1632,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":1612,\"end\":1632,\"name\":\"JUMPDEST\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":1612,\"end\":1632,\"name\":\"JUMP\"},{\"begin\":1612,\"end\":1632,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":1612,\"end\":1632,\"name\":\"JUMPDEST\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1612,\"end\":1632,\"name\":\"MLOAD\"},{\"begin\":1612,\"end\":1632,\"name\":\"SWAP1\"},{\"begin\":1612,\"end\":1632,\"name\":\"DUP2\"},{\"begin\":1612,\"end\":1632,\"name\":\"MSTORE\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1612,\"end\":1632,\"name\":\"ADD\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1612,\"end\":1632,\"name\":\"MLOAD\"},{\"begin\":1612,\"end\":1632,\"name\":\"DUP1\"},{\"begin\":1612,\"end\":1632,\"name\":\"SWAP2\"},{\"begin\":1612,\"end\":1632,\"name\":\"SUB\"},{\"begin\":1612,\"end\":1632,\"name\":\"SWAP1\"},{\"begin\":1612,\"end\":1632,\"name\":\"RETURN\"},{\"begin\":4696,\"end\":4787,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":4696,\"end\":4787,\"name\":\"JUMPDEST\"},{\"begin\":4696,\"end\":4787,\"name\":\"CALLVALUE\"},{\"begin\":4696,\"end\":4787,\"name\":\"ISZERO\"},{\"begin\":4696,\"end\":4787,\"name\":\"PUSH [tag]\",\"value\":\"18\"},{\"begin\":4696,\"end\":4787,\"name\":\"JUMPI\"},{\"begin\":4696,\"end\":4787,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4696,\"end\":4787,\"name\":\"DUP1\"},{\"begin\":4696,\"end\":4787,\"name\":\"REVERT\"},{\"begin\":4696,\"end\":4787,\"name\":\"tag\",\"value\":\"18\"},{\"begin\":4696,\"end\":4787,\"name\":\"JUMPDEST\"},{\"begin\":4696,\"end\":4787,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":4696,\"end\":4787,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":4696,\"end\":4787,\"name\":\"JUMP\"},{\"begin\":4696,\"end\":4787,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":4696,\"end\":4787,\"name\":\"JUMPDEST\"},{\"begin\":4696,\"end\":4787,\"name\":\"STOP\"},{\"begin\":1238,\"end\":1266,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":1238,\"end\":1266,\"name\":\"JUMPDEST\"},{\"begin\":1238,\"end\":1266,\"name\":\"CALLVALUE\"},{\"begin\":1238,\"end\":1266,\"name\":\"ISZERO\"},{\"begin\":1238,\"end\":1266,\"name\":\"PUSH [tag]\",\"value\":\"21\"},{\"begin\":1238,\"end\":1266,\"name\":\"JUMPI\"},{\"begin\":1238,\"end\":1266,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1238,\"end\":1266,\"name\":\"DUP1\"},{\"begin\":1238,\"end\":1266,\"name\":\"REVERT\"},{\"begin\":1238,\"end\":1266,\"name\":\"tag\",\"value\":\"21\"},{\"begin\":1238,\"end\":1266,\"name\":\"JUMPDEST\"},{\"begin\":1238,\"end\":1266,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":1238,\"end\":1266,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":1238,\"end\":1266,\"name\":\"JUMP\"},{\"begin\":4285,\"end\":4372,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":4285,\"end\":4372,\"name\":\"JUMPDEST\"},{\"begin\":4285,\"end\":4372,\"name\":\"CALLVALUE\"},{\"begin\":4285,\"end\":4372,\"name\":\"ISZERO\"},{\"begin\":4285,\"end\":4372,\"name\":\"PUSH [tag]\",\"value\":\"24\"},{\"begin\":4285,\"end\":4372,\"name\":\"JUMPI\"},{\"begin\":4285,\"end\":4372,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4285,\"end\":4372,\"name\":\"DUP1\"},{\"begin\":4285,\"end\":4372,\"name\":\"REVERT\"},{\"begin\":4285,\"end\":4372,\"name\":\"tag\",\"value\":\"24\"},{\"begin\":4285,\"end\":4372,\"name\":\"JUMPDEST\"},{\"begin\":4285,\"end\":4372,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":4285,\"end\":4372,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":4285,\"end\":4372,\"name\":\"JUMP\"},{\"begin\":2897,\"end\":3225,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":2897,\"end\":3225,\"name\":\"JUMPDEST\"},{\"begin\":2897,\"end\":3225,\"name\":\"CALLVALUE\"},{\"begin\":2897,\"end\":3225,\"name\":\"ISZERO\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":2897,\"end\":3225,\"name\":\"JUMPI\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"REVERT\"},{\"begin\":2897,\"end\":3225,\"name\":\"tag\",\"value\":\"27\"},{\"begin\":2897,\"end\":3225,\"name\":\"JUMPDEST\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"CALLDATALOAD\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"44\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"CALLDATALOAD\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP2\"},{\"begin\":2897,\"end\":3225,\"name\":\"ADD\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP4\"},{\"begin\":2897,\"end\":3225,\"name\":\"ADD\"},{\"begin\":2897,\"end\":3225,\"name\":\"CALLDATALOAD\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP3\"},{\"begin\":2897,\"end\":3225,\"name\":\"ADD\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP2\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"DIV\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP2\"},{\"begin\":2897,\"end\":3225,\"name\":\"MUL\"},{\"begin\":2897,\"end\":3225,\"name\":\"ADD\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2897,\"end\":3225,\"name\":\"MLOAD\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP2\"},{\"begin\":2897,\"end\":3225,\"name\":\"ADD\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2897,\"end\":3225,\"name\":\"MSTORE\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP2\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP2\"},{\"begin\":2897,\"end\":3225,\"name\":\"MSTORE\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP3\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP2\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP5\"},{\"begin\":2897,\"end\":3225,\"name\":\"ADD\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP4\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP4\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP1\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP3\"},{\"begin\":2897,\"end\":3225,\"name\":\"DUP5\"},{\"begin\":2897,\"end\":3225,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP5\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP7\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2897,\"end\":3225,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":2897,\"end\":3225,\"name\":\"SWAP6\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2897,\"end\":3225,\"name\":\"JUMP\"},{\"begin\":3340,\"end\":3559,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":3340,\"end\":3559,\"name\":\"JUMPDEST\"},{\"begin\":3340,\"end\":3559,\"name\":\"CALLVALUE\"},{\"begin\":3340,\"end\":3559,\"name\":\"ISZERO\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH [tag]\",\"value\":\"30\"},{\"begin\":3340,\"end\":3559,\"name\":\"JUMPI\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"REVERT\"},{\"begin\":3340,\"end\":3559,\"name\":\"tag\",\"value\":\"30\"},{\"begin\":3340,\"end\":3559,\"name\":\"JUMPDEST\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3340,\"end\":3559,\"name\":\"CALLDATALOAD\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":3340,\"end\":3559,\"name\":\"JUMP\"},{\"begin\":3340,\"end\":3559,\"name\":\"tag\",\"value\":\"31\"},{\"begin\":3340,\"end\":3559,\"name\":\"JUMPDEST\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3340,\"end\":3559,\"name\":\"MLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP5\"},{\"begin\":3340,\"end\":3559,\"name\":\"AND\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"MSTORE\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"ADD\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP4\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"MSTORE\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP3\"},{\"begin\":3340,\"end\":3559,\"name\":\"ADD\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"MSTORE\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP3\"},{\"begin\":3340,\"end\":3559,\"name\":\"ADD\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP4\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"MLOAD\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"MSTORE\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3340,\"end\":3559,\"name\":\"ADD\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"POP\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"MLOAD\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3340,\"end\":3559,\"name\":\"ADD\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP4\"},{\"begin\":3340,\"end\":3559,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":29,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":99,\"end\":100,\"name\":\"DUP1\"},{\"begin\":94,\"end\":97,\"name\":\"DUP3\"},{\"begin\":90,\"end\":93,\"name\":\"ADD\"},{\"begin\":84,\"end\":89,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":74,\"name\":\"DUP4\"},{\"begin\":71,\"end\":74,\"name\":\"DUP3\"},{\"begin\":71,\"end\":74,\"name\":\"ADD\"},{\"begin\":64,\"end\":70,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":48,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"34\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP2\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3,\"end\":112,\"name\":\"AND\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"ISZERO\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPI\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP3\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP4\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3,\"end\":112,\"name\":\"EXP\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"NOT\"},{\"begin\":3,\"end\":112,\"name\":\"AND\"},{\"begin\":3,\"end\":112,\"name\":\"DUP2\"},{\"begin\":3,\"end\":112,\"name\":\"MSTORE\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"tag\",\"value\":\"36\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPDEST\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP5\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"RETURN\"},{\"begin\":725,\"end\":747,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":725,\"end\":747,\"name\":\"JUMPDEST\"},{\"begin\":725,\"end\":747,\"name\":\"CALLVALUE\"},{\"begin\":725,\"end\":747,\"name\":\"ISZERO\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH [tag]\",\"value\":\"37\"},{\"begin\":725,\"end\":747,\"name\":\"JUMPI\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":725,\"end\":747,\"name\":\"DUP1\"},{\"begin\":725,\"end\":747,\"name\":\"REVERT\"},{\"begin\":725,\"end\":747,\"name\":\"tag\",\"value\":\"37\"},{\"begin\":725,\"end\":747,\"name\":\"JUMPDEST\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH [tag]\",\"value\":\"38\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH [tag]\",\"value\":\"39\"},{\"begin\":725,\"end\":747,\"name\":\"JUMP\"},{\"begin\":725,\"end\":747,\"name\":\"tag\",\"value\":\"38\"},{\"begin\":725,\"end\":747,\"name\":\"JUMPDEST\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":725,\"end\":747,\"name\":\"MLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":725,\"end\":747,\"name\":\"SWAP2\"},{\"begin\":725,\"end\":747,\"name\":\"SWAP1\"},{\"begin\":725,\"end\":747,\"name\":\"SWAP2\"},{\"begin\":725,\"end\":747,\"name\":\"AND\"},{\"begin\":725,\"end\":747,\"name\":\"DUP2\"},{\"begin\":725,\"end\":747,\"name\":\"MSTORE\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":725,\"end\":747,\"name\":\"ADD\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":725,\"end\":747,\"name\":\"MLOAD\"},{\"begin\":725,\"end\":747,\"name\":\"DUP1\"},{\"begin\":725,\"end\":747,\"name\":\"SWAP2\"},{\"begin\":725,\"end\":747,\"name\":\"SUB\"},{\"begin\":725,\"end\":747,\"name\":\"SWAP1\"},{\"begin\":725,\"end\":747,\"name\":\"RETURN\"},{\"begin\":646,\"end\":671,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPDEST\"},{\"begin\":646,\"end\":671,\"name\":\"CALLVALUE\"},{\"begin\":646,\"end\":671,\"name\":\"ISZERO\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH [tag]\",\"value\":\"40\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPI\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"REVERT\"},{\"begin\":646,\"end\":671,\"name\":\"tag\",\"value\":\"40\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPDEST\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH [tag]\",\"value\":\"41\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH [tag]\",\"value\":\"42\"},{\"begin\":646,\"end\":671,\"name\":\"JUMP\"},{\"begin\":646,\"end\":671,\"name\":\"tag\",\"value\":\"41\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPDEST\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":646,\"end\":671,\"name\":\"MLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP3\"},{\"begin\":646,\"end\":671,\"name\":\"MSTORE\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"DUP4\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"MLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"MSTORE\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP2\"},{\"begin\":646,\"end\":671,\"name\":\"POP\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"MLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP4\"},{\"begin\":646,\"end\":671,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"43\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":29,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"44\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":99,\"end\":100,\"name\":\"DUP1\"},{\"begin\":94,\"end\":97,\"name\":\"DUP3\"},{\"begin\":90,\"end\":93,\"name\":\"ADD\"},{\"begin\":84,\"end\":89,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":74,\"name\":\"DUP4\"},{\"begin\":71,\"end\":74,\"name\":\"DUP3\"},{\"begin\":71,\"end\":74,\"name\":\"ADD\"},{\"begin\":64,\"end\":70,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":48,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"43\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"44\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP2\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3,\"end\":112,\"name\":\"AND\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"ISZERO\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH [tag]\",\"value\":\"46\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPI\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP3\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3,\"end\":112,\"name\":\"DUP4\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3,\"end\":112,\"name\":\"EXP\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"NOT\"},{\"begin\":3,\"end\":112,\"name\":\"AND\"},{\"begin\":3,\"end\":112,\"name\":\"DUP2\"},{\"begin\":3,\"end\":112,\"name\":\"MSTORE\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3,\"end\":112,\"name\":\"ADD\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"tag\",\"value\":\"46\"},{\"begin\":3,\"end\":112,\"name\":\"JUMPDEST\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP3\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"POP\"},{\"begin\":3,\"end\":112,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3,\"end\":112,\"name\":\"MLOAD\"},{\"begin\":3,\"end\":112,\"name\":\"DUP1\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP2\"},{\"begin\":3,\"end\":112,\"name\":\"SUB\"},{\"begin\":3,\"end\":112,\"name\":\"SWAP1\"},{\"begin\":3,\"end\":112,\"name\":\"RETURN\"},{\"begin\":4441,\"end\":4624,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":4441,\"end\":4624,\"name\":\"JUMPDEST\"},{\"begin\":4441,\"end\":4624,\"name\":\"CALLVALUE\"},{\"begin\":4441,\"end\":4624,\"name\":\"ISZERO\"},{\"begin\":4441,\"end\":4624,\"name\":\"PUSH [tag]\",\"value\":\"47\"},{\"begin\":4441,\"end\":4624,\"name\":\"JUMPI\"},{\"begin\":4441,\"end\":4624,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4441,\"end\":4624,\"name\":\"DUP1\"},{\"begin\":4441,\"end\":4624,\"name\":\"REVERT\"},{\"begin\":4441,\"end\":4624,\"name\":\"tag\",\"value\":\"47\"},{\"begin\":4441,\"end\":4624,\"name\":\"JUMPDEST\"},{\"begin\":4441,\"end\":4624,\"name\":\"PUSH [tag]\",\"value\":\"41\"},{\"begin\":4441,\"end\":4624,\"name\":\"PUSH [tag]\",\"value\":\"49\"},{\"begin\":4441,\"end\":4624,\"name\":\"JUMP\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"CALLVALUE\"},{\"begin\":1535,\"end\":1558,\"name\":\"ISZERO\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"54\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPI\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"REVERT\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"54\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"55\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1535,\"end\":1558,\"name\":\"CALLDATALOAD\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"56\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMP\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"55\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1535,\"end\":1558,\"name\":\"MLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP5\"},{\"begin\":1535,\"end\":1558,\"name\":\"AND\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"AND\"},{\"begin\":1535,\"end\":1558,\"name\":\"ISZERO\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":1535,\"end\":1558,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"AND\"},{\"begin\":1535,\"end\":1558,\"name\":\"DIV\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP5\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"ISZERO\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"57\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPI\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1535,\"end\":1558,\"name\":\"LT\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"58\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPI\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"SLOAD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DIV\"},{\"begin\":1535,\"end\":1558,\"name\":\"MUL\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"57\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMP\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"58\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1535,\"end\":1558,\"name\":\"KECCAK256\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"59\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"SLOAD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"GT\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"59\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPI\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SUB\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1535,\"end\":1558,\"name\":\"AND\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"57\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP5\"},{\"begin\":1535,\"end\":1558,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1535,\"end\":1558,\"name\":\"MLOAD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"SUB\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"RETURN\"},{\"begin\":3623,\"end\":3928,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":3623,\"end\":3928,\"name\":\"JUMPDEST\"},{\"begin\":3623,\"end\":3928,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":3623,\"end\":3928,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3623,\"end\":3928,\"name\":\"CALLDATALOAD\"},{\"begin\":3623,\"end\":3928,\"name\":\"PUSH [tag]\",\"value\":\"61\"},{\"begin\":3623,\"end\":3928,\"name\":\"JUMP\"},{\"begin\":1588,\"end\":1605,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":1588,\"end\":1605,\"name\":\"JUMPDEST\"},{\"begin\":1588,\"end\":1605,\"name\":\"CALLVALUE\"},{\"begin\":1588,\"end\":1605,\"name\":\"ISZERO\"},{\"begin\":1588,\"end\":1605,\"name\":\"PUSH [tag]\",\"value\":\"62\"},{\"begin\":1588,\"end\":1605,\"name\":\"JUMPI\"},{\"begin\":1588,\"end\":1605,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1588,\"end\":1605,\"name\":\"DUP1\"},{\"begin\":1588,\"end\":1605,\"name\":\"REVERT\"},{\"begin\":1588,\"end\":1605,\"name\":\"tag\",\"value\":\"62\"},{\"begin\":1588,\"end\":1605,\"name\":\"JUMPDEST\"},{\"begin\":1588,\"end\":1605,\"name\":\"PUSH [tag]\",\"value\":\"55\"},{\"begin\":1588,\"end\":1605,\"name\":\"PUSH [tag]\",\"value\":\"64\"},{\"begin\":1588,\"end\":1605,\"name\":\"JUMP\"},{\"begin\":4028,\"end\":4242,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":4028,\"end\":4242,\"name\":\"JUMPDEST\"},{\"begin\":4028,\"end\":4242,\"name\":\"CALLVALUE\"},{\"begin\":4028,\"end\":4242,\"name\":\"ISZERO\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH [tag]\",\"value\":\"68\"},{\"begin\":4028,\"end\":4242,\"name\":\"JUMPI\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"REVERT\"},{\"begin\":4028,\"end\":4242,\"name\":\"tag\",\"value\":\"68\"},{\"begin\":4028,\"end\":4242,\"name\":\"JUMPDEST\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH [tag]\",\"value\":\"69\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH [tag]\",\"value\":\"70\"},{\"begin\":4028,\"end\":4242,\"name\":\"JUMP\"},{\"begin\":4028,\"end\":4242,\"name\":\"tag\",\"value\":\"69\"},{\"begin\":4028,\"end\":4242,\"name\":\"JUMPDEST\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4028,\"end\":4242,\"name\":\"MLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP4\"},{\"begin\":4028,\"end\":4242,\"name\":\"AND\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP3\"},{\"begin\":4028,\"end\":4242,\"name\":\"ADD\"},{\"begin\":4028,\"end\":4242,\"name\":\"MSTORE\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"ADD\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP3\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"MSTORE\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP3\"},{\"begin\":4028,\"end\":4242,\"name\":\"MSTORE\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"ADD\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP6\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"MLOAD\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"MSTORE\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4028,\"end\":4242,\"name\":\"ADD\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"POP\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"MLOAD\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4028,\"end\":4242,\"name\":\"ADD\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP4\"},{\"begin\":4028,\"end\":4242,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":29,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":99,\"end\":100,\"name\":\"DUP1\"},{\"begin\":94,\"end\":97,\"name\":\"DUP3\"},{\"begin\":90,\"end\":93,\"name\":\"ADD\"},{\"begin\":84,\"end\":89,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":74,\"name\":\"DUP4\"},{\"begin\":71,\"end\":74,\"name\":\"DUP3\"},{\"begin\":71,\"end\":74,\"name\":\"ADD\"},{\"begin\":64,\"end\":70,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":48,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":1612,\"end\":1632,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":1612,\"end\":1632,\"name\":\"JUMPDEST\"},{\"begin\":1612,\"end\":1632,\"name\":\"PUSH\",\"value\":\"A\"},{\"begin\":1612,\"end\":1632,\"name\":\"SLOAD\"},{\"begin\":1612,\"end\":1632,\"name\":\"DUP2\"},{\"begin\":1612,\"end\":1632,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":4696,\"end\":4787,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":4696,\"end\":4787,\"name\":\"JUMPDEST\"},{\"begin\":4771,\"end\":4778,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":4771,\"end\":4778,\"name\":\"SLOAD\"},{\"begin\":4757,\"end\":4767,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":4757,\"end\":4778,\"name\":\"SWAP1\"},{\"begin\":4757,\"end\":4778,\"name\":\"DUP2\"},{\"begin\":4757,\"end\":4778,\"name\":\"AND\"},{\"begin\":4771,\"end\":4778,\"name\":\"SWAP2\"},{\"begin\":4771,\"end\":4778,\"name\":\"AND\"},{\"begin\":4757,\"end\":4778,\"name\":\"EQ\"},{\"begin\":4749,\"end\":4779,\"name\":\"PUSH [tag]\",\"value\":\"76\"},{\"begin\":4749,\"end\":4779,\"name\":\"JUMPI\"},{\"begin\":4749,\"end\":4779,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4749,\"end\":4779,\"name\":\"DUP1\"},{\"begin\":4749,\"end\":4779,\"name\":\"REVERT\"},{\"begin\":4749,\"end\":4779,\"name\":\"tag\",\"value\":\"76\"},{\"begin\":4749,\"end\":4779,\"name\":\"JUMPDEST\"},{\"begin\":4696,\"end\":4787,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1238,\"end\":1266,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":1238,\"end\":1266,\"name\":\"JUMPDEST\"},{\"begin\":1238,\"end\":1266,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1238,\"end\":1266,\"name\":\"SLOAD\"},{\"begin\":1238,\"end\":1266,\"name\":\"DUP2\"},{\"begin\":1238,\"end\":1266,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":4285,\"end\":4372,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":4285,\"end\":4372,\"name\":\"JUMPDEST\"},{\"begin\":4353,\"end\":4357,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":4353,\"end\":4364,\"name\":\"SLOAD\"},{\"begin\":4285,\"end\":4372,\"name\":\"tag\",\"value\":\"77\"},{\"begin\":4285,\"end\":4372,\"name\":\"JUMPDEST\"},{\"begin\":4285,\"end\":4372,\"name\":\"SWAP1\"},{\"begin\":4285,\"end\":4372,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2897,\"end\":3225,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":2897,\"end\":3225,\"name\":\"JUMPDEST\"},{\"begin\":2999,\"end\":3016,\"name\":\"PUSH [tag]\",\"value\":\"78\"},{\"begin\":2999,\"end\":3016,\"name\":\"PUSH [tag]\",\"value\":\"79\"},{\"begin\":2999,\"end\":3016,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":2999,\"end\":3016,\"name\":\"tag\",\"value\":\"78\"},{\"begin\":2999,\"end\":3016,\"name\":\"JUMPDEST\"},{\"begin\":2270,\"end\":2283,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2255,\"end\":2266,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2255,\"end\":2266,\"name\":\"DUP1\"},{\"begin\":2255,\"end\":2266,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":2255,\"end\":2266,\"name\":\"SWAP1\"},{\"begin\":2255,\"end\":2266,\"name\":\"DIV\"},{\"begin\":2255,\"end\":2266,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2255,\"end\":2266,\"name\":\"AND\"},{\"begin\":2255,\"end\":2266,\"name\":\"SWAP1\"},{\"begin\":2255,\"end\":2283,\"name\":\"DUP2\"},{\"begin\":2255,\"end\":2283,\"name\":\"GT\"},{\"begin\":2255,\"end\":2283,\"name\":\"ISZERO\"},{\"begin\":2255,\"end\":2283,\"name\":\"PUSH [tag]\",\"value\":\"82\"},{\"begin\":2255,\"end\":2283,\"name\":\"JUMPI\"},{\"begin\":2255,\"end\":2283,\"name\":\"INVALID\"},{\"begin\":2255,\"end\":2283,\"name\":\"tag\",\"value\":\"82\"},{\"begin\":2255,\"end\":2283,\"name\":\"JUMPDEST\"},{\"begin\":2255,\"end\":2283,\"name\":\"EQ\"},{\"begin\":2247,\"end\":2294,\"name\":\"PUSH [tag]\",\"value\":\"83\"},{\"begin\":2247,\"end\":2294,\"name\":\"JUMPI\"},{\"begin\":2247,\"end\":2294,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2247,\"end\":2294,\"name\":\"DUP1\"},{\"begin\":2247,\"end\":2294,\"name\":\"REVERT\"},{\"begin\":2247,\"end\":2294,\"name\":\"tag\",\"value\":\"83\"},{\"begin\":2247,\"end\":2294,\"name\":\"JUMPDEST\"},{\"begin\":1929,\"end\":1936,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1929,\"end\":1936,\"name\":\"SLOAD\"},{\"begin\":1917,\"end\":1927,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1917,\"end\":1936,\"name\":\"SWAP1\"},{\"begin\":1917,\"end\":1936,\"name\":\"DUP2\"},{\"begin\":1917,\"end\":1936,\"name\":\"AND\"},{\"begin\":1929,\"end\":1936,\"name\":\"SWAP2\"},{\"begin\":1929,\"end\":1936,\"name\":\"AND\"},{\"begin\":1917,\"end\":1936,\"name\":\"EQ\"},{\"begin\":1917,\"end\":1936,\"name\":\"ISZERO\"},{\"begin\":1909,\"end\":1947,\"name\":\"PUSH [tag]\",\"value\":\"85\"},{\"begin\":1909,\"end\":1947,\"name\":\"JUMPI\"},{\"begin\":1909,\"end\":1947,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1909,\"end\":1947,\"name\":\"DUP1\"},{\"begin\":1909,\"end\":1947,\"name\":\"REVERT\"},{\"begin\":1909,\"end\":1947,\"name\":\"tag\",\"value\":\"85\"},{\"begin\":1909,\"end\":1947,\"name\":\"JUMPDEST\"},{\"begin\":3019,\"end\":3130,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":3019,\"end\":3130,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3019,\"end\":3130,\"name\":\"MLOAD\"},{\"begin\":3019,\"end\":3130,\"name\":\"SWAP1\"},{\"begin\":3019,\"end\":3130,\"name\":\"DUP2\"},{\"begin\":3019,\"end\":3130,\"name\":\"ADD\"},{\"begin\":3019,\"end\":3130,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3019,\"end\":3130,\"name\":\"SWAP1\"},{\"begin\":3019,\"end\":3130,\"name\":\"DUP2\"},{\"begin\":3019,\"end\":3130,\"name\":\"MSTORE\"},{\"begin\":3047,\"end\":3057,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3019,\"end\":3130,\"name\":\"AND\"},{\"begin\":3019,\"end\":3130,\"name\":\"DUP3\"},{\"begin\":3019,\"end\":3130,\"name\":\"MSTORE\"},{\"begin\":3019,\"end\":3130,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3019,\"end\":3130,\"name\":\"DUP3\"},{\"begin\":3019,\"end\":3130,\"name\":\"ADD\"},{\"begin\":3019,\"end\":3130,\"name\":\"DUP6\"},{\"begin\":3019,\"end\":3130,\"name\":\"SWAP1\"},{\"begin\":3019,\"end\":3130,\"name\":\"MSTORE\"},{\"begin\":3019,\"end\":3130,\"name\":\"DUP2\"},{\"begin\":3019,\"end\":3130,\"name\":\"ADD\"},{\"begin\":3019,\"end\":3130,\"name\":\"DUP4\"},{\"begin\":3019,\"end\":3130,\"name\":\"SWAP1\"},{\"begin\":3019,\"end\":3130,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3141,\"end\":3155,\"name\":\"DUP1\"},{\"begin\":3141,\"end\":3155,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3141,\"end\":3155,\"name\":\"SWAP1\"},{\"begin\":3141,\"end\":3155,\"name\":\"DUP2\"},{\"begin\":3141,\"end\":3155,\"name\":\"ADD\"},{\"begin\":3141,\"end\":3155,\"name\":\"SWAP1\"},{\"begin\":3141,\"end\":3155,\"name\":\"SWAP2\"},{\"begin\":3141,\"end\":3155,\"name\":\"SSTORE\"},{\"begin\":3166,\"end\":3176,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP1\"},{\"begin\":3166,\"end\":3189,\"name\":\"SLOAD\"},{\"begin\":3019,\"end\":3130,\"name\":\"SWAP3\"},{\"begin\":3019,\"end\":3130,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3166,\"end\":3176,\"name\":\"SWAP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP1\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"ADD\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":3166,\"end\":3176,\"name\":\"DUP4\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP3\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH [tag]\",\"value\":\"88\"},{\"begin\":3166,\"end\":3189,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":3166,\"end\":3189,\"name\":\"tag\",\"value\":\"87\"},{\"begin\":3166,\"end\":3189,\"name\":\"JUMPDEST\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP3\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP4\"},{\"begin\":3166,\"end\":3189,\"name\":\"MSTORE\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP1\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP3\"},{\"begin\":3166,\"end\":3189,\"name\":\"KECCAK256\"},{\"begin\":3182,\"end\":3188,\"name\":\"DUP4\"},{\"begin\":3182,\"end\":3188,\"name\":\"SWAP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3166,\"end\":3189,\"name\":\"MUL\"},{\"begin\":3166,\"end\":3189,\"name\":\"ADD\"},{\"begin\":3182,\"end\":3188,\"name\":\"DUP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"MLOAD\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3166,\"end\":3189,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP1\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"AND\"},{\"begin\":3166,\"end\":3189,\"name\":\"OR\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"SSTORE\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP3\"},{\"begin\":3166,\"end\":3189,\"name\":\"ADD\"},{\"begin\":3166,\"end\":3189,\"name\":\"MLOAD\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3166,\"end\":3189,\"name\":\"ADD\"},{\"begin\":3166,\"end\":3189,\"name\":\"SSTORE\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP3\"},{\"begin\":3166,\"end\":3189,\"name\":\"ADD\"},{\"begin\":3166,\"end\":3189,\"name\":\"MLOAD\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3166,\"end\":3189,\"name\":\"ADD\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP1\"},{\"begin\":3166,\"end\":3189,\"name\":\"DUP1\"},{\"begin\":3166,\"end\":3189,\"name\":\"MLOAD\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH [tag]\",\"value\":\"90\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP3\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP2\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3166,\"end\":3189,\"name\":\"ADD\"},{\"begin\":3166,\"end\":3189,\"name\":\"SWAP1\"},{\"begin\":3166,\"end\":3189,\"name\":\"PUSH [tag]\",\"value\":\"91\"},{\"begin\":3166,\"end\":3189,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":3166,\"end\":3189,\"name\":\"tag\",\"value\":\"90\"},{\"begin\":3166,\"end\":3189,\"name\":\"JUMPDEST\"},{\"begin\":3166,\"end\":3189,\"name\":\"POP\"},{\"begin\":3166,\"end\":3189,\"name\":\"POP\"},{\"begin\":3166,\"end\":3189,\"name\":\"POP\"},{\"begin\":3166,\"end\":3189,\"name\":\"POP\"},{\"begin\":3200,\"end\":3204,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"SLOAD\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3200,\"end\":3217,\"name\":\"ADD\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP3\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH [tag]\",\"value\":\"92\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH [tag]\",\"value\":\"88\"},{\"begin\":3200,\"end\":3217,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":3200,\"end\":3217,\"name\":\"tag\",\"value\":\"92\"},{\"begin\":3200,\"end\":3217,\"name\":\"JUMPDEST\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP3\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP4\"},{\"begin\":3200,\"end\":3217,\"name\":\"MSTORE\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP3\"},{\"begin\":3200,\"end\":3217,\"name\":\"KECCAK256\"},{\"begin\":3210,\"end\":3216,\"name\":\"DUP4\"},{\"begin\":3210,\"end\":3216,\"name\":\"SWAP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3200,\"end\":3217,\"name\":\"MUL\"},{\"begin\":3200,\"end\":3217,\"name\":\"ADD\"},{\"begin\":3210,\"end\":3216,\"name\":\"DUP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"MLOAD\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3200,\"end\":3217,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"AND\"},{\"begin\":3200,\"end\":3217,\"name\":\"OR\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"SSTORE\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP3\"},{\"begin\":3200,\"end\":3217,\"name\":\"ADD\"},{\"begin\":3200,\"end\":3217,\"name\":\"MLOAD\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3200,\"end\":3217,\"name\":\"ADD\"},{\"begin\":3200,\"end\":3217,\"name\":\"SSTORE\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP3\"},{\"begin\":3200,\"end\":3217,\"name\":\"ADD\"},{\"begin\":3200,\"end\":3217,\"name\":\"MLOAD\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3200,\"end\":3217,\"name\":\"ADD\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"DUP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"MLOAD\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH [tag]\",\"value\":\"94\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP3\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP2\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3200,\"end\":3217,\"name\":\"ADD\"},{\"begin\":3200,\"end\":3217,\"name\":\"SWAP1\"},{\"begin\":3200,\"end\":3217,\"name\":\"PUSH [tag]\",\"value\":\"91\"},{\"begin\":3200,\"end\":3217,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":3200,\"end\":3217,\"name\":\"tag\",\"value\":\"94\"},{\"begin\":3200,\"end\":3217,\"name\":\"JUMPDEST\"},{\"begin\":3200,\"end\":3217,\"name\":\"POP\"},{\"begin\":3200,\"end\":3217,\"name\":\"POP\"},{\"begin\":3200,\"end\":3217,\"name\":\"POP\"},{\"begin\":3200,\"end\":3217,\"name\":\"POP\"},{\"begin\":2897,\"end\":3225,\"name\":\"POP\"},{\"begin\":2897,\"end\":3225,\"name\":\"POP\"},{\"begin\":2897,\"end\":3225,\"name\":\"POP\"},{\"begin\":2897,\"end\":3225,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3340,\"end\":3559,\"name\":\"tag\",\"value\":\"32\"},{\"begin\":3340,\"end\":3559,\"name\":\"JUMPDEST\"},{\"begin\":3404,\"end\":3411,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3414,\"end\":3418,\"name\":\"DUP1\"},{\"begin\":3421,\"end\":3427,\"name\":\"PUSH [tag]\",\"value\":\"95\"},{\"begin\":3421,\"end\":3427,\"name\":\"PUSH [tag]\",\"value\":\"96\"},{\"begin\":3421,\"end\":3427,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":3421,\"end\":3427,\"name\":\"tag\",\"value\":\"95\"},{\"begin\":3421,\"end\":3427,\"name\":\"JUMPDEST\"},{\"begin\":2098,\"end\":2113,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2083,\"end\":2094,\"name\":\"DUP1\"},{\"begin\":2083,\"end\":2094,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":2083,\"end\":2094,\"name\":\"SWAP1\"},{\"begin\":2083,\"end\":2094,\"name\":\"DIV\"},{\"begin\":2083,\"end\":2094,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2083,\"end\":2094,\"name\":\"AND\"},{\"begin\":2083,\"end\":2113,\"name\":\"DUP2\"},{\"begin\":2083,\"end\":2113,\"name\":\"DUP2\"},{\"begin\":2083,\"end\":2113,\"name\":\"GT\"},{\"begin\":2083,\"end\":2113,\"name\":\"ISZERO\"},{\"begin\":2083,\"end\":2113,\"name\":\"PUSH [tag]\",\"value\":\"99\"},{\"begin\":2083,\"end\":2113,\"name\":\"JUMPI\"},{\"begin\":2083,\"end\":2113,\"name\":\"INVALID\"},{\"begin\":2083,\"end\":2113,\"name\":\"tag\",\"value\":\"99\"},{\"begin\":2083,\"end\":2113,\"name\":\"JUMPDEST\"},{\"begin\":2083,\"end\":2113,\"name\":\"EQ\"},{\"begin\":2075,\"end\":2124,\"name\":\"PUSH [tag]\",\"value\":\"100\"},{\"begin\":2075,\"end\":2124,\"name\":\"JUMPI\"},{\"begin\":2075,\"end\":2124,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2075,\"end\":2124,\"name\":\"DUP1\"},{\"begin\":2075,\"end\":2124,\"name\":\"REVERT\"},{\"begin\":2075,\"end\":2124,\"name\":\"tag\",\"value\":\"100\"},{\"begin\":2075,\"end\":2124,\"name\":\"JUMPDEST\"},{\"begin\":3458,\"end\":3462,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3458,\"end\":3471,\"name\":\"DUP1\"},{\"begin\":3458,\"end\":3471,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3463,\"end\":3470,\"name\":\"DUP7\"},{\"begin\":3463,\"end\":3470,\"name\":\"ADD\"},{\"begin\":3463,\"end\":3470,\"name\":\"SWAP1\"},{\"begin\":3458,\"end\":3471,\"name\":\"DUP2\"},{\"begin\":3458,\"end\":3471,\"name\":\"LT\"},{\"begin\":3458,\"end\":3471,\"name\":\"PUSH [tag]\",\"value\":\"102\"},{\"begin\":3458,\"end\":3471,\"name\":\"JUMPI\"},{\"begin\":3458,\"end\":3471,\"name\":\"INVALID\"},{\"begin\":3458,\"end\":3471,\"name\":\"tag\",\"value\":\"102\"},{\"begin\":3458,\"end\":3471,\"name\":\"JUMPDEST\"},{\"begin\":3458,\"end\":3471,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3458,\"end\":3471,\"name\":\"SWAP2\"},{\"begin\":3458,\"end\":3471,\"name\":\"DUP3\"},{\"begin\":3458,\"end\":3471,\"name\":\"MSTORE\"},{\"begin\":3458,\"end\":3471,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3458,\"end\":3471,\"name\":\"SWAP1\"},{\"begin\":3458,\"end\":3471,\"name\":\"SWAP2\"},{\"begin\":3458,\"end\":3471,\"name\":\"KECCAK256\"},{\"begin\":3458,\"end\":3471,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3458,\"end\":3471,\"name\":\"SWAP1\"},{\"begin\":3458,\"end\":3471,\"name\":\"SWAP2\"},{\"begin\":3458,\"end\":3471,\"name\":\"MUL\"},{\"begin\":3458,\"end\":3471,\"name\":\"ADD\"},{\"begin\":3458,\"end\":3478,\"name\":\"SLOAD\"},{\"begin\":3489,\"end\":3493,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3489,\"end\":3502,\"name\":\"DUP1\"},{\"begin\":3489,\"end\":3502,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3458,\"end\":3478,\"name\":\"SWAP1\"},{\"begin\":3458,\"end\":3478,\"name\":\"SWAP3\"},{\"begin\":3458,\"end\":3478,\"name\":\"AND\"},{\"begin\":3458,\"end\":3478,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3494,\"end\":3501,\"name\":\"DUP8\"},{\"begin\":3494,\"end\":3501,\"name\":\"ADD\"},{\"begin\":3494,\"end\":3501,\"name\":\"SWAP1\"},{\"begin\":3489,\"end\":3502,\"name\":\"DUP2\"},{\"begin\":3489,\"end\":3502,\"name\":\"LT\"},{\"begin\":3489,\"end\":3502,\"name\":\"PUSH [tag]\",\"value\":\"104\"},{\"begin\":3489,\"end\":3502,\"name\":\"JUMPI\"},{\"begin\":3489,\"end\":3502,\"name\":\"INVALID\"},{\"begin\":3489,\"end\":3502,\"name\":\"tag\",\"value\":\"104\"},{\"begin\":3489,\"end\":3502,\"name\":\"JUMPDEST\"},{\"begin\":3489,\"end\":3502,\"name\":\"SWAP1\"},{\"begin\":3489,\"end\":3502,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3489,\"end\":3502,\"name\":\"MSTORE\"},{\"begin\":3489,\"end\":3502,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3489,\"end\":3502,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3489,\"end\":3502,\"name\":\"KECCAK256\"},{\"begin\":3489,\"end\":3502,\"name\":\"SWAP1\"},{\"begin\":3489,\"end\":3502,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3489,\"end\":3502,\"name\":\"MUL\"},{\"begin\":3489,\"end\":3502,\"name\":\"ADD\"},{\"begin\":3489,\"end\":3512,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3489,\"end\":3512,\"name\":\"ADD\"},{\"begin\":3489,\"end\":3512,\"name\":\"SLOAD\"},{\"begin\":3523,\"end\":3527,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3534,\"end\":3535,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3528,\"end\":3533,\"name\":\"DUP8\"},{\"begin\":3528,\"end\":3535,\"name\":\"SUB\"},{\"begin\":3523,\"end\":3536,\"name\":\"DUP2\"},{\"begin\":3523,\"end\":3536,\"name\":\"SLOAD\"},{\"begin\":3523,\"end\":3536,\"name\":\"DUP2\"},{\"begin\":3523,\"end\":3536,\"name\":\"LT\"},{\"begin\":3523,\"end\":3536,\"name\":\"ISZERO\"},{\"begin\":3523,\"end\":3536,\"name\":\"ISZERO\"},{\"begin\":3523,\"end\":3536,\"name\":\"PUSH [tag]\",\"value\":\"106\"},{\"begin\":3523,\"end\":3536,\"name\":\"JUMPI\"},{\"begin\":3523,\"end\":3536,\"name\":\"INVALID\"},{\"begin\":3523,\"end\":3536,\"name\":\"tag\",\"value\":\"106\"},{\"begin\":3523,\"end\":3536,\"name\":\"JUMPDEST\"},{\"begin\":3523,\"end\":3536,\"name\":\"SWAP1\"},{\"begin\":3523,\"end\":3536,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3523,\"end\":3536,\"name\":\"MSTORE\"},{\"begin\":3523,\"end\":3536,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3523,\"end\":3536,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3523,\"end\":3536,\"name\":\"KECCAK256\"},{\"begin\":3523,\"end\":3536,\"name\":\"SWAP1\"},{\"begin\":3523,\"end\":3536,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3523,\"end\":3536,\"name\":\"MUL\"},{\"begin\":3523,\"end\":3536,\"name\":\"ADD\"},{\"begin\":3523,\"end\":3540,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3523,\"end\":3540,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"SLOAD\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3440,\"end\":3551,\"name\":\"AND\"},{\"begin\":3440,\"end\":3551,\"name\":\"ISZERO\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3440,\"end\":3551,\"name\":\"MUL\"},{\"begin\":3440,\"end\":3551,\"name\":\"SUB\"},{\"begin\":3440,\"end\":3551,\"name\":\"AND\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DIV\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"DIV\"},{\"begin\":3440,\"end\":3551,\"name\":\"MUL\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3440,\"end\":3551,\"name\":\"MLOAD\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3440,\"end\":3551,\"name\":\"MSTORE\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"MSTORE\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"SLOAD\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3440,\"end\":3551,\"name\":\"AND\"},{\"begin\":3440,\"end\":3551,\"name\":\"ISZERO\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3440,\"end\":3551,\"name\":\"MUL\"},{\"begin\":3440,\"end\":3551,\"name\":\"SUB\"},{\"begin\":3440,\"end\":3551,\"name\":\"AND\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DIV\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"ISZERO\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH [tag]\",\"value\":\"108\"},{\"begin\":3440,\"end\":3551,\"name\":\"JUMPI\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3440,\"end\":3551,\"name\":\"LT\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH [tag]\",\"value\":\"109\"},{\"begin\":3440,\"end\":3551,\"name\":\"JUMPI\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP4\"},{\"begin\":3440,\"end\":3551,\"name\":\"SLOAD\"},{\"begin\":3440,\"end\":3551,\"name\":\"DIV\"},{\"begin\":3440,\"end\":3551,\"name\":\"MUL\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP4\"},{\"begin\":3440,\"end\":3551,\"name\":\"MSTORE\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH [tag]\",\"value\":\"108\"},{\"begin\":3440,\"end\":3551,\"name\":\"JUMP\"},{\"begin\":3440,\"end\":3551,\"name\":\"tag\",\"value\":\"109\"},{\"begin\":3440,\"end\":3551,\"name\":\"JUMPDEST\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3440,\"end\":3551,\"name\":\"MSTORE\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3440,\"end\":3551,\"name\":\"KECCAK256\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"tag\",\"value\":\"110\"},{\"begin\":3440,\"end\":3551,\"name\":\"JUMPDEST\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"SLOAD\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"MSTORE\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP4\"},{\"begin\":3440,\"end\":3551,\"name\":\"GT\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH [tag]\",\"value\":\"110\"},{\"begin\":3440,\"end\":3551,\"name\":\"JUMPI\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"SUB\"},{\"begin\":3440,\"end\":3551,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":3440,\"end\":3551,\"name\":\"AND\"},{\"begin\":3440,\"end\":3551,\"name\":\"DUP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"ADD\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP2\"},{\"begin\":3440,\"end\":3551,\"name\":\"tag\",\"value\":\"108\"},{\"begin\":3440,\"end\":3551,\"name\":\"JUMPDEST\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP1\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3440,\"end\":3551,\"name\":\"SWAP3\"},{\"begin\":3440,\"end\":3551,\"name\":\"POP\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP2\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP4\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP1\"},{\"begin\":3340,\"end\":3559,\"name\":\"SWAP3\"},{\"begin\":3340,\"end\":3559,\"name\":\"POP\"},{\"begin\":3340,\"end\":3559,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":725,\"end\":747,\"name\":\"tag\",\"value\":\"39\"},{\"begin\":725,\"end\":747,\"name\":\"JUMPDEST\"},{\"begin\":725,\"end\":747,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":725,\"end\":747,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":725,\"end\":747,\"name\":\"AND\"},{\"begin\":725,\"end\":747,\"name\":\"DUP2\"},{\"begin\":725,\"end\":747,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":646,\"end\":671,\"name\":\"tag\",\"value\":\"42\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPDEST\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"SLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":646,\"end\":671,\"name\":\"AND\"},{\"begin\":646,\"end\":671,\"name\":\"ISZERO\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":646,\"end\":671,\"name\":\"MUL\"},{\"begin\":646,\"end\":671,\"name\":\"SUB\"},{\"begin\":646,\"end\":671,\"name\":\"AND\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"DIV\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP2\"},{\"begin\":646,\"end\":671,\"name\":\"DIV\"},{\"begin\":646,\"end\":671,\"name\":\"MUL\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":646,\"end\":671,\"name\":\"MLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":646,\"end\":671,\"name\":\"MSTORE\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP3\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP2\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"MSTORE\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"DUP3\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"SLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":646,\"end\":671,\"name\":\"AND\"},{\"begin\":646,\"end\":671,\"name\":\"ISZERO\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":646,\"end\":671,\"name\":\"MUL\"},{\"begin\":646,\"end\":671,\"name\":\"SUB\"},{\"begin\":646,\"end\":671,\"name\":\"AND\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"DIV\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"ISZERO\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH [tag]\",\"value\":\"111\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPI\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":646,\"end\":671,\"name\":\"LT\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH [tag]\",\"value\":\"112\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPI\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP4\"},{\"begin\":646,\"end\":671,\"name\":\"SLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"DIV\"},{\"begin\":646,\"end\":671,\"name\":\"MUL\"},{\"begin\":646,\"end\":671,\"name\":\"DUP4\"},{\"begin\":646,\"end\":671,\"name\":\"MSTORE\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP2\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP2\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH [tag]\",\"value\":\"111\"},{\"begin\":646,\"end\":671,\"name\":\"JUMP\"},{\"begin\":646,\"end\":671,\"name\":\"tag\",\"value\":\"112\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPDEST\"},{\"begin\":646,\"end\":671,\"name\":\"DUP3\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP2\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":646,\"end\":671,\"name\":\"MSTORE\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":646,\"end\":671,\"name\":\"KECCAK256\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"tag\",\"value\":\"113\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPDEST\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"SLOAD\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"MSTORE\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"DUP1\"},{\"begin\":646,\"end\":671,\"name\":\"DUP4\"},{\"begin\":646,\"end\":671,\"name\":\"GT\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH [tag]\",\"value\":\"113\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPI\"},{\"begin\":646,\"end\":671,\"name\":\"DUP3\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP1\"},{\"begin\":646,\"end\":671,\"name\":\"SUB\"},{\"begin\":646,\"end\":671,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":646,\"end\":671,\"name\":\"AND\"},{\"begin\":646,\"end\":671,\"name\":\"DUP3\"},{\"begin\":646,\"end\":671,\"name\":\"ADD\"},{\"begin\":646,\"end\":671,\"name\":\"SWAP2\"},{\"begin\":646,\"end\":671,\"name\":\"tag\",\"value\":\"111\"},{\"begin\":646,\"end\":671,\"name\":\"JUMPDEST\"},{\"begin\":646,\"end\":671,\"name\":\"POP\"},{\"begin\":646,\"end\":671,\"name\":\"POP\"},{\"begin\":646,\"end\":671,\"name\":\"POP\"},{\"begin\":646,\"end\":671,\"name\":\"POP\"},{\"begin\":646,\"end\":671,\"name\":\"POP\"},{\"begin\":646,\"end\":671,\"name\":\"DUP2\"},{\"begin\":646,\"end\":671,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":4441,\"end\":4624,\"name\":\"tag\",\"value\":\"49\"},{\"begin\":4441,\"end\":4624,\"name\":\"JUMPDEST\"},{\"begin\":4488,\"end\":4494,\"name\":\"PUSH [tag]\",\"value\":\"114\"},{\"begin\":4488,\"end\":4494,\"name\":\"PUSH [tag]\",\"value\":\"96\"},{\"begin\":4488,\"end\":4494,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":4488,\"end\":4494,\"name\":\"tag\",\"value\":\"114\"},{\"begin\":4488,\"end\":4494,\"name\":\"JUMPDEST\"},{\"begin\":4530,\"end\":4543,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4515,\"end\":4526,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":4515,\"end\":4526,\"name\":\"DUP1\"},{\"begin\":4515,\"end\":4526,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":4515,\"end\":4526,\"name\":\"SWAP1\"},{\"begin\":4515,\"end\":4526,\"name\":\"DIV\"},{\"begin\":4515,\"end\":4526,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":4515,\"end\":4526,\"name\":\"AND\"},{\"begin\":4515,\"end\":4526,\"name\":\"SWAP1\"},{\"begin\":4515,\"end\":4543,\"name\":\"DUP2\"},{\"begin\":4515,\"end\":4543,\"name\":\"GT\"},{\"begin\":4515,\"end\":4543,\"name\":\"ISZERO\"},{\"begin\":4515,\"end\":4543,\"name\":\"PUSH [tag]\",\"value\":\"117\"},{\"begin\":4515,\"end\":4543,\"name\":\"JUMPI\"},{\"begin\":4515,\"end\":4543,\"name\":\"INVALID\"},{\"begin\":4515,\"end\":4543,\"name\":\"tag\",\"value\":\"117\"},{\"begin\":4515,\"end\":4543,\"name\":\"JUMPDEST\"},{\"begin\":4515,\"end\":4543,\"name\":\"EQ\"},{\"begin\":4512,\"end\":4616,\"name\":\"ISZERO\"},{\"begin\":4512,\"end\":4616,\"name\":\"PUSH [tag]\",\"value\":\"118\"},{\"begin\":4512,\"end\":4616,\"name\":\"JUMPI\"},{\"begin\":4555,\"end\":4571,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4555,\"end\":4571,\"name\":\"DUP1\"},{\"begin\":4555,\"end\":4571,\"name\":\"MLOAD\"},{\"begin\":4555,\"end\":4571,\"name\":\"SWAP1\"},{\"begin\":4555,\"end\":4571,\"name\":\"DUP2\"},{\"begin\":4555,\"end\":4571,\"name\":\"ADD\"},{\"begin\":4555,\"end\":4571,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4555,\"end\":4571,\"name\":\"MSTORE\"},{\"begin\":4555,\"end\":4571,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":4555,\"end\":4571,\"name\":\"DUP2\"},{\"begin\":4555,\"end\":4571,\"name\":\"MSTORE\"},{\"begin\":4555,\"end\":4571,\"name\":\"PUSH\",\"value\":\"4F6E676F696E6700000000000000000000000000000000000000000000000000\"},{\"begin\":4555,\"end\":4571,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4555,\"end\":4571,\"name\":\"DUP3\"},{\"begin\":4555,\"end\":4571,\"name\":\"ADD\"},{\"begin\":4555,\"end\":4571,\"name\":\"MSTORE\"},{\"begin\":4555,\"end\":4571,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":4555,\"end\":4571,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":4555,\"end\":4571,\"name\":\"JUMP\"},{\"begin\":4512,\"end\":4616,\"name\":\"tag\",\"value\":\"118\"},{\"begin\":4512,\"end\":4616,\"name\":\"JUMPDEST\"},{\"begin\":4598,\"end\":4616,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4598,\"end\":4616,\"name\":\"DUP1\"},{\"begin\":4598,\"end\":4616,\"name\":\"MLOAD\"},{\"begin\":4598,\"end\":4616,\"name\":\"SWAP1\"},{\"begin\":4598,\"end\":4616,\"name\":\"DUP2\"},{\"begin\":4598,\"end\":4616,\"name\":\"ADD\"},{\"begin\":4598,\"end\":4616,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4598,\"end\":4616,\"name\":\"MSTORE\"},{\"begin\":4598,\"end\":4616,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":4598,\"end\":4616,\"name\":\"DUP2\"},{\"begin\":4598,\"end\":4616,\"name\":\"MSTORE\"},{\"begin\":4598,\"end\":4616,\"name\":\"PUSH\",\"value\":\"436F6E636C756465640000000000000000000000000000000000000000000000\"},{\"begin\":4598,\"end\":4616,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4598,\"end\":4616,\"name\":\"DUP3\"},{\"begin\":4598,\"end\":4616,\"name\":\"ADD\"},{\"begin\":4598,\"end\":4616,\"name\":\"MSTORE\"},{\"begin\":4598,\"end\":4616,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":4598,\"end\":4616,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":4598,\"end\":4616,\"name\":\"JUMP\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"56\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"6\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SLOAD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"LT\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH [tag]\",\"value\":\"120\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPI\"},{\"begin\":1535,\"end\":1558,\"name\":\"INVALID\"},{\"begin\":1535,\"end\":1558,\"name\":\"tag\",\"value\":\"120\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMPDEST\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"MSTORE\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"KECCAK256\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"MUL\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SLOAD\"},{\"begin\":1535,\"end\":1558,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP3\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP2\"},{\"begin\":1535,\"end\":1558,\"name\":\"AND\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1535,\"end\":1558,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1535,\"end\":1558,\"name\":\"ADD\"},{\"begin\":1535,\"end\":1558,\"name\":\"DUP4\"},{\"begin\":1535,\"end\":1558,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3623,\"end\":3928,\"name\":\"tag\",\"value\":\"61\"},{\"begin\":3623,\"end\":3928,\"name\":\"JUMPDEST\"},{\"begin\":1762,\"end\":1769,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1762,\"end\":1769,\"name\":\"SLOAD\"},{\"begin\":1750,\"end\":1760,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1750,\"end\":1769,\"name\":\"SWAP1\"},{\"begin\":1750,\"end\":1769,\"name\":\"DUP2\"},{\"begin\":1750,\"end\":1769,\"name\":\"AND\"},{\"begin\":1762,\"end\":1769,\"name\":\"SWAP2\"},{\"begin\":1762,\"end\":1769,\"name\":\"AND\"},{\"begin\":1750,\"end\":1769,\"name\":\"EQ\"},{\"begin\":1742,\"end\":1780,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":1742,\"end\":1780,\"name\":\"JUMPI\"},{\"begin\":1742,\"end\":1780,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1742,\"end\":1780,\"name\":\"DUP1\"},{\"begin\":1742,\"end\":1780,\"name\":\"REVERT\"},{\"begin\":1742,\"end\":1780,\"name\":\"tag\",\"value\":\"123\"},{\"begin\":1742,\"end\":1780,\"name\":\"JUMPDEST\"},{\"begin\":2270,\"end\":2283,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2255,\"end\":2266,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2255,\"end\":2266,\"name\":\"DUP1\"},{\"begin\":2255,\"end\":2266,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":2255,\"end\":2266,\"name\":\"SWAP1\"},{\"begin\":2255,\"end\":2266,\"name\":\"DIV\"},{\"begin\":2255,\"end\":2266,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2255,\"end\":2266,\"name\":\"AND\"},{\"begin\":2255,\"end\":2266,\"name\":\"SWAP1\"},{\"begin\":2255,\"end\":2283,\"name\":\"DUP2\"},{\"begin\":2255,\"end\":2283,\"name\":\"GT\"},{\"begin\":2255,\"end\":2283,\"name\":\"ISZERO\"},{\"begin\":2255,\"end\":2283,\"name\":\"PUSH [tag]\",\"value\":\"126\"},{\"begin\":2255,\"end\":2283,\"name\":\"JUMPI\"},{\"begin\":2255,\"end\":2283,\"name\":\"INVALID\"},{\"begin\":2255,\"end\":2283,\"name\":\"tag\",\"value\":\"126\"},{\"begin\":2255,\"end\":2283,\"name\":\"JUMPDEST\"},{\"begin\":2255,\"end\":2283,\"name\":\"EQ\"},{\"begin\":2247,\"end\":2294,\"name\":\"PUSH [tag]\",\"value\":\"127\"},{\"begin\":2247,\"end\":2294,\"name\":\"JUMPI\"},{\"begin\":2247,\"end\":2294,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2247,\"end\":2294,\"name\":\"DUP1\"},{\"begin\":2247,\"end\":2294,\"name\":\"REVERT\"},{\"begin\":2247,\"end\":2294,\"name\":\"tag\",\"value\":\"127\"},{\"begin\":2247,\"end\":2294,\"name\":\"JUMPDEST\"},{\"begin\":3707,\"end\":3712,\"name\":\"DUP1\"},{\"begin\":3714,\"end\":3723,\"name\":\"CALLVALUE\"},{\"begin\":2501,\"end\":2507,\"name\":\"DUP1\"},{\"begin\":2476,\"end\":2480,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":2481,\"end\":2486,\"name\":\"DUP4\"},{\"begin\":2476,\"end\":2487,\"name\":\"DUP2\"},{\"begin\":2476,\"end\":2487,\"name\":\"SLOAD\"},{\"begin\":2476,\"end\":2487,\"name\":\"DUP2\"},{\"begin\":2476,\"end\":2487,\"name\":\"LT\"},{\"begin\":2476,\"end\":2487,\"name\":\"ISZERO\"},{\"begin\":2476,\"end\":2487,\"name\":\"ISZERO\"},{\"begin\":2476,\"end\":2487,\"name\":\"PUSH [tag]\",\"value\":\"129\"},{\"begin\":2476,\"end\":2487,\"name\":\"JUMPI\"},{\"begin\":2476,\"end\":2487,\"name\":\"INVALID\"},{\"begin\":2476,\"end\":2487,\"name\":\"tag\",\"value\":\"129\"},{\"begin\":2476,\"end\":2487,\"name\":\"JUMPDEST\"},{\"begin\":2476,\"end\":2487,\"name\":\"SWAP1\"},{\"begin\":2476,\"end\":2487,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2476,\"end\":2487,\"name\":\"MSTORE\"},{\"begin\":2476,\"end\":2487,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2476,\"end\":2487,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2476,\"end\":2487,\"name\":\"KECCAK256\"},{\"begin\":2476,\"end\":2487,\"name\":\"SWAP1\"},{\"begin\":2476,\"end\":2487,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2476,\"end\":2487,\"name\":\"MUL\"},{\"begin\":2476,\"end\":2487,\"name\":\"ADD\"},{\"begin\":2476,\"end\":2497,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2476,\"end\":2497,\"name\":\"ADD\"},{\"begin\":2476,\"end\":2497,\"name\":\"SLOAD\"},{\"begin\":2476,\"end\":2507,\"name\":\"GT\"},{\"begin\":2476,\"end\":2507,\"name\":\"ISZERO\"},{\"begin\":2468,\"end\":2508,\"name\":\"ISZERO\"},{\"begin\":2468,\"end\":2508,\"name\":\"ISZERO\"},{\"begin\":2468,\"end\":2508,\"name\":\"PUSH [tag]\",\"value\":\"131\"},{\"begin\":2468,\"end\":2508,\"name\":\"JUMPI\"},{\"begin\":2468,\"end\":2508,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2468,\"end\":2508,\"name\":\"DUP1\"},{\"begin\":2468,\"end\":2508,\"name\":\"REVERT\"},{\"begin\":2468,\"end\":2508,\"name\":\"tag\",\"value\":\"131\"},{\"begin\":2468,\"end\":2508,\"name\":\"JUMPDEST\"},{\"begin\":3744,\"end\":3748,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3744,\"end\":3755,\"name\":\"DUP1\"},{\"begin\":3744,\"end\":3755,\"name\":\"SLOAD\"},{\"begin\":3749,\"end\":3754,\"name\":\"DUP5\"},{\"begin\":3749,\"end\":3754,\"name\":\"SWAP1\"},{\"begin\":3744,\"end\":3755,\"name\":\"DUP2\"},{\"begin\":3744,\"end\":3755,\"name\":\"LT\"},{\"begin\":3744,\"end\":3755,\"name\":\"PUSH [tag]\",\"value\":\"133\"},{\"begin\":3744,\"end\":3755,\"name\":\"JUMPI\"},{\"begin\":3744,\"end\":3755,\"name\":\"INVALID\"},{\"begin\":3744,\"end\":3755,\"name\":\"tag\",\"value\":\"133\"},{\"begin\":3744,\"end\":3755,\"name\":\"JUMPDEST\"},{\"begin\":3744,\"end\":3755,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3744,\"end\":3755,\"name\":\"SWAP2\"},{\"begin\":3744,\"end\":3755,\"name\":\"DUP3\"},{\"begin\":3744,\"end\":3755,\"name\":\"MSTORE\"},{\"begin\":3744,\"end\":3755,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3744,\"end\":3755,\"name\":\"SWAP1\"},{\"begin\":3744,\"end\":3755,\"name\":\"SWAP2\"},{\"begin\":3744,\"end\":3755,\"name\":\"KECCAK256\"},{\"begin\":3744,\"end\":3755,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3744,\"end\":3755,\"name\":\"SWAP1\"},{\"begin\":3744,\"end\":3755,\"name\":\"SWAP2\"},{\"begin\":3744,\"end\":3755,\"name\":\"MUL\"},{\"begin\":3744,\"end\":3755,\"name\":\"ADD\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"SLOAD\"},{\"begin\":3735,\"end\":3741,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3735,\"end\":3755,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP3\"},{\"begin\":3735,\"end\":3755,\"name\":\"AND\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP2\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP2\"},{\"begin\":3735,\"end\":3755,\"name\":\"OR\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP2\"},{\"begin\":3735,\"end\":3755,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP4\"},{\"begin\":3735,\"end\":3755,\"name\":\"ADD\"},{\"begin\":3735,\"end\":3755,\"name\":\"SLOAD\"},{\"begin\":3735,\"end\":3755,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":3735,\"end\":3755,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP5\"},{\"begin\":3735,\"end\":3755,\"name\":\"ADD\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"SLOAD\"},{\"begin\":3735,\"end\":3755,\"name\":\"PUSH [tag]\",\"value\":\"135\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP4\"},{\"begin\":3735,\"end\":3755,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP4\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"DUP3\"},{\"begin\":3735,\"end\":3755,\"name\":\"AND\"},{\"begin\":3735,\"end\":3755,\"name\":\"ISZERO\"},{\"begin\":3735,\"end\":3755,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":3735,\"end\":3755,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3735,\"end\":3755,\"name\":\"ADD\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP1\"},{\"begin\":3735,\"end\":3755,\"name\":\"SWAP2\"},{\"begin\":3735,\"end\":3755,\"name\":\"AND\"},{\"begin\":3735,\"end\":3755,\"name\":\"DIV\"},{\"begin\":3735,\"end\":3755,\"name\":\"PUSH [tag]\",\"value\":\"136\"},{\"begin\":3735,\"end\":3755,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":3735,\"end\":3755,\"name\":\"tag\",\"value\":\"135\"},{\"begin\":3735,\"end\":3755,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3766,\"end\":3774,\"name\":\"PUSH\",\"value\":\"A\"},{\"begin\":3766,\"end\":3782,\"name\":\"DUP4\"},{\"begin\":3766,\"end\":3782,\"name\":\"SWAP1\"},{\"begin\":3766,\"end\":3782,\"name\":\"SSTORE\"},{\"begin\":3793,\"end\":3799,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":3793,\"end\":3806,\"name\":\"SLOAD\"},{\"begin\":3816,\"end\":3832,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":3816,\"end\":3832,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3793,\"end\":3806,\"name\":\"SWAP1\"},{\"begin\":3793,\"end\":3806,\"name\":\"SWAP2\"},{\"begin\":3793,\"end\":3806,\"name\":\"AND\"},{\"begin\":3793,\"end\":3806,\"name\":\"SWAP1\"},{\"begin\":3793,\"end\":3833,\"name\":\"PUSH\",\"value\":\"8FC\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP2\"},{\"begin\":3793,\"end\":3833,\"name\":\"ISZERO\"},{\"begin\":3793,\"end\":3833,\"name\":\"MUL\"},{\"begin\":3793,\"end\":3833,\"name\":\"SWAP1\"},{\"begin\":3793,\"end\":3833,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3793,\"end\":3833,\"name\":\"MLOAD\"},{\"begin\":3793,\"end\":3833,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3793,\"end\":3833,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3793,\"end\":3833,\"name\":\"MLOAD\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP1\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP4\"},{\"begin\":3793,\"end\":3833,\"name\":\"SUB\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP2\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP6\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP9\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP9\"},{\"begin\":3793,\"end\":3833,\"name\":\"CALL\"},{\"begin\":3793,\"end\":3833,\"name\":\"SWAP4\"},{\"begin\":3793,\"end\":3833,\"name\":\"POP\"},{\"begin\":3793,\"end\":3833,\"name\":\"POP\"},{\"begin\":3793,\"end\":3833,\"name\":\"POP\"},{\"begin\":3793,\"end\":3833,\"name\":\"POP\"},{\"begin\":3793,\"end\":3833,\"name\":\"ISZERO\"},{\"begin\":3793,\"end\":3833,\"name\":\"ISZERO\"},{\"begin\":3793,\"end\":3833,\"name\":\"PUSH [tag]\",\"value\":\"137\"},{\"begin\":3793,\"end\":3833,\"name\":\"JUMPI\"},{\"begin\":3793,\"end\":3833,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3793,\"end\":3833,\"name\":\"DUP1\"},{\"begin\":3793,\"end\":3833,\"name\":\"REVERT\"},{\"begin\":3793,\"end\":3833,\"name\":\"tag\",\"value\":\"137\"},{\"begin\":3793,\"end\":3833,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3844,\"end\":3854,\"name\":\"CALLER\"},{\"begin\":3844,\"end\":3863,\"name\":\"DUP2\"},{\"begin\":3844,\"end\":3863,\"name\":\"AND\"},{\"begin\":3844,\"end\":3863,\"name\":\"SWAP1\"},{\"begin\":3864,\"end\":3868,\"name\":\"ADDRESS\"},{\"begin\":3864,\"end\":3876,\"name\":\"AND\"},{\"begin\":3864,\"end\":3876,\"name\":\"BALANCE\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP1\"},{\"begin\":3844,\"end\":3877,\"name\":\"ISZERO\"},{\"begin\":3844,\"end\":3877,\"name\":\"PUSH\",\"value\":\"8FC\"},{\"begin\":3844,\"end\":3877,\"name\":\"MUL\"},{\"begin\":3844,\"end\":3877,\"name\":\"SWAP1\"},{\"begin\":3844,\"end\":3877,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3844,\"end\":3877,\"name\":\"MLOAD\"},{\"begin\":3844,\"end\":3877,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3844,\"end\":3877,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3844,\"end\":3877,\"name\":\"MLOAD\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP1\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP4\"},{\"begin\":3844,\"end\":3877,\"name\":\"SUB\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP2\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP6\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP9\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP9\"},{\"begin\":3844,\"end\":3877,\"name\":\"CALL\"},{\"begin\":3844,\"end\":3877,\"name\":\"SWAP4\"},{\"begin\":3844,\"end\":3877,\"name\":\"POP\"},{\"begin\":3844,\"end\":3877,\"name\":\"POP\"},{\"begin\":3844,\"end\":3877,\"name\":\"POP\"},{\"begin\":3844,\"end\":3877,\"name\":\"POP\"},{\"begin\":3844,\"end\":3877,\"name\":\"ISZERO\"},{\"begin\":3844,\"end\":3877,\"name\":\"ISZERO\"},{\"begin\":3844,\"end\":3877,\"name\":\"PUSH [tag]\",\"value\":\"138\"},{\"begin\":3844,\"end\":3877,\"name\":\"JUMPI\"},{\"begin\":3844,\"end\":3877,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3844,\"end\":3877,\"name\":\"DUP1\"},{\"begin\":3844,\"end\":3877,\"name\":\"REVERT\"},{\"begin\":3844,\"end\":3877,\"name\":\"tag\",\"value\":\"138\"},{\"begin\":3844,\"end\":3877,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3902,\"end\":3917,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3888,\"end\":3917,\"name\":\"DUP1\"},{\"begin\":3888,\"end\":3917,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF0000000000000000000000000000000000000000\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":3888,\"end\":3917,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":3888,\"end\":3917,\"name\":\"OR\"},{\"begin\":3888,\"end\":3917,\"name\":\"SWAP1\"},{\"begin\":3888,\"end\":3917,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3623,\"end\":3928,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1588,\"end\":1605,\"name\":\"tag\",\"value\":\"64\"},{\"begin\":1588,\"end\":1605,\"name\":\"JUMPDEST\"},{\"begin\":1588,\"end\":1605,\"name\":\"PUSH\",\"value\":\"7\"},{\"begin\":1588,\"end\":1605,\"name\":\"SLOAD\"},{\"begin\":1588,\"end\":1605,\"name\":\"PUSH\",\"value\":\"8\"},{\"begin\":1588,\"end\":1605,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1588,\"end\":1605,\"name\":\"SWAP1\"},{\"begin\":1588,\"end\":1605,\"name\":\"SWAP2\"},{\"begin\":1588,\"end\":1605,\"name\":\"AND\"},{\"begin\":1588,\"end\":1605,\"name\":\"SWAP1\"},{\"begin\":1588,\"end\":1605,\"name\":\"PUSH\",\"value\":\"9\"},{\"begin\":1588,\"end\":1605,\"name\":\"DUP4\"},{\"begin\":1588,\"end\":1605,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":4028,\"end\":4242,\"name\":\"tag\",\"value\":\"70\"},{\"begin\":4028,\"end\":4242,\"name\":\"JUMPDEST\"},{\"begin\":4077,\"end\":4108,\"name\":\"PUSH [tag]\",\"value\":\"140\"},{\"begin\":4077,\"end\":4108,\"name\":\"PUSH [tag]\",\"value\":\"96\"},{\"begin\":4077,\"end\":4108,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":4077,\"end\":4108,\"name\":\"tag\",\"value\":\"140\"},{\"begin\":4077,\"end\":4108,\"name\":\"JUMPDEST\"},{\"begin\":4193,\"end\":4200,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":4193,\"end\":4200,\"name\":\"DUP1\"},{\"begin\":4193,\"end\":4200,\"name\":\"SLOAD\"},{\"begin\":4212,\"end\":4216,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":4212,\"end\":4223,\"name\":\"SLOAD\"},{\"begin\":4110,\"end\":4132,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"SLOAD\"},{\"begin\":4110,\"end\":4132,\"name\":\"SWAP1\"},{\"begin\":4110,\"end\":4132,\"name\":\"SWAP4\"},{\"begin\":4110,\"end\":4132,\"name\":\"DUP5\"},{\"begin\":4110,\"end\":4132,\"name\":\"SWAP4\"},{\"begin\":4110,\"end\":4132,\"name\":\"DUP5\"},{\"begin\":4110,\"end\":4132,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":4193,\"end\":4200,\"name\":\"SWAP1\"},{\"begin\":4193,\"end\":4200,\"name\":\"SWAP2\"},{\"begin\":4193,\"end\":4200,\"name\":\"AND\"},{\"begin\":4193,\"end\":4200,\"name\":\"SWAP3\"},{\"begin\":4212,\"end\":4223,\"name\":\"SWAP1\"},{\"begin\":4212,\"end\":4223,\"name\":\"SWAP2\"},{\"begin\":4110,\"end\":4132,\"name\":\"DUP5\"},{\"begin\":4110,\"end\":4132,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"AND\"},{\"begin\":4162,\"end\":4234,\"name\":\"ISZERO\"},{\"begin\":4193,\"end\":4200,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":4162,\"end\":4234,\"name\":\"MUL\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"AND\"},{\"begin\":4162,\"end\":4234,\"name\":\"DIV\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"DIV\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"MUL\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4162,\"end\":4234,\"name\":\"MLOAD\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4162,\"end\":4234,\"name\":\"MSTORE\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"MSTORE\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"SLOAD\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":4162,\"end\":4234,\"name\":\"AND\"},{\"begin\":4162,\"end\":4234,\"name\":\"ISZERO\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":4162,\"end\":4234,\"name\":\"MUL\"},{\"begin\":4162,\"end\":4234,\"name\":\"SUB\"},{\"begin\":4162,\"end\":4234,\"name\":\"AND\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"DIV\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"ISZERO\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH [tag]\",\"value\":\"142\"},{\"begin\":4162,\"end\":4234,\"name\":\"JUMPI\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":4162,\"end\":4234,\"name\":\"LT\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH [tag]\",\"value\":\"143\"},{\"begin\":4162,\"end\":4234,\"name\":\"JUMPI\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP4\"},{\"begin\":4162,\"end\":4234,\"name\":\"SLOAD\"},{\"begin\":4162,\"end\":4234,\"name\":\"DIV\"},{\"begin\":4162,\"end\":4234,\"name\":\"MUL\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP4\"},{\"begin\":4162,\"end\":4234,\"name\":\"MSTORE\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH [tag]\",\"value\":\"142\"},{\"begin\":4162,\"end\":4234,\"name\":\"JUMP\"},{\"begin\":4162,\"end\":4234,\"name\":\"tag\",\"value\":\"143\"},{\"begin\":4162,\"end\":4234,\"name\":\"JUMPDEST\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4162,\"end\":4234,\"name\":\"MSTORE\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4162,\"end\":4234,\"name\":\"KECCAK256\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"tag\",\"value\":\"144\"},{\"begin\":4162,\"end\":4234,\"name\":\"JUMPDEST\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"SLOAD\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"MSTORE\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP4\"},{\"begin\":4162,\"end\":4234,\"name\":\"GT\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH [tag]\",\"value\":\"144\"},{\"begin\":4162,\"end\":4234,\"name\":\"JUMPI\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP1\"},{\"begin\":4162,\"end\":4234,\"name\":\"SUB\"},{\"begin\":4162,\"end\":4234,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":4162,\"end\":4234,\"name\":\"AND\"},{\"begin\":4162,\"end\":4234,\"name\":\"DUP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"ADD\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP2\"},{\"begin\":4162,\"end\":4234,\"name\":\"tag\",\"value\":\"142\"},{\"begin\":4162,\"end\":4234,\"name\":\"JUMPDEST\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4162,\"end\":4234,\"name\":\"SWAP3\"},{\"begin\":4162,\"end\":4234,\"name\":\"POP\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP1\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP2\"},{\"begin\":4028,\"end\":4242,\"name\":\"SWAP3\"},{\"begin\":4028,\"end\":4242,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"79\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":576,\"end\":4792,\"name\":\"MLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP4\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP4\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"145\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"96\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"145\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"88\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP4\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"GT\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"148\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":576,\"end\":4792,\"name\":\"MUL\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":576,\"end\":4792,\"name\":\"MUL\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP4\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"KECCAK256\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"148\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"149\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"148\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"91\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":576,\"end\":4792,\"name\":\"MUL\"},{\"begin\":576,\"end\":4792,\"name\":\"SUB\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"KECCAK256\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"LT\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"151\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"MLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":576,\"end\":4792,\"name\":\"NOT\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP4\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"OR\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP6\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"151\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP6\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"152\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"GT\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"MLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"152\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"153\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"154\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP3\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"155\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"154\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"96\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":576,\"end\":4792,\"name\":\"MLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"136\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":576,\"end\":4792,\"name\":\"MUL\"},{\"begin\":576,\"end\":4792,\"name\":\"SUB\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"KECCAK256\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"LT\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"157\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP6\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"157\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP6\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"KECCAK256\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"158\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"GT\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"158\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"149\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"162\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"GT\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"154\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"164\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP4\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":-1,\"end\":-1,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"165\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"164\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"162\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"155\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"167\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"GT\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"154\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"167\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"165\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"SLOAD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"ISZERO\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":576,\"end\":4792,\"name\":\"MUL\"},{\"begin\":576,\"end\":4792,\"name\":\"SUB\"},{\"begin\":576,\"end\":4792,\"name\":\"AND\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP3\"},{\"begin\":576,\"end\":4792,\"name\":\"SSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"LT\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"170\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPI\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"171\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"170\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DIV\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"MSTORE\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":576,\"end\":4792,\"name\":\"KECCAK256\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"DUP2\"},{\"begin\":576,\"end\":4792,\"name\":\"ADD\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"171\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP2\"},{\"begin\":576,\"end\":4792,\"name\":\"SWAP1\"},{\"begin\":576,\"end\":4792,\"name\":\"PUSH [tag]\",\"value\":\"155\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":576,\"end\":4792,\"name\":\"tag\",\"value\":\"171\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMPDEST\"},{\"begin\":576,\"end\":4792,\"name\":\"POP\"},{\"begin\":576,\"end\":4792,\"name\":\"JUMP\",\"value\":\"[out]\"}]}}}}}}},\"bytecode\":\"6060604052341561000f57600080fd5b6111e18061001e6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166327c15c5181146100525780638202082f146100a5578063bf60c7db1461010b57600080fd5b341561005d57600080fd5b6100a360046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061014a95505050505050565b005b34156100b057600080fd5b6100b8610251565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100f75780820151838201526020016100df565b505050509050019250505060405180910390f35b341561011657600080fd5b6101216004356102c7565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b600081336101566102fc565b73ffffffffffffffffffffffffffffffffffffffff8216602082015260408082528190810184818151815260200191508051906020019080838360005b838110156101ab578082015183820152602001610193565b50505050905090810190601f1680156101d85780820380516001836020036101000a031916815260200191505b509350505050604051809103906000f08015156101f457600080fd5b90506000805480600101828161020a919061030c565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b610259610335565b60008054806020026020016040519081016040528092919081815260200182805480156102bc57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610291575b505050505090505b90565b60008054829081106102d557fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b604051610e508061036683390190565b81548183558181151161033057600083815260209020610330918101908301610347565b505050565b60206040519081016040526000815290565b6102c491905b80821115610361576000815560010161034d565b5090560060606040526000600255341561001457600080fd5b604051610e50380380610e508339810160405280805182019190602001805160018054600160a060020a031916600160a060020a03831617905591506000905082805161006592916020019061006d565b505050610108565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ae57805160ff19168380011785556100db565b828001600101855582156100db579182015b828111156100db5782518255916020019190600101906100c0565b506100e79291506100eb565b5090565b61010591905b808211156100e757600081556001016100f1565b90565b610d39806101176000396000f300606060405236156100c25763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630a46572f81146100c757806310d2f82f146100ec57806317d531fc1461010157806328f6a48a146101145780632a4230e2146101275780632b50ef0e1461017d578063481c6a75146102225780637284e4161461025157806379a408e5146102db57806389c8bc63146102ee5780638fdee0c5146103a4578063dfbf53ae146103af578063f7bbc787146103c2575b600080fd5b34156100d257600080fd5b6100da610426565b60405190815260200160405180910390f35b34156100f757600080fd5b6100ff61042c565b005b341561010c57600080fd5b6100da610449565b341561011f57600080fd5b6100da61044f565b341561013257600080fd5b6100ff600480359060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061045695505050505050565b341561018857600080fd5b6101936004356105c1565b604051600160a060020a03841681526020810183905260606040820181815290820183818151815260200191508051906020019080838360005b838110156101e55780820151838201526020016101cd565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561022d57600080fd5b61023561070e565b604051600160a060020a03909116815260200160405180910390f35b341561025c57600080fd5b61026461071d565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102a0578082015183820152602001610288565b50505050905090810190601f1680156102cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102e657600080fd5b6102646107bb565b34156102f957600080fd5b610304600435610859565b604051600160a060020a038416815260208101839052606060408201818152835460026000196101006001841615020190911604918301829052906080830190849080156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b505094505050505060405180910390f35b6100ff600435610892565b34156103ba57600080fd5b610304610a21565b34156103cd57600080fd5b6103d5610a38565b604051600160a060020a0383166020820152604081018290526060808252819081018581815181526020019150805190602001908083836000838110156101e55780820151838201526020016101cd565b600a5481565b60015433600160a060020a0390811691161461044757600080fd5b565b60025481565b6005545b90565b61045e610b08565b60006001805460a060020a900460ff169081111561047857fe5b1461048257600080fd5b60015433600160a060020a039081169116141561049e57600080fd5b60606040519081016040908152600160a060020a033316825260208201859052810183905260028054600190810190915560068054929350919081016104e48382610b2e565b600092835260209092208391600302018151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010155604082015181600201908051610542929160200190610b5f565b505050506005805480600101828161055a9190610b2e565b600092835260209092208391600302018151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0391909116178155602082015181600101556040820151816002019080516105b8929160200190610b5f565b50505050505050565b6000806105cc610bdd565b600180805460a060020a900460ff16908111156105e557fe5b146105ef57600080fd5b60058054600019860190811061060157fe5b600091825260209091206003909102015460058054600160a060020a0390921691600019870190811061063057fe5b90600052602060002090600302016001015460056001870381548110151561065457fe5b9060005260206000209060030201600201808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106fa5780601f106106cf576101008083540402835291602001916106fa565b820191906000526020600020905b8154815290600101906020018083116106dd57829003601f168201915b505050505090509250925092509193909250565b600154600160a060020a031681565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107b35780601f10610788576101008083540402835291602001916107b3565b820191906000526020600020905b81548152906001019060200180831161079657829003601f168201915b505050505081565b6107c3610bdd565b60006001805460a060020a900460ff16908111156107dd57fe5b141561081e5760408051908101604052600781527f4f6e676f696e670000000000000000000000000000000000000000000000000060208201529050610453565b60408051908101604052600981527f436f6e636c75646564000000000000000000000000000000000000000000000060208201529050610453565b600680548290811061086757fe5b6000918252602090912060039091020180546001820154600160a060020a0390911692509060020183565b60015433600160a060020a039081169116146108ad57600080fd5b60006001805460a060020a900460ff16908111156108c757fe5b146108d157600080fd5b8034806005838154811015156108e357fe5b9060005260206000209060030201600101541115151561090257600080fd5b600580548490811061091057fe5b6000918252602090912060039091020180546007805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911781556001808301546008556002808401805461097a9360099390821615610100026000190190911604610bef565b505050600a839055600754600854600160a060020a039091169080156108fc0290604051600060405180830381858888f1935050505015156109bb57600080fd5b33600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156109f857600080fd5b50506001805474ff0000000000000000000000000000000000000000191660a060020a17905550565b600754600854600160a060020a0390911690600983565b610a40610bdd565b6000806000600160009054906101000a9004600160a060020a0316600580549050828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610af65780601f10610acb57610100808354040283529160200191610af6565b820191906000526020600020905b815481529060010190602001808311610ad957829003601f168201915b50505050509250925092509250909192565b60606040519081016040908152600080835260208301528101610b29610bdd565b905290565b815481835581811511610b5a57600302816003028360005260206000209182019101610b5a9190610c64565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ba057805160ff1916838001178555610bcd565b82800160010185558215610bcd579182015b82811115610bcd578251825591602001919060010190610bb2565b50610bd9929150610cac565b5090565b60206040519081016040526000815290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c285780548555610bcd565b82800160010185558215610bcd57600052602060002091601f016020900482015b82811115610bcd578254825591600101919060010190610c49565b61045391905b80821115610bd957805473ffffffffffffffffffffffffffffffffffffffff19168155600060018201819055610ca36002830182610cc6565b50600301610c6a565b61045391905b80821115610bd95760008155600101610cb2565b50805460018160011615610100020316600290046000825580601f10610cec5750610d0a565b601f016020900490600052602060002090810190610d0a9190610cac565b505600a165627a7a723058209f8d1a281cbe8730c1482a0eb3d9731e73ec2ab43f629a329d3e163882576d460029a165627a7a72305820bca6b876c08f8f66c6fba8479eebab55b74bc3514d23d89f071960c8e6a5c6220029\",\"functionHashes\":{\"createTender(string)\":\"27c15c51\",\"deployedTenders(uint256)\":\"bf60c7db\",\"getDeployedTenders()\":\"8202082f\"},\"gasEstimates\":{\"creation\":[950,915400],\"external\":{\"createTender(string)\":null,\"deployedTenders(uint256)\":711,\"getDeployedTenders()\":null},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"createTender\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedTenders\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedTenders\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.17+commit.bdeb9e52\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"createTender\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedTenders\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedTenders\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"\\\":\\\"tenderFactory\\\"},\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"\\\":{\\\"keccak256\\\":\\\"0x6db40d1528225d552d46a6cfe3c584960abab700979884208fb4bd5f646d7024\\\",\\\"urls\\\":[\\\"bzzr://6580a03168e5c1c4b662a1625c0b1b1613849cee014dc170c1809b80bacac2a3\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x11E1 DUP1 PUSH2 0x1E PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x27C15C51 DUP2 EQ PUSH2 0x52 JUMPI DUP1 PUSH4 0x8202082F EQ PUSH2 0xA5 JUMPI DUP1 PUSH4 0xBF60C7DB EQ PUSH2 0x10B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x5D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xA3 PUSH1 0x4 PUSH1 0x24 DUP2 CALLDATALOAD DUP2 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP PUSH2 0x14A SWAP6 POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0xB0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB8 PUSH2 0x251 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH1 0x20 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xF7 JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xDF JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x116 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x121 PUSH1 0x4 CALLDATALOAD PUSH2 0x2C7 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP2 CALLER PUSH2 0x156 PUSH2 0x2FC JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP5 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1AB JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x193 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x1D8 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP4 POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 PUSH1 0x0 CREATE DUP1 ISZERO ISZERO PUSH2 0x1F4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 POP PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x1 ADD DUP3 DUP2 PUSH2 0x20A SWAP2 SWAP1 PUSH2 0x30C JUMP JUMPDEST POP PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH2 0x259 PUSH2 0x335 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x2BC JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x291 JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x2D5 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xE50 DUP1 PUSH2 0x366 DUP4 CODECOPY ADD SWAP1 JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 ISZERO GT PUSH2 0x330 JUMPI PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 SWAP1 KECCAK256 PUSH2 0x330 SWAP2 DUP2 ADD SWAP1 DUP4 ADD PUSH2 0x347 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x0 DUP2 MSTORE SWAP1 JUMP JUMPDEST PUSH2 0x2C4 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x361 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x34D JUMP JUMPDEST POP SWAP1 JUMP STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x0 PUSH1 0x2 SSTORE CALLVALUE ISZERO PUSH2 0x14 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xE50 CODESIZE SUB DUP1 PUSH2 0xE50 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 DUP1 MLOAD DUP3 ADD SWAP2 SWAP1 PUSH1 0x20 ADD DUP1 MLOAD PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND OR SWAP1 SSTORE SWAP2 POP PUSH1 0x0 SWAP1 POP DUP3 DUP1 MLOAD PUSH2 0x65 SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0x6D JUMP JUMPDEST POP POP POP PUSH2 0x108 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0xAE JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xDB JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xDB JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xDB JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xC0 JUMP JUMPDEST POP PUSH2 0xE7 SWAP3 SWAP2 POP PUSH2 0xEB JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x105 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xE7 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xF1 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0xD39 DUP1 PUSH2 0x117 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE CALLDATASIZE ISZERO PUSH2 0xC2 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xA46572F DUP2 EQ PUSH2 0xC7 JUMPI DUP1 PUSH4 0x10D2F82F EQ PUSH2 0xEC JUMPI DUP1 PUSH4 0x17D531FC EQ PUSH2 0x101 JUMPI DUP1 PUSH4 0x28F6A48A EQ PUSH2 0x114 JUMPI DUP1 PUSH4 0x2A4230E2 EQ PUSH2 0x127 JUMPI DUP1 PUSH4 0x2B50EF0E EQ PUSH2 0x17D JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0x222 JUMPI DUP1 PUSH4 0x7284E416 EQ PUSH2 0x251 JUMPI DUP1 PUSH4 0x79A408E5 EQ PUSH2 0x2DB JUMPI DUP1 PUSH4 0x89C8BC63 EQ PUSH2 0x2EE JUMPI DUP1 PUSH4 0x8FDEE0C5 EQ PUSH2 0x3A4 JUMPI DUP1 PUSH4 0xDFBF53AE EQ PUSH2 0x3AF JUMPI DUP1 PUSH4 0xF7BBC787 EQ PUSH2 0x3C2 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0xD2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xDA PUSH2 0x426 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xF7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xFF PUSH2 0x42C JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0x10C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xDA PUSH2 0x449 JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x11F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xDA PUSH2 0x44F JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x132 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xFF PUSH1 0x4 DUP1 CALLDATALOAD SWAP1 PUSH1 0x44 PUSH1 0x24 DUP1 CALLDATALOAD SWAP1 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP PUSH2 0x456 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x188 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x193 PUSH1 0x4 CALLDATALOAD PUSH2 0x5C1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP4 SWAP1 MSTORE PUSH1 0x60 PUSH1 0x40 DUP3 ADD DUP2 DUP2 MSTORE SWAP1 DUP3 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1E5 JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x1CD JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x212 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP5 POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x22D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x235 PUSH2 0x70E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x25C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x264 PUSH2 0x71D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2A0 JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x288 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x2CD JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x2E6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x264 PUSH2 0x7BB JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x2F9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x304 PUSH1 0x4 CALLDATALOAD PUSH2 0x859 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP4 SWAP1 MSTORE PUSH1 0x60 PUSH1 0x40 DUP3 ADD DUP2 DUP2 MSTORE DUP4 SLOAD PUSH1 0x2 PUSH1 0x0 NOT PUSH2 0x100 PUSH1 0x1 DUP5 AND ISZERO MUL ADD SWAP1 SWAP2 AND DIV SWAP2 DUP4 ADD DUP3 SWAP1 MSTORE SWAP1 PUSH1 0x80 DUP4 ADD SWAP1 DUP5 SWAP1 DUP1 ISZERO PUSH2 0x393 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x368 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x393 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x376 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP SWAP5 POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xFF PUSH1 0x4 CALLDATALOAD PUSH2 0x892 JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x3BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x304 PUSH2 0xA21 JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x3CD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x3D5 PUSH2 0xA38 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0x60 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP6 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 DUP4 DUP2 LT ISZERO PUSH2 0x1E5 JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x1CD JUMP JUMPDEST PUSH1 0xA SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ PUSH2 0x447 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 SLOAD JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x45E PUSH2 0xB08 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 DUP1 SLOAD PUSH1 0xA0 PUSH1 0x2 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP2 GT ISZERO PUSH2 0x478 JUMPI INVALID JUMPDEST EQ PUSH2 0x482 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ ISZERO PUSH2 0x49E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x60 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD DUP6 SWAP1 MSTORE DUP2 ADD DUP4 SWAP1 MSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 SWAP1 DUP2 ADD SWAP1 SWAP2 SSTORE PUSH1 0x6 DUP1 SLOAD SWAP3 SWAP4 POP SWAP2 SWAP1 DUP2 ADD PUSH2 0x4E4 DUP4 DUP3 PUSH2 0xB2E JUMP JUMPDEST PUSH1 0x0 SWAP3 DUP4 MSTORE PUSH1 0x20 SWAP1 SWAP3 KECCAK256 DUP4 SWAP2 PUSH1 0x3 MUL ADD DUP2 MLOAD DUP2 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP2 SWAP1 SWAP2 AND OR DUP2 SSTORE PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE PUSH1 0x40 DUP3 ADD MLOAD DUP2 PUSH1 0x2 ADD SWAP1 DUP1 MLOAD PUSH2 0x542 SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0xB5F JUMP JUMPDEST POP POP POP POP PUSH1 0x5 DUP1 SLOAD DUP1 PUSH1 0x1 ADD DUP3 DUP2 PUSH2 0x55A SWAP2 SWAP1 PUSH2 0xB2E JUMP JUMPDEST PUSH1 0x0 SWAP3 DUP4 MSTORE PUSH1 0x20 SWAP1 SWAP3 KECCAK256 DUP4 SWAP2 PUSH1 0x3 MUL ADD DUP2 MLOAD DUP2 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP2 SWAP1 SWAP2 AND OR DUP2 SSTORE PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE PUSH1 0x40 DUP3 ADD MLOAD DUP2 PUSH1 0x2 ADD SWAP1 DUP1 MLOAD PUSH2 0x5B8 SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0xB5F JUMP JUMPDEST POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x5CC PUSH2 0xBDD JUMP JUMPDEST PUSH1 0x1 DUP1 DUP1 SLOAD PUSH1 0xA0 PUSH1 0x2 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP2 GT ISZERO PUSH2 0x5E5 JUMPI INVALID JUMPDEST EQ PUSH2 0x5EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x5 DUP1 SLOAD PUSH1 0x0 NOT DUP7 ADD SWAP1 DUP2 LT PUSH2 0x601 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x3 SWAP1 SWAP2 MUL ADD SLOAD PUSH1 0x5 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 PUSH1 0x0 NOT DUP8 ADD SWAP1 DUP2 LT PUSH2 0x630 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x3 MUL ADD PUSH1 0x1 ADD SLOAD PUSH1 0x5 PUSH1 0x1 DUP8 SUB DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x654 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x3 MUL ADD PUSH1 0x2 ADD DUP1 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x6FA JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x6CF JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x6FA JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x6DD JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP3 POP SWAP3 POP SWAP3 POP SWAP2 SWAP4 SWAP1 SWAP3 POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x7B3 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x788 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x7B3 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x796 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH2 0x7C3 PUSH2 0xBDD JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 DUP1 SLOAD PUSH1 0xA0 PUSH1 0x2 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP2 GT ISZERO PUSH2 0x7DD JUMPI INVALID JUMPDEST EQ ISZERO PUSH2 0x81E JUMPI PUSH1 0x40 DUP1 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x7 DUP2 MSTORE PUSH32 0x4F6E676F696E6700000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE SWAP1 POP PUSH2 0x453 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x9 DUP2 MSTORE PUSH32 0x436F6E636C756465640000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE SWAP1 POP PUSH2 0x453 JUMP JUMPDEST PUSH1 0x6 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x867 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x3 SWAP1 SWAP2 MUL ADD DUP1 SLOAD PUSH1 0x1 DUP3 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP3 POP SWAP1 PUSH1 0x2 ADD DUP4 JUMP JUMPDEST PUSH1 0x1 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ PUSH2 0x8AD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1 DUP1 SLOAD PUSH1 0xA0 PUSH1 0x2 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP2 GT ISZERO PUSH2 0x8C7 JUMPI INVALID JUMPDEST EQ PUSH2 0x8D1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLVALUE DUP1 PUSH1 0x5 DUP4 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x8E3 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x3 MUL ADD PUSH1 0x1 ADD SLOAD GT ISZERO ISZERO ISZERO PUSH2 0x902 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x5 DUP1 SLOAD DUP5 SWAP1 DUP2 LT PUSH2 0x910 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 PUSH1 0x3 SWAP1 SWAP2 MUL ADD DUP1 SLOAD PUSH1 0x7 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR DUP2 SSTORE PUSH1 0x1 DUP1 DUP4 ADD SLOAD PUSH1 0x8 SSTORE PUSH1 0x2 DUP1 DUP5 ADD DUP1 SLOAD PUSH2 0x97A SWAP4 PUSH1 0x9 SWAP4 SWAP1 DUP3 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP2 AND DIV PUSH2 0xBEF JUMP JUMPDEST POP POP POP PUSH1 0xA DUP4 SWAP1 SSTORE PUSH1 0x7 SLOAD PUSH1 0x8 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 DUP1 ISZERO PUSH2 0x8FC MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO ISZERO PUSH2 0x9BB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH2 0x8FC ADDRESS PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND BALANCE SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO ISZERO PUSH2 0x9F8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP POP PUSH1 0x1 DUP1 SLOAD PUSH21 0xFF0000000000000000000000000000000000000000 NOT AND PUSH1 0xA0 PUSH1 0x2 EXP OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0x8 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 PUSH1 0x9 DUP4 JUMP JUMPDEST PUSH2 0xA40 PUSH2 0xBDD JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x5 DUP1 SLOAD SWAP1 POP DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0xAF6 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xACB JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xAF6 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xAD9 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 POP SWAP3 POP SWAP1 SWAP2 SWAP3 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 SWAP1 DUP2 MSTORE PUSH1 0x0 DUP1 DUP4 MSTORE PUSH1 0x20 DUP4 ADD MSTORE DUP2 ADD PUSH2 0xB29 PUSH2 0xBDD JUMP JUMPDEST SWAP1 MSTORE SWAP1 JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 ISZERO GT PUSH2 0xB5A JUMPI PUSH1 0x3 MUL DUP2 PUSH1 0x3 MUL DUP4 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP2 DUP3 ADD SWAP2 ADD PUSH2 0xB5A SWAP2 SWAP1 PUSH2 0xC64 JUMP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0xBA0 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xBCD JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xBCD JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xBCD JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xBB2 JUMP JUMPDEST POP PUSH2 0xBD9 SWAP3 SWAP2 POP PUSH2 0xCAC JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x0 DUP2 MSTORE SWAP1 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0xC28 JUMPI DUP1 SLOAD DUP6 SSTORE PUSH2 0xBCD JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xBCD JUMPI PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP2 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xBCD JUMPI DUP3 SLOAD DUP3 SSTORE SWAP2 PUSH1 0x1 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xC49 JUMP JUMPDEST PUSH2 0x453 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xBD9 JUMPI DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP2 SSTORE PUSH1 0x0 PUSH1 0x1 DUP3 ADD DUP2 SWAP1 SSTORE PUSH2 0xCA3 PUSH1 0x2 DUP4 ADD DUP3 PUSH2 0xCC6 JUMP JUMPDEST POP PUSH1 0x3 ADD PUSH2 0xC6A JUMP JUMPDEST PUSH2 0x453 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xBD9 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xCB2 JUMP JUMPDEST POP DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV PUSH1 0x0 DUP3 SSTORE DUP1 PUSH1 0x1F LT PUSH2 0xCEC JUMPI POP PUSH2 0xD0A JUMP JUMPDEST PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP1 PUSH2 0xD0A SWAP2 SWAP1 PUSH2 0xCAC JUMP JUMPDEST POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SWAP16 DUP14 BYTE 0x28 0x1c 0xbe DUP8 ADDRESS 0xc1 0x48 0x2a 0xe 0xb3 0xd9 PUSH20 0x1E73EC2AB43F629A329D3E163882576D460029A1 PUSH6 0x627A7A723058 KECCAK256 0xbc 0xa6 0xb8 PUSH23 0xC08F8F66C6FBA8479EEBAB55B74BC3514D23D89F071960 0xc8 0xe6 0xa5 0xc6 0x22 STOP 0x29 \",\"runtimeBytecode\":\"606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166327c15c5181146100525780638202082f146100a5578063bf60c7db1461010b57600080fd5b341561005d57600080fd5b6100a360046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061014a95505050505050565b005b34156100b057600080fd5b6100b8610251565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100f75780820151838201526020016100df565b505050509050019250505060405180910390f35b341561011657600080fd5b6101216004356102c7565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b600081336101566102fc565b73ffffffffffffffffffffffffffffffffffffffff8216602082015260408082528190810184818151815260200191508051906020019080838360005b838110156101ab578082015183820152602001610193565b50505050905090810190601f1680156101d85780820380516001836020036101000a031916815260200191505b509350505050604051809103906000f08015156101f457600080fd5b90506000805480600101828161020a919061030c565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b610259610335565b60008054806020026020016040519081016040528092919081815260200182805480156102bc57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610291575b505050505090505b90565b60008054829081106102d557fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b604051610e508061036683390190565b81548183558181151161033057600083815260209020610330918101908301610347565b505050565b60206040519081016040526000815290565b6102c491905b80821115610361576000815560010161034d565b5090560060606040526000600255341561001457600080fd5b604051610e50380380610e508339810160405280805182019190602001805160018054600160a060020a031916600160a060020a03831617905591506000905082805161006592916020019061006d565b505050610108565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ae57805160ff19168380011785556100db565b828001600101855582156100db579182015b828111156100db5782518255916020019190600101906100c0565b506100e79291506100eb565b5090565b61010591905b808211156100e757600081556001016100f1565b90565b610d39806101176000396000f300606060405236156100c25763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630a46572f81146100c757806310d2f82f146100ec57806317d531fc1461010157806328f6a48a146101145780632a4230e2146101275780632b50ef0e1461017d578063481c6a75146102225780637284e4161461025157806379a408e5146102db57806389c8bc63146102ee5780638fdee0c5146103a4578063dfbf53ae146103af578063f7bbc787146103c2575b600080fd5b34156100d257600080fd5b6100da610426565b60405190815260200160405180910390f35b34156100f757600080fd5b6100ff61042c565b005b341561010c57600080fd5b6100da610449565b341561011f57600080fd5b6100da61044f565b341561013257600080fd5b6100ff600480359060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061045695505050505050565b341561018857600080fd5b6101936004356105c1565b604051600160a060020a03841681526020810183905260606040820181815290820183818151815260200191508051906020019080838360005b838110156101e55780820151838201526020016101cd565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561022d57600080fd5b61023561070e565b604051600160a060020a03909116815260200160405180910390f35b341561025c57600080fd5b61026461071d565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102a0578082015183820152602001610288565b50505050905090810190601f1680156102cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102e657600080fd5b6102646107bb565b34156102f957600080fd5b610304600435610859565b604051600160a060020a038416815260208101839052606060408201818152835460026000196101006001841615020190911604918301829052906080830190849080156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b505094505050505060405180910390f35b6100ff600435610892565b34156103ba57600080fd5b610304610a21565b34156103cd57600080fd5b6103d5610a38565b604051600160a060020a0383166020820152604081018290526060808252819081018581815181526020019150805190602001908083836000838110156101e55780820151838201526020016101cd565b600a5481565b60015433600160a060020a0390811691161461044757600080fd5b565b60025481565b6005545b90565b61045e610b08565b60006001805460a060020a900460ff169081111561047857fe5b1461048257600080fd5b60015433600160a060020a039081169116141561049e57600080fd5b60606040519081016040908152600160a060020a033316825260208201859052810183905260028054600190810190915560068054929350919081016104e48382610b2e565b600092835260209092208391600302018151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010155604082015181600201908051610542929160200190610b5f565b505050506005805480600101828161055a9190610b2e565b600092835260209092208391600302018151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0391909116178155602082015181600101556040820151816002019080516105b8929160200190610b5f565b50505050505050565b6000806105cc610bdd565b600180805460a060020a900460ff16908111156105e557fe5b146105ef57600080fd5b60058054600019860190811061060157fe5b600091825260209091206003909102015460058054600160a060020a0390921691600019870190811061063057fe5b90600052602060002090600302016001015460056001870381548110151561065457fe5b9060005260206000209060030201600201808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106fa5780601f106106cf576101008083540402835291602001916106fa565b820191906000526020600020905b8154815290600101906020018083116106dd57829003601f168201915b505050505090509250925092509193909250565b600154600160a060020a031681565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107b35780601f10610788576101008083540402835291602001916107b3565b820191906000526020600020905b81548152906001019060200180831161079657829003601f168201915b505050505081565b6107c3610bdd565b60006001805460a060020a900460ff16908111156107dd57fe5b141561081e5760408051908101604052600781527f4f6e676f696e670000000000000000000000000000000000000000000000000060208201529050610453565b60408051908101604052600981527f436f6e636c75646564000000000000000000000000000000000000000000000060208201529050610453565b600680548290811061086757fe5b6000918252602090912060039091020180546001820154600160a060020a0390911692509060020183565b60015433600160a060020a039081169116146108ad57600080fd5b60006001805460a060020a900460ff16908111156108c757fe5b146108d157600080fd5b8034806005838154811015156108e357fe5b9060005260206000209060030201600101541115151561090257600080fd5b600580548490811061091057fe5b6000918252602090912060039091020180546007805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911781556001808301546008556002808401805461097a9360099390821615610100026000190190911604610bef565b505050600a839055600754600854600160a060020a039091169080156108fc0290604051600060405180830381858888f1935050505015156109bb57600080fd5b33600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156109f857600080fd5b50506001805474ff0000000000000000000000000000000000000000191660a060020a17905550565b600754600854600160a060020a0390911690600983565b610a40610bdd565b6000806000600160009054906101000a9004600160a060020a0316600580549050828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610af65780601f10610acb57610100808354040283529160200191610af6565b820191906000526020600020905b815481529060010190602001808311610ad957829003601f168201915b50505050509250925092509250909192565b60606040519081016040908152600080835260208301528101610b29610bdd565b905290565b815481835581811511610b5a57600302816003028360005260206000209182019101610b5a9190610c64565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ba057805160ff1916838001178555610bcd565b82800160010185558215610bcd579182015b82811115610bcd578251825591602001919060010190610bb2565b50610bd9929150610cac565b5090565b60206040519081016040526000815290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c285780548555610bcd565b82800160010185558215610bcd57600052602060002091601f016020900482015b82811115610bcd578254825591600101919060010190610c49565b61045391905b80821115610bd957805473ffffffffffffffffffffffffffffffffffffffff19168155600060018201819055610ca36002830182610cc6565b50600301610c6a565b61045391905b80821115610bd95760008155600101610cb2565b50805460018160011615610100020316600290046000825580601f10610cec5750610d0a565b601f016020900490600052602060002090810190610d0a9190610cac565b505600a165627a7a723058209f8d1a281cbe8730c1482a0eb3d9731e73ec2ab43f629a329d3e163882576d460029a165627a7a72305820bca6b876c08f8f66c6fba8479eebab55b74bc3514d23d89f071960c8e6a5c6220029\",\"srcmap\":\"26:546:0:-;;;;;;;;;;;;;;;;;\",\"srcmapRuntime\":\"26:546:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;234:163;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;234:163:0;;-1:-1:-1;234:163:0;;-1:-1:-1;;;;;;234:163:0;;;462:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;71:3;;;64:6;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;114:31:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;234:163;297:16;327:11;340:10;316:35;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;71:3;;;64:6;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;297:54:0;;358:15;:31;;;;;;;;;;;:::i;:::-;-1:-1:-1;358:31:0;;;;;;;;;;;-1:-1:-1;;358:31:0;;;;;;;;;;;;-1:-1:-1;234:163:0:o;462:107::-;512:8;;:::i;:::-;546:15;539:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;462:107;;:::o;114:31::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;114:31:0;:::o;26:546::-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;\"}");

/***/ }),

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_tenderFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/tenderFactory.json */ "./ethereum/build/tenderFactory.json");
var _build_tenderFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/tenderFactory.json */ "./ethereum/build/tenderFactory.json", 1);


const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_build_tenderFactory_json__WEBPACK_IMPORTED_MODULE_1__.interface), "0x1277cE20ca8629B3f4d17b89a1F2105727aDdBf3");
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* This file is used to create an instance of web3 attached to a provider
to be used in other deployment scripts
*/

let web3;

if (false) {} else {
  // We are in the server OR the user is not running MetaMask
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("https://ropsten.infura.io/v3/005ba097b4154b6cbdf76a3e4f9e7a6e");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
} // const getProvider = async () => {
//   await window.web3.currentProvider.enable(); // Request authentication for the web3provider
// };
// getProvider();
// /* window.web3.currentProvider assumes that MetaMask has
//   automatically injected web3 into the page
// */


/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;

  const cleanup = _react.default.useRef();

  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  delete query.__nextLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "@fluentui/react");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\dhira\\Desktop\\Tender-DApp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const TenderIndex = ({
  tenders
}) => {
  /*Creates a array containing all relevant attributes of tender cards
    to be displayed
  */
  const renderTenders = () => {
    if (tenders.length === 0) {
      return __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
        style: {
          paddingTop: '15px'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        variant: "xxLarge",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }, "No Tenders to Show"));
    }

    return tenders.map((address, ind) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/tenders/${address}`,
      key: ind,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      className: "tenderCard",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      variant: "xxLarge",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, address), __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: "tenderCardText",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, "Click to View Tender"))));
  };

  return (//Layout is a custom tag created in components/layout
    __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }
    }, __jsx("div", {
      style: {
        margin: '25px 0px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFileInvoice"], {
      size: "3.5rem",
      style: {
        margin: '0px 10px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }), __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      variant: "mega",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, "All Tenders")), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, renderTenders()))
  );
};

const getServerSideProps = async () => {
  const tenders = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_1__["default"].methods.getDeployedTenders().call();
  console.log(tenders);
  return {
    props: {
      tenders
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (TenderIndex);

/***/ }),

/***/ "@fluentui/react":
/*!**********************************!*\
  !*** external "@fluentui/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react");

/***/ }),

/***/ "@fluentui/react-theme-provider":
/*!*************************************************!*\
  !*** external "@fluentui/react-theme-provider" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react-theme-provider");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ldGhlcmV1bS93ZWIzLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmbHVlbnR1aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmbHVlbnR1aS9yZWFjdC10aGVtZS1wcm92aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwiYm9yZGVyQm90dG9tIiwia2V5IiwidGV4dCIsImhyZWYiLCJpY29uUHJvcHMiLCJpY29uTmFtZSIsIm9uQ2xpY2siLCJkYXJrVGhlbWUiLCJjcmVhdGVUaGVtZSIsInBhbGV0dGUiLCJ0aGVtZVByaW1hcnkiLCJ0aGVtZUxpZ2h0ZXJBbHQiLCJ0aGVtZUxpZ2h0ZXIiLCJ0aGVtZUxpZ2h0IiwidGhlbWVUZXJ0aWFyeSIsInRoZW1lU2Vjb25kYXJ5IiwidGhlbWVEYXJrQWx0IiwidGhlbWVEYXJrIiwidGhlbWVEYXJrZXIiLCJuZXV0cmFsTGlnaHRlckFsdCIsIm5ldXRyYWxMaWdodGVyIiwibmV1dHJhbExpZ2h0IiwibmV1dHJhbFF1YXRlcm5hcnlBbHQiLCJuZXV0cmFsUXVhdGVybmFyeSIsIm5ldXRyYWxUZXJ0aWFyeUFsdCIsIm5ldXRyYWxUZXJ0aWFyeSIsIm5ldXRyYWxTZWNvbmRhcnkiLCJuZXV0cmFsUHJpbWFyeUFsdCIsIm5ldXRyYWxQcmltYXJ5IiwibmV1dHJhbERhcmsiLCJibGFjayIsIndoaXRlIiwibGlnaHRUaGVtZSIsIkxheW91dCIsInByb3BzIiwiY3VyVGhlbWUiLCJ1c2VDb250ZXh0IiwiVGhlbWUiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiY2hpbGRyZW4iLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImluc3RhbmNlIiwid2ViMyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiVGVuZGVyRmFjdG9yeSIsImludGVyZmFjZSIsInByb3ZpZGVyIiwiV2ViMyIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsImNsZWFudXAiLCJzZXRSZWYiLCJlbCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiVGVuZGVySW5kZXgiLCJ0ZW5kZXJzIiwicmVuZGVyVGVuZGVycyIsImxlbmd0aCIsInBhZGRpbmdUb3AiLCJtYXAiLCJhZGRyZXNzIiwiaW5kIiwibWFyZ2luIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFRlbmRlcnMiLCJjYWxsIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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QUFFbVU7QUFBRjtBQUFULEdBQVA7QUFDRCxDQUpNO0FBTVFELDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDbERBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tbWFuZEJhciB9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdCc7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHRoZW1lLCBzZXRUaGVtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbW1hbmRCYXJcbiAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmV5JyB9fVxuICAgICAgaXRlbXM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2hvbWUnLFxuICAgICAgICAgIHRleHQ6ICdUZW5kZXIgMi4wJyxcbiAgICAgICAgICBocmVmOiAnLycsXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBmYXJJdGVtcz17W1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnbmV3VGVuZGVyJyxcbiAgICAgICAgICB0ZXh0OiAnQ3JlYXRlIGEgVGVuZGVyJyxcbiAgICAgICAgICBpY29uUHJvcHM6IHsgaWNvbk5hbWU6ICdBZGQnIH0sXG4gICAgICAgICAgaHJlZjogJy90ZW5kZXJzL25ldycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0aGVtZScsXG4gICAgICAgICAgaWNvblByb3BzOiB7IGljb25OYW1lOiB0aGVtZSAhPT0gJ2xpZ2h0JyA/ICdTdW5ueScgOiAnQ2xlYXJOaWdodCcgfSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IHNldFRoZW1lKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7IH1cbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IFN0YWNrLCBjcmVhdGVUaGVtZSwgbG9hZFRoZW1lIH0gZnJvbSAnQGZsdWVudHVpL3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAZmx1ZW50dWkvcmVhY3QtdGhlbWUtcHJvdmlkZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9jb250ZXh0JztcblxuY29uc3QgZGFya1RoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgdGhlbWVQcmltYXJ5OiAnIzAwNzhkNCcsXG4gICAgdGhlbWVMaWdodGVyQWx0OiAnI2VmZjZmYycsXG4gICAgdGhlbWVMaWdodGVyOiAnI2RlZWNmOScsXG4gICAgdGhlbWVMaWdodDogJyNjN2UwZjQnLFxuICAgIHRoZW1lVGVydGlhcnk6ICcjNzFhZmU1JyxcbiAgICB0aGVtZVNlY29uZGFyeTogJyMyYjg4ZDgnLFxuICAgIHRoZW1lRGFya0FsdDogJyMxMDZlYmUnLFxuICAgIHRoZW1lRGFyazogJyMwMDVhOWUnLFxuICAgIHRoZW1lRGFya2VyOiAnIzAwNDU3OCcsXG4gICAgbmV1dHJhbExpZ2h0ZXJBbHQ6ICcjMGIwYjBiJyxcbiAgICBuZXV0cmFsTGlnaHRlcjogJyMxNTE1MTUnLFxuICAgIG5ldXRyYWxMaWdodDogJyMyNTI1MjUnLFxuICAgIG5ldXRyYWxRdWF0ZXJuYXJ5QWx0OiAnIzJmMmYyZicsXG4gICAgbmV1dHJhbFF1YXRlcm5hcnk6ICcjMzczNzM3JyxcbiAgICBuZXV0cmFsVGVydGlhcnlBbHQ6ICcjNTk1OTU5JyxcbiAgICBuZXV0cmFsVGVydGlhcnk6ICcjYzhjOGM4JyxcbiAgICBuZXV0cmFsU2Vjb25kYXJ5OiAnI2QwZDBkMCcsXG4gICAgbmV1dHJhbFByaW1hcnlBbHQ6ICcjZGFkYWRhJyxcbiAgICBuZXV0cmFsUHJpbWFyeTogJyNmZmZmZmYnLFxuICAgIG5ldXRyYWxEYXJrOiAnI2Y0ZjRmNCcsXG4gICAgYmxhY2s6ICcjZjhmOGY4JyxcbiAgICB3aGl0ZTogJyMwMDAwMDAnLFxuICB9XG59KTtcblxuY29uc3QgbGlnaHRUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHRoZW1lUHJpbWFyeTogJyMwMDc4ZDQnLFxuICAgIHRoZW1lTGlnaHRlckFsdDogJyNlZmY2ZmMnLFxuICAgIHRoZW1lTGlnaHRlcjogJyNkZWVjZjknLFxuICAgIHRoZW1lTGlnaHQ6ICcjYzdlMGY0JyxcbiAgICB0aGVtZVRlcnRpYXJ5OiAnIzcxYWZlNScsXG4gICAgdGhlbWVTZWNvbmRhcnk6ICcjMmI4OGQ4JyxcbiAgICB0aGVtZURhcmtBbHQ6ICcjMTA2ZWJlJyxcbiAgICB0aGVtZURhcms6ICcjMDA1YTllJyxcbiAgICB0aGVtZURhcmtlcjogJyMwMDQ1NzgnLFxuICAgIG5ldXRyYWxMaWdodGVyQWx0OiAnI2Y4ZjhmOCcsXG4gICAgbmV1dHJhbExpZ2h0ZXI6ICcjZjRmNGY0JyxcbiAgICBuZXV0cmFsTGlnaHQ6ICcjZWFlYWVhJyxcbiAgICBuZXV0cmFsUXVhdGVybmFyeUFsdDogJyNkYWRhZGEnLFxuICAgIG5ldXRyYWxRdWF0ZXJuYXJ5OiAnI2QwZDBkMCcsXG4gICAgbmV1dHJhbFRlcnRpYXJ5QWx0OiAnI2M4YzhjOCcsXG4gICAgbmV1dHJhbFRlcnRpYXJ5OiAnIzU5NTk1OScsXG4gICAgbmV1dHJhbFNlY29uZGFyeTogJyMzNzM3MzcnLFxuICAgIG5ldXRyYWxQcmltYXJ5QWx0OiAnIzJmMmYyZicsXG4gICAgbmV1dHJhbFByaW1hcnk6ICcjMDAwMDAwJyxcbiAgICBuZXV0cmFsRGFyazogJyMxNTE1MTUnLFxuICAgIGJsYWNrOiAnIzBiMGIwYicsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgfVxufSk7XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyB0aGVtZTogY3VyVGhlbWUsIHNldFRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtjdXJUaGVtZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlRlbmRlciBEQXBwIDIuMDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlciB0aGVtZT17Y3VyVGhlbWV9IHNldFRoZW1lPXtzZXRUaGVtZX0gLz5cbiAgICAgICAgPFN0YWNrIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4IDglJywgbWluSGVpZ2h0OiAnMTAwdmgnIH19ICA+XG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDsiLCJpbXBvcnQgd2ViMyBmcm9tIFwiLi93ZWIzXCI7XHJcbmltcG9ydCBUZW5kZXJGYWN0b3J5IGZyb20gXCIuL2J1aWxkL3RlbmRlckZhY3RvcnkuanNvblwiO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgSlNPTi5wYXJzZShUZW5kZXJGYWN0b3J5LmludGVyZmFjZSksXHJcbiAgXCIweDEyNzdjRTIwY2E4NjI5QjNmNGQxN2I4OWExRjIxMDU3MjdhRGRCZjNcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsIi8qIFRoaXMgZmlsZSBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB3ZWIzIGF0dGFjaGVkIHRvIGEgcHJvdmlkZXJcclxudG8gYmUgdXNlZCBpbiBvdGhlciBkZXBsb3ltZW50IHNjcmlwdHNcclxuKi9cclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxubGV0IHdlYjM7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAvLyBXZSBhcmUgaW4gYW4gRXRoZXJldW0gc3VwcG9ydGVkIGJyb3dzZXIsIHNvIGEgcHJvdmlkZXIgaXMgYXZhaWxhYmxlXHJcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbn0gZWxzZSB7XHJcbiAgLy8gV2UgYXJlIGluIHRoZSBzZXJ2ZXIgT1IgdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgTWV0YU1hc2tcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXHJcbiAgICBcImh0dHBzOi8vcm9wc3Rlbi5pbmZ1cmEuaW8vdjMvMDA1YmEwOTdiNDE1NGI2Y2JkZjc2YTNlNGY5ZTdhNmVcIlxyXG4gICk7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxufVxyXG4vLyBjb25zdCBnZXRQcm92aWRlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICBhd2FpdCB3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIuZW5hYmxlKCk7IC8vIFJlcXVlc3QgYXV0aGVudGljYXRpb24gZm9yIHRoZSB3ZWIzcHJvdmlkZXJcclxuLy8gfTtcclxuXHJcbi8vIGdldFByb3ZpZGVyKCk7XHJcbi8vIC8qIHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlciBhc3N1bWVzIHRoYXQgTWV0YU1hc2sgaGFzXHJcbi8vICAgYXV0b21hdGljYWxseSBpbmplY3RlZCB3ZWIzIGludG8gdGhlIHBhZ2VcclxuLy8gKi9cclxuZXhwb3J0IGRlZmF1bHQgd2ViMztcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IGNsZWFudXAgPSBSZWFjdC51c2VSZWY8KCkgPT4gdm9pZD4oKVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYW51cC5jdXJyZW50KClcbiAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGVsICYmIGVsLnRhZ05hbWUgJiYgaXNMb2NhbFVSTChocmVmKSkge1xuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IGxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3AsIGNoaWxkUmVmLCBocmVmLCBhcywgcm91dGVyLCBsb2NhbGVdXG4gIClcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IG9wdGlvbnMubG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgeyBTdGFjaywgVGV4dCB9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBGYUZpbGVJbnZvaWNlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBUZW5kZXJJbmRleCA9ICh7IHRlbmRlcnMgfSkgPT4ge1xuICAvKkNyZWF0ZXMgYSBhcnJheSBjb250YWluaW5nIGFsbCByZWxldmFudCBhdHRyaWJ1dGVzIG9mIHRlbmRlciBjYXJkc1xuICAgIHRvIGJlIGRpc3BsYXllZFxuICAqL1xuICBjb25zdCByZW5kZXJUZW5kZXJzID0gKCkgPT4ge1xuICAgIGlmICh0ZW5kZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcxNXB4JyB9fT5cbiAgICAgICAgICA8VGV4dCB2YXJpYW50PVwieHhMYXJnZVwiPk5vIFRlbmRlcnMgdG8gU2hvdzwvVGV4dD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0ZW5kZXJzLm1hcCgoYWRkcmVzcywgaW5kKSA9PiAoXG4gICAgICA8TGluayBocmVmPXtgL3RlbmRlcnMvJHthZGRyZXNzfWB9IGtleT17aW5kfT5cbiAgICAgICAgPFN0YWNrIGNsYXNzTmFtZT1cInRlbmRlckNhcmRcIj5cbiAgICAgICAgICA8VGV4dCB2YXJpYW50PVwieHhMYXJnZVwiPnthZGRyZXNzfTwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZW5kZXJDYXJkVGV4dFwiPkNsaWNrIHRvIFZpZXcgVGVuZGVyPC9UZXh0PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9MaW5rPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgLy9MYXlvdXQgaXMgYSBjdXN0b20gdGFnIGNyZWF0ZWQgaW4gY29tcG9uZW50cy9sYXlvdXRcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyNXB4IDBweCcgfX0gPlxuICAgICAgICA8RmFGaWxlSW52b2ljZSBzaXplPVwiMy41cmVtXCIgc3R5bGU9e3sgbWFyZ2luOiAnMHB4IDEwcHgnIH19IC8+XG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJtZWdhXCI+QWxsIFRlbmRlcnM8L1RleHQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAge3JlbmRlclRlbmRlcnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGVuZGVycyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZFRlbmRlcnMoKS5jYWxsKCk7XG4gIGNvbnNvbGUubG9nKHRlbmRlcnMpO1xuICByZXR1cm4geyBwcm9wczogeyB0ZW5kZXJzIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlbmRlckluZGV4O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZsdWVudHVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmbHVlbnR1aS9yZWFjdC10aGVtZS1wcm92aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9
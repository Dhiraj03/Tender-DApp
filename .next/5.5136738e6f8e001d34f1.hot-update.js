webpackHotUpdate(5,{

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(1234)();
//Used to declare the routing table of the application
routes.add("/tenders/new", "/tenders/new").add("/tenders/:address", "tenders/show").add("/tenders/:address/bid", "/tenders/bidForm").add("/tenders/:address/viewbids/:index", "/tenders/viewbids").add("/tenders/:address/finalize", "/tenders/finalize").add("/tenders/:address/finalBid", "/tenders/final").add("/tenders/:address/final/:index", "/tenders/viewbidsfinal");
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBO0FBQ0EsT0FDRyxBQURILElBQ08sQUFEUCxnQkFDdUIsQUFEdkIsZ0JBRUcsQUFGSCxJQUVPLEFBRlAscUJBRTRCLEFBRjVCLGdCQUdHLEFBSEgsSUFHTyxBQUhQLHlCQUdnQyxBQUhoQyxvQkFJRyxBQUpILElBSU8sQUFKUCxxQ0FJNEMsQUFKNUMscUJBS0csQUFMSCxJQUtPLEFBTFAsOEJBS3FDLEFBTHJDLHFCQU1HLEFBTkgsSUFNTyxBQU5QLDhCQU1xQyxBQU5yQyxrQkFPRyxBQVBILElBT08sQUFQUCxrQ0FPd0MsQUFQeEM7QUFRQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RoaXJhL0Rlc2t0b3AvVGVuZGVyLURBcHAifQ==

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\dhira\\Desktop\\Tender-DApp\\routes.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\dhira\\Desktop\\Tender-DApp\\routes.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41MTM2NzM4ZTZmOGUwMDFkMzRmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzP2Y5NmMwYWYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpKCk7XHJcbi8vVXNlZCB0byBkZWNsYXJlIHRoZSByb3V0aW5nIHRhYmxlIG9mIHRoZSBhcHBsaWNhdGlvblxyXG5yb3V0ZXNcclxuICAuYWRkKFwiL3RlbmRlcnMvbmV3XCIsIFwiL3RlbmRlcnMvbmV3XCIpXHJcbiAgLmFkZChcIi90ZW5kZXJzLzphZGRyZXNzXCIsIFwidGVuZGVycy9zaG93XCIpXHJcbiAgLmFkZChcIi90ZW5kZXJzLzphZGRyZXNzL2JpZFwiLCBcIi90ZW5kZXJzL2JpZEZvcm1cIilcclxuICAuYWRkKFwiL3RlbmRlcnMvOmFkZHJlc3Mvdmlld2JpZHMvOmluZGV4XCIsIFwiL3RlbmRlcnMvdmlld2JpZHNcIilcclxuICAuYWRkKFwiL3RlbmRlcnMvOmFkZHJlc3MvZmluYWxpemVcIiwgXCIvdGVuZGVycy9maW5hbGl6ZVwiKVxyXG4gIC5hZGQoXCIvdGVuZGVycy86YWRkcmVzcy9maW5hbEJpZFwiLCBcIi90ZW5kZXJzL2ZpbmFsXCIpXHJcbiAgLmFkZChcIi90ZW5kZXJzLzphZGRyZXNzL2ZpbmFsLzppbmRleFwiLFwiL3RlbmRlcnMvdmlld2JpZHNmaW5hbFwiKTtcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JvdXRlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
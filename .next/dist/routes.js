"use strict";

var routes = require("next-routes")();
//Used to declare the routing table of the application
routes.add("/tenders/new", "/tenders/new").add("/tenders/:address", "tenders/show").add("/tenders/:address/bid", "/tenders/bidForm").add("/tenders/:address/viewbids/:index", "/tenders/viewbids").add("/tenders/:address/finalize", "/tenders/finalize").add("/tenders/:address/finalBid", "/tenders/final").add("/tenders/:address/final/:index", "/tenders/viewbidsfinal");
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBO0FBQ0EsT0FDRyxBQURILElBQ08sQUFEUCxnQkFDdUIsQUFEdkIsZ0JBRUcsQUFGSCxJQUVPLEFBRlAscUJBRTRCLEFBRjVCLGdCQUdHLEFBSEgsSUFHTyxBQUhQLHlCQUdnQyxBQUhoQyxvQkFJRyxBQUpILElBSU8sQUFKUCxxQ0FJNEMsQUFKNUMscUJBS0csQUFMSCxJQUtPLEFBTFAsOEJBS3FDLEFBTHJDLHFCQU1HLEFBTkgsSUFNTyxBQU5QLDhCQU1xQyxBQU5yQyxrQkFPRyxBQVBILElBT08sQUFQUCxrQ0FPd0MsQUFQeEM7QUFRQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RoaXJhL0Rlc2t0b3AvVGVuZGVyLURBcHAifQ==
import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0x5E87a86DEF4768e04996FB1019381f4bdb6Cf8F5"
);

export default instance;

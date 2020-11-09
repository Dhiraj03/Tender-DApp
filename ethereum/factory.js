import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0x72E0F25f3eFBcC07ab8881BE2e8667b7E25b1aC5"
);

export default instance;

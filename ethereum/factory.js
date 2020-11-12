import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0x2F57a1BCB5626e0a5899B68485E21c469Be42640"
);

export default instance;

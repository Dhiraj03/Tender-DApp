import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0xFeCFD882482c7F45cF05951e395e6045bb8eCB7D"
);

export default instance;

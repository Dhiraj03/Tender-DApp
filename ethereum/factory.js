import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "<ADDRESS_OF_DEPLOYED_TENDER_FACTORY>"
);

export default instance;

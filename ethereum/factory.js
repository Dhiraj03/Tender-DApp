import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0xAB0eD79Fcab77ce2DE7fE89Bd8F9503c4C12c491"
);

export default instance;

import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0xd2A4aC03e7ccf7C24b8996d6feB3511afC53125B"
);

export default instance;

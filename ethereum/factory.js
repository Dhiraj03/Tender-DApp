import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0x1277cE20ca8629B3f4d17b89a1F2105727aDdBf3"
);

export default instance;

import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0x5a9A8d8AE744A5dEe7ad6b4594Af08F200783f39"
);

export default instance;

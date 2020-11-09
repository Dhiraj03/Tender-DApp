import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0x4395c3dda39098a0c7e8dfbe2404ee9ca45850de"
);

export default instance;

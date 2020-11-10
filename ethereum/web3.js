/* This file is used to create an instance of web3 attached to a provider
to be used in other deployment scripts
*/
import Web3 from "web3";
let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in an Ethereum supported browser, so a provider is available
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are in the server OR the user is not running MetaMask
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/005ba097b4154b6cbdf76a3e4f9e7a6e"
  );
  web3 = new Web3(provider);
}
// const getProvider = async () => {
//   await window.web3.currentProvider.enable(); // Request authentication for the web3provider
// };

// getProvider();
// /* window.web3.currentProvider assumes that MetaMask has
//   automatically injected web3 into the page
// */
export default web3;


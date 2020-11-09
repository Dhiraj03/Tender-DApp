import Web3 from "web3";
let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are in the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/f6d453a1bc224de8bbcfb9711387b884"
  );
  web3 = new Web3(provider);
}
const getProvider = async () => {
  await window.web3.currentProvider.enable(); // request authentication
};

getProvider();
/* window.web3.currentProvider assumes that MetaMask has
  automatically injected web3 into the page
*/
export default web3;


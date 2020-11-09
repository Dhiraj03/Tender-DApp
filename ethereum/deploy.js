const HDWalletProvider = require("truffle-hdwallet-provider");
/*
HD (Hierarchial Deterministic Wallet is a new-age digital wallet that automatically generates
a hierarchial tree-like structure of private and public addresses/keys 
and addresses the problem of manually generating them.
*/
const Web3 = require("web3");

//compiledFactory will contain the JSON interface of the compiled Tender Factory contract
const compiledFactory = require("./build/tenderFactory.json");

//A web3 provider is the missing block that indicates which node the web3 instance should interact with
const provider = new HDWalletProvider(
  "salad issue fish reopen gold test globe problem elbow hour claw phone",
  "https://rinkeby.infura.io/v3/f6d453a1bc224de8bbcfb9711387b884"
);

const web3 = new Web3(provider);

/*
getAccounts() will get the accounts that the connected node has access to
A new contract is instantiated using the JSON interface specified and is deployed
using the first address in the list of addresses.
*/
const deploy = async () => {
  const accounts = await web3.eth.getAccounts(); 
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: 4000000, from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};

deploy();
## What is Tender 2.0?
Tender 2.0 is a fair and transparent Blockchain-based tendering framework that aims to address various challenges being faced by the tendering system in-place currently.

## What are Tenders?
Tenders, also known as Public Procurement, is a core government function that allows various governmental organizations to provide essential products and services to citizens by outsourcing the said production/service to an external organization. The challenges faced by the current system in-place are:
1. The lack of trust and transparency among the stakeholders
2. Corruption and bias towards certain parties
3. Collusiom between the bidders

## Steps to run
1. Install the MetaMask wallet extension on your browser (available for Firefox and Google Chrome) and create an account. Note down the 12-word seed phrase
and enter it in the ethereum/deploy.js file.

2. Create two accounts on the Ropsten network and get some ETH (not real ETH, since its a testnet) using  Ropsten ETH faucets (get atleast 2 accounts with ETH) - (https://faucet.ropsten.be/) and (https://faucet.dimensions.network/). 

3. Register an account on [Infura](https://infura.io/) and create a new project - get the Ropsten URL from the 'Settings' Page and copy it into the instantiation of Web3
in ethereum/web3.js and ethereum/deploy.js.

4. Run the compilation script in order to compile the smart contracts and output (node compile.js)
the JSON interface into the build directory (two files - tender and tenderFactory will be created)

5. Run the deployment script in order to deploy the smart contract to the Ethereum blockchain (node deploy.js)

6. After deploying the tenderFactory contract, update the contract address in the ethereum/factory.js (the new value is displayed on the terminal when deplyment script is run)

7. Run the server using 'npm start' command and go to http://localhost:3000 to use the application



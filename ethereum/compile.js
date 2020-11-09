//Used to compile the smart contracts - Tender and TenderFactory
const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

//Resolves the name of the build directory in order to store the JSON interfaces
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

//Gets the path of the Solidity file, reads the contents and compiles it using solc
const tenderPath = path.resolve(__dirname, "Contracts", "tender.sol");
const source = fs.readFileSync(tenderPath, "utf8");
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

//For every contract that was compiled, a separate file is created to store the JSON interface
for(let contract in output) {
    let name = contract.replace(":", "");
    fs.outputJsonSync(
    path.resolve(buildPath, name + '.json'),
    output[contract]
);
    }
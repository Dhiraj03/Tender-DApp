pragma solidity ^0.4.17;
contract tenderFactory {
    //Contains the list of addresses of deployed tenders
    Tender[] public deployedTenders;

    //Function to create/float a new tender - Input Description of the tender 
    function createTender(string memory description) public {
    Tender newTender = new Tender(description, msg.sender);
    deployedTenders.push(newTender);
    }

    //Returns the list of addresses of deployed tenders
    function getDeployedTenders() public view returns(Tender[] memory){
        return deployedTenders;
    }
}

contract Tender{

    //Contains the description of the Tender
    string public description;
    //The administrator/manager of the tender
    address public manager;
    
    //A custom data structure - Bid, containing the details of a bid - the address of the bidder
    //the bid amount and the bidder's proposal
    struct Bid {
        address  bidder;
        uint256 bidAmount;
        string bid;
    }
    //An enumerator indicating the state of the tender - whether it is ongoing or concluded
    enum State {ONGOING, CONCLUDED}
    State tenderState;
    //The number of bids that have been successfully submitted for the tende
    uint public numberOfBids = 0;
    uint[] private bidAmounts;
    uint[] private bidDetails;
    //The private bids - which also contain the addresses of the bidders
    Bid[] private bids;
    //The public bids - which can be seen by the administrator/manager during the bidding process
    Bid[] public publicBids;
    //The winning bid
    Bid public winner;
    uint public winIndex;
    
    //Modifier to check whether the sender is the Manager
    modifier restricted()
    {
        require(msg.sender==manager
        );
        _;
    }

    //Modifier to check whether the sender is not the Manager
    modifier notManager()
    {
        require(msg.sender!=manager
        );
        _;
    }

    //Modifier to check whether the tender has concluded
    modifier checkConcluded()
    {
        require(tenderState == State.CONCLUDED
        );
        _;
    }

    //Modifier to check whether the tender is ongoing
    modifier checkOngoing()
    {
        require(tenderState == State.ONGOING
        );
        _;
    }

    //Modifier to check whether the manager has paid enough to pay the winning bid
    modifier checkAmount(uint index, uint amount)
    {
        require(bids[index].bidAmount <= amount);
        _;
    }

    //The constructor of the Tender contract - the address of the manager and the description of the tender
    function Tender(string memory inputDescription, address creator) public
    {
        manager = creator;
        description = inputDescription;
    }

    //Function to make/submit a bid - takes the sender's address, proposal and bidAmount
    function makeBid(uint bidAmount, string memory desc) public checkOngoing notManager
    {  
        Bid memory newBid = Bid({
            bidder : msg.sender,
            bidAmount : bidAmount,
            bid : desc
        });
        numberOfBids++;
        publicBids.push(newBid);
        bids.push(newBid);
    }

    //Function to show the private bids - ONLY after the tender has concluded - for transparency purposes
    function showBid(uint index) public view checkConcluded returns(address , uint , string ){
        return (
        bids[index-1].bidder,
        bids[index-1].bidAmount,
        bids[index-1].bid
        );
    }

    //Function to award the tender to a particular bid
    function awardTender(uint index) public payable restricted checkOngoing checkAmount(index, msg.value){
        winner = bids[index];
        winIndex = index;
        winner.bidder.transfer(winner.bidAmount);
        msg.sender.transfer(this.balance);
        tenderState = State.CONCLUDED;   
    }

    //Function to get the details - description, manager and number of bids of each tender
    function getTenderDetails() public view returns (string memory tenderDescription, address managerAddress, uint bidsLength) {
        return ( description,
        manager, 
        bids.length
        );
    }

    //Get the number of bids made
    function getBidCount() public view returns (uint) {
        return bids.length;
    }

    //Return the state of the tender - Ongoing or Concluded
    function getTenderState() public view returns (string)
    {
        if(tenderState == State.ONGOING)
         return "Ongoing";
        else 
         return "Concluded";
    }

    //Function to verify that access is limited to the manager
    function verifyManager() public view
    {
        require(msg.sender == manager);
    }

}
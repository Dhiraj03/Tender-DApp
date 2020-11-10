pragma solidity ^0.4.17;
contract tenderFactory {
    Tender[] public deployedTenders;

    function createTender(string memory description) public {
    Tender newTender = new Tender(description, msg.sender);
    deployedTenders.push(newTender);
    }

    function getDeployedTenders() public view returns(Tender[] memory){
        return deployedTenders;
    }
}

contract Tender{

    string public description;
    address public manager;
    
    struct Bid {
        address  bidder;
        uint bidAmount;
        string bid;
    }
    enum State {ONGOING, CONCLUDED}
    State tenderState;
        
    Bid[] private bids;
    Bid public winner;
    uint public winIndex;
    
    modifier restricted()
    {
        require(msg.sender==manager
        );
        _;
    }

    modifier notManager()
    {
        require(msg.sender!=manager
        );
        _;
    }

    modifier checkConcluded()
    {
        require(tenderState == State.CONCLUDED
        );
        _;
    }

    modifier checkOngoing()
    {
        require(tenderState == State.ONGOING
        );
        _;
    }


    function Tender(string memory inputDescription, address creator) public
    {
        manager = creator;
        description = inputDescription;
    }

    function makeBid(uint bidAmount, string memory desc) public checkOngoing notManager
    {  
        Bid memory newBid = Bid({
            bidder : msg.sender,
            bidAmount : bidAmount,
            bid : desc
        });
        bids.push(newBid);
    }

    
    function showBid(uint index) public view checkConcluded returns(address bidder, uint bidAmount, string memory bid){
        return (
        bids[index-1].bidder,
        bids[index-1].bidAmount,
        bids[index-1].bid
        );
    }

    function getBidSummary(uint index) public view checkOngoing restricted
    returns (uint bidAmount, string memory bid) {
        return (
            bids[index-1].bidAmount,
            bids[index-1].bid
        );
    }

    
    function awardTender(uint index) public  restricted checkOngoing {
        winner = bids[index];
        winIndex = index;
        winner.bidder.transfer(winner.bidAmount);
        tenderState = State.CONCLUDED;   
    }


    function getTenderDetails() public view returns (string memory tenderDescription, address managerAddress, uint bidsLength) {
        return ( description,
        manager, 
        bids.length
        );
    }

    function getBidCount() public view returns (uint) {
        return bids.length;
    }

}

pragma solidity^0.4.17;

contract tenderFactory {
    address[] public deployedTenders;

    function createTender(string description) public {
      address newTender = new Tender(description, msg.sender);
      deployedTenders.push(newTender);
    }

    function getDeployedTenders() public view returns(address[]){
        return deployedTenders;
    }
}

contract Tender{
    bool public complete;
    string public data;
    address public manager;
    struct Bid {
        address  bidder;
        uint bidAmount;
        string bid;
    }
    struct hiddenBid {
        uint ID;
        uint bidAmount;
        string bid;
    }
    Bid[] private bids;
    hiddenBid[] public hiddenBids;
    Bid public winner;
    uint public winIndex;
    
    modifier restricted()
    {
        require(msg.sender==manager);
        _;
    }

    function Tender(string description, address creator) public
    {
        manager = creator;
        data = description;
    }


    function getBidSummary(uint index) public returns (address, uint, string) {
        return (
            bids[index].bidder,
            bids[index].bidAmount,
            bids[index].bid
        );
    }

    

    function makeBid(uint bidAmount, string desc) public
    {  require(!(msg.sender==manager));
       require(!complete);
        Bid memory newBid = Bid({
            bidder : msg.sender,
            bidAmount : bidAmount,
            bid : desc
        });
        bids.push(newBid);
        hiddenBid memory newhiddenBid = hiddenBid({
            ID : bids.length,
            bidAmount : bidAmount,
            bid : desc
        });
        hiddenBids.push(newhiddenBid);
    }

    function finalizeBid(uint index) public payable  {
        require(!complete);
        require(msg.sender==manager);
        winner = bids[index];
        winIndex = index;
        winner.bidder.transfer(winner.bidAmount);
        msg.sender.transfer(this.balance);
        complete = true;   
    }



    function getSummary() public view returns (string, address, uint) {
        return ( data,
        manager, 
        bids.length
        );
    }

   

    function getBidCount() public view returns (uint) {
        return bids.length;
    }

    function verify() public  {
      require(msg.sender==manager);
    }


}




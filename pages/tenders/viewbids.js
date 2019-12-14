import React, { Component } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";


class BidDisplay extends Component {
static async getInitialProps(props)
{
const tender = Tender(props.query.address);
const index = props.query.index;
const bid = await tender.methods.hiddenBids(index).call();
return {
    index : bid.ID,
    bidAmount : bid.bidAmount,
    description : bid.bid
};

}

 renderCards() {
     const {
         index,
         bidAmount,
         description
     } = this.props;
    const items = [
      {
        header: index,
        meta: "ID of the Bid",
        description:
          "The unique identification number of the given bid.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: bidAmount,
        meta: "Bid Amount",
        description: "The price of the bid made by the bidder."
      },
      {
        header: description,
        meta: "Description",
        description:
          "Proposal of the bidder."
      }
    ];
    return <Card.Group items={items} />;
  }

  
    render(){
    return (
        <Layout>
        <h3>Bid Show</h3>
        <Grid>
            <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                <Link route={`/tenders/${this.props.address}`}>
                <a>
                    <Button primary>Details of the tender.</Button>
                </a>
                </Link>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Layout>);
}
}

export default BidDisplay;



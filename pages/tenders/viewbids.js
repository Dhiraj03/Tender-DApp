import React, { Component } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

const BidDisplay = ({address, bids}) => {
  const renderCards = () => {
    const items = bids.map((bid) => {
      return {
        header: 'Bid Amount:   ' + bid.bidAmount,
        description: 'Bid Proposal:   ' + bid.bid,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  };
  return (
    <Layout>
      <h3>Bid Details</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
          <Grid.Column width={6}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export const getServerSideProps = async (props)  => {
  const tender = Tender(props.query.address);
  console.log(props.query.count);
  const bid0 = await tender.methods.publicBids(0).call();
  const bids = []
  var i;
  for (i = 0; i < props.query.count; i++)
  {
    const bid = await tender.methods.publicBids(i).call();
    bids.push({
      bid: bid.bid,
      bidAmount: bid.bidAmount
    });
  }
  return {
    props: {
      adddress: props.query.address,
      bids: bids
    }
  };

};

export default BidDisplay;

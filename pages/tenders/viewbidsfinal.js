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
          description: 'Bid Address:   ' + bid.bidAddress,
          fluid: true,
        };
      });
      return <Card.Group items={items} />;
    };


  return (
    <Layout>
      <h3>Bid Show</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
          <Grid.Column width={6}></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link route={`/tenders/${address}/`}>
              <a>
                <Button primary>Details of the tender.</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export const getServerSideProps = async (props) => {
  const tender = Tender(props.query.address);
  console.log(props.query.count);
  const bids = []
  var i;
  for (i = 1; i <= props.query.count; i++)
  {
    const bid = await tender.methods.showBid(i).call();
    bids.push({
      bid: bid[2],
      bidAmount: bid[1],
      bidAddress: bid[0]
    });
    console.log(bid);
  }
  return {
    props: {
      adddress: props.query.address,
      bids: bids
    }
  };
};

export default BidDisplay;

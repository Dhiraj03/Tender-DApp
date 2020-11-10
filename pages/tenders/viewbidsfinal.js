import React, { Component } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

const BidDisplay = ({ bidAddress, bidAmount, description, address }) => {

  const renderCards = () => {
    const items = [
      {
        header: bidAddress,
        meta: "Address of the bidder.",
        description: "The unique address of the bidder.",
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
        description: "Proposal of the bidder."
      }
    ];
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

export const getInitialProps = (props) => {
  const tender = Tender(props.query.address);
  const index = props.query.index;
  const bid = await tender.methods.getBidSummary(index).call();
  return {
    bidAddress: bid[0],
    bidAmount: bid[1],
    description: bid[2]
  };
};

export default BidDisplay;

import React, { Component } from "react";
import Layout from "../../../../../components/Layout";
import Tender from "../../../../../ethereum/tender.js";
import { Stack, Text, PrimaryButton, TextField } from '@fluentui/react';
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BidDisplay = ({ address, bids }) => {
  console.log(address);
  return (
    <Layout>

      <Text block variant="xxLargePlus" style={{ marginTop: '25px' }}>All bids</Text>
      <Link href={`/tenders/${address}`}>
        <Text block style={{ fontWeight: 'bold', marginTop: '15px', cursor: 'pointer', marginBottom: '15px' }}>
          <FaArrowLeft style={{ marginRight: '5px' }} /> <span style={{ fontSize: '1.25rem' }}>Go Back</span>
        </Text>
      </Link>

      {bids.map((bid, ind) => (
        <Stack className="bidCard" key={ind}>
          <Text variant="xLarge">Bidder Address: {bid.bidAddress}</Text>
          <Text variant="xLarge">Bid Amount: {bid.bidAmount}</Text>
          <Text block variant="large" style={{ marginTop: '10px' }} >Bid Proposal:</Text>
          <Text block variant="mediumPlus">{bid.bid}</Text>
        </Stack>
      ))}
    </Layout>
  );
};

export const getServerSideProps = async (props) => {
  const tender = Tender(props.query.address);
  const count = Number(props.query.index);
  const bids = [];
  var i;
  for (i = 1; i <= count; i++) {
    console.log("test");
    const bid = await tender.methods.showBid(i).call();
    console.log(bid);
    bids.push({
      bid: bid[2],
      bidAmount: bid[1],
      bidAddress: bid[0]
    });
    
  }
  return {
    props: {
      address: props.query.address,
      bids: bids
    }
  };
};

export default BidDisplay;

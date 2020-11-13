import React, { Component } from "react";
import Layout from "../../../../../components/Layout";
import Tender from "../../../../../ethereum/tender.js";
import { Stack, Text, PrimaryButton, TextField } from '@fluentui/react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { FaArrowLeft } from "react-icons/fa";

const BidDisplay = ({ address, bids }) => {
  console.log(address);
  return (
    <Layout>

      <Text block variant="xxLargePlus" style={{ marginTop: '25px' }}>All bids</Text>
      <Link href={`/tenders/${address}`}>
        <Text block style={{ fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>
          <FaArrowLeft style={{ marginRight: '5px' }} /> <span style={{ fontSize: '1.25rem' }}>Go Back</span>
        </Text>
      </Link>

      {bids.map((bid, ind) => (
        <Stack className="bidCard" key={ind}>
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
  console.log(props.query.count);
  const bid0 = await tender.methods.publicBids(0).call();
  let bids = [];
  var i;
  for (i = 0; i < props.query.count; i++) {
    const bid = await tender.methods.publicBids(i).call();
    bids.push({
      bid: bid.bid,
      bidAmount: bid.bidAmount
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

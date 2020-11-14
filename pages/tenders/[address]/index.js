import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Tender from "../../../ethereum/tender";
import web3 from "../../../ethereum/web3";
import Link from "next/link";
import { Stack, Text, PrimaryButton, getTheme } from '@fluentui/react';
import { IoIosPaper } from "react-icons/io";
import { FaUserAlt, FaInfoCircle, FaUsers } from "react-icons/fa";
import { useRouter } from "next/router";

const TenderShow = ({
  isComplete,
  address,
  manager,
  description,
  count,
  winnerAddress,
  winnerBidAmount,
  winnerBid,
}) => {
  const router = useRouter();
  
  const [state, setState] = useState({
    value: "",
    errorMessage: "",
    loading: false,
    index: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const tender = Tender(address);
    setState({ ...state, loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      await tender.methods.verifyManager().send({
        from: accounts[0],
      });
      router.push(`/tenders/${address}/viewbids/${count}`);
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false, value: "" });
  };

  const onClick = async (event) => {
    event.preventDefault();
    router.replaceRoute(`/tenders/${address}/finalBid`);
  };

  return (
    <Layout>
      <div style={{ marginTop: "25px", marginBottom: "40px" }}>
        <IoIosPaper size="3rem" style={{ marginRight: "10px" }} />
        <Text style={{ fontSize: "4rem", fontWeight: 500 }}>Tender Dashboard</Text>

        <Text
          block
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            marginTop: "20px",
            color: winnerAddress ? "#00ad56" : "#7a7574",
          }}
        >
          {winnerAddress
            ? "This tender has been finalized!"
            : "This is an ongoing tender!"}
        </Text>
      </div>

      {winnerAddress && (
        <>
          <Text variant="xxLarge">Bid Winner</Text>
          <Stack
            className="winnerCard"
            style={{ marginTop: "10px", marginBottom: "40px" }}
          >
            <Text variant="large">
              Bid Winner:{" "}
              <span style={{ fontWeight: 500 }}>{winnerAddress}</span>
            </Text>
            <Text variant="large" style={{ padding: "5px 0px" }}>
              Bid Amount:{" "}
              <span style={{ fontWeight: 500 }}>{winnerBidAmount} ETH</span>
            </Text>
            <Text variant="large" block>
              Bidder Proposal:
            </Text>
            <Text variant="large" style={{ fontWeight: 500 }}>
              {winnerBid}
            </Text>
          </Stack>
        </>
      )}

      <Stack>
        <div>
          <FaUserAlt size="1.25rem" style={{ marginRight: "10px" }} />
          <Text variant="large" style={{ fontSize: "2rem" }}>
            Address of Manager
          </Text>
        </div>
        <Text variant="mediumPlus" style={{ color: "grey" }} block>
          The manager floated this tender and decides who to award the tender
          to.
        </Text>
        <Text
          variant="xxLarge"
          block
          style={{ paddingTop: "10px", paddingBottom: "5px" }}
        >
          {manager}
        </Text>
      </Stack>
      <Stack style={{ marginTop: "50px" }}>
        <div>
          <FaInfoCircle size="1.25rem" style={{ marginRight: "10px" }} />
          <Text variant="large" style={{ fontSize: "2rem" }}>
            Project description
          </Text>
        </div>
        <Text variant="mediumPlus" style={{ color: "grey" }} block>
          A brief description and summary of requirements.
        </Text>
        <Text
          variant="xLarge"
          block
          style={{ paddingTop: "5px", paddingBottom: "5px" }}
        >
          {description}
        </Text>
      </Stack>
      <Stack style={{ marginTop: "50px" }}>
        <div>
          <FaUsers size="1.5rem" style={{ marginRight: "10px" }} />
          <Text variant="large" style={{ fontSize: "2rem" }}>
            Number of Bidders
          </Text>
        </div>
        <Text variant="mediumPlus" style={{ color: "grey" }} block>
          Number of vendors/suppliers who have already placed their bids.
        </Text>
        <Text
          variant="xLarge"
          block
          style={{ paddingTop: "5px", paddingBottom: "5px" }}
        >
          {count} bidders
        </Text>
      </Stack>

      <Text variant="large" block style={{ marginTop: "25px" }}>
        Controls
      </Text>
      <Stack style={{ flexDirection: "row", margin: "10px 0px" }}>
        <div style={{ margin: "0px 15px 0px 0px" }}>
          <PrimaryButton
            onClick={onSubmit}
            disabled={isComplete || count == 0 || state.loading}
            
          >
            {state.loading ? "Loading..." : "View All Bids!"}
          </PrimaryButton>
        </div>
        <div style={{ margin: "0px 15px" }}>
          <Link href={`/tenders/${address}/bid`}>
            <PrimaryButton disabled={isComplete}>Make a Bid!</PrimaryButton>
          </Link>
        </div>
        <div style={{ margin: "0px 15px" }}>
          <Link href={`/tenders/${address}/finalize`}>
            <PrimaryButton disabled={isComplete}>
              Finalize the Winning Bid!
            </PrimaryButton>
          </Link>
        </div>
        {winnerAddress && (
          <div style={{ margin: "0px 15px" }}>
            <Link href={`/tenders/${address}/final/${count}`}>
              <PrimaryButton>View the final Bids!</PrimaryButton>
            </Link>
          </div>
        )}
      </Stack>
      {state.errorMessage && (
        <div style={{ marginBottom: "25px" }}>
          <Text className="erroText" variant="mediumPlus">
            {state.errorMessage}
          </Text>
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps = async (props) => {
  const tender = Tender(props.query.address);
  const summary = await tender.methods.getTenderDetails().call();
  const status = await tender.methods.getTenderState().call();
  const numberOfBids = await tender.methods.numberOfBids().call();
  console.log(numberOfBids);
  var isComplete;
  if (status === "Ongoing") isComplete = false;
  else isComplete = true;

  var winIndex, winner;
  if (isComplete) {
    winner = await tender.methods.winner().call();
  }

  // const isComplete = await tender.methods.complete().call();
  return {
    props: {
      address: props.query.address,
      description: summary[0],
      manager: summary[1],
      count: summary[2],
      isComplete: isComplete,
      winnerAddress: isComplete ? winner.bidder : null,
      winnerBidAmount: isComplete ? winner.bidAmount : null,
      winnerBid: isComplete ? winner.bid : null,
    }
  };
};

export default TenderShow;

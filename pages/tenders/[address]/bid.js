import React, { useState } from "react";
import Tender from "../../../ethereum/tender";
import web3 from "../../../ethereum/web3";
import { Stack, Text, PrimaryButton, TextField } from '@fluentui/react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { FaArrowLeft } from "react-icons/fa";
import Layout from "../../../components/Layout";

const BidNew = ({ address }) => {
  const router = useRouter();
  const [state, setState] = useState({
    bidAmount: "",
    description: "",
    loading: false,
    errorMessage: "",
  });

  const onSubmit = async (event) => {

    //prevents routing to some other page (which is default action)
    event.preventDefault();

    const tender = Tender(address);
    const { bidAmount, description } = state;
    setState({ ...state, loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();

      await tender.methods
        .makeBid(bidAmount, description)
        .send({ from: accounts[0] });
      console.log("test inside");
      router.push(`/tenders/${address}`);
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false });
  };

  return (
    <Layout>
      <Text block variant="xxLargePlus" style={{ marginTop: '25px' }}>Bid on the Tender</Text>
      <Link href={`/tenders/${address}`}>
        <Text block style={{ fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>
          <FaArrowLeft style={{ marginRight: '5px' }} /> <span style={{ fontSize: '1.25rem' }}>Go Back</span>
        </Text>
      </Link>

      <Stack style={{ margin: '15px 0px' }}>
        <TextField
          styles={{ root: { width: 450 } }}
          label="Description"
          value={state.description}
          multiline
          rows={5}
          onChange={(event) =>
            setState({ ...state, description: event.target.value })
          }
        />
        <TextField
          label="Bid Amount"
          styles={{ root: { width: 450 } }}
          value={state.bidAmount}
          suffix='ETH'
          onChange={(event) =>
            setState({ ...state, bidAmount: event.target.value })
          }
        />
      </Stack>

      <PrimaryButton style={{ width: '300px' }} disabled={state.loading} onClick={onSubmit}>
        {state.loading ? 'Loading...' : 'Submit Bid!'}
      </PrimaryButton>

      {state.errorMessage && <Text block className="errorText">Error: {state.errorMessage}</Text>}
    </Layout>
  );
};

export const getServerSideProps = async (props) => {
  const { address } = props.query;
  return {
    props: {
      address
    }
  };
};

export default BidNew;

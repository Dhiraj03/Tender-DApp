import React, { useState } from "react";
import { Stack, Text, PrimaryButton, TextField } from '@fluentui/react';
import Tender from "../../../ethereum/tender";
import web3 from "../../../ethereum/web3";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Layout from "../../../components/Layout";

const FinalizeBid = ({ address }) => {
  const router = useRouter();
  const [state, setState] = useState({
    index: "",
    value: "",
    errorMessage: "",
    loading: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const tender = Tender(address);
    setState({ ...state, loading: true });
    try {
      const accounts = await web3.eth.getAccounts();

      await tender.methods.awardTender(state.index).send({
        from: accounts[0],
        value: web3.utils.toWei(state.value, "ether"),
      });
      router.push(`/tenders/${address}`);
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false, value: "" });
  };

  return (
    <Layout>

      <Text block variant="xxLargePlus" style={{ marginTop: '25px' }}>Finalize A Bid</Text>
      <Link href={`/tenders/${address}`}>
        <Text block style={{ fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>
          <FaArrowLeft style={{ marginRight: '5px' }} /> <span style={{ fontSize: '1.25rem' }}>Go Back</span>
        </Text>
      </Link>

      <Stack style={{ margin: '15px 0px' }}>
        <TextField
          styles={{ root: { width: 550 } }}
          label="Amount to be paid to the winner (Please enter the bid amount of the chosen bid)"
          suffix='ETH'
          value={state.value}
          onChange={(event) =>
            setState({ ...state, value: event.target.value })
          }
        />
        <TextField
          label="Index of the bid chosen (0-indexed)"
          styles={{ root: { width: 550 } }}
          value={state.index}
          onChange={(event) =>
            setState({ ...state, index: event.target.value })
          }
        />
      </Stack>

      <PrimaryButton style={{ width: '300px' }} disabled={state.loading} onClick={onSubmit}>
        {state.loading ? 'Loading...' : 'Award the Tender!'}
      </PrimaryButton>

      {state.errorMessage && <Text block className="errorText">Error: {state.errorMessage}</Text>}
    </Layout>
  );
};

export const getServerSideProps = async (props) => {
  const { address } = props.query;

  return { props: { address } };
};

export default FinalizeBid;

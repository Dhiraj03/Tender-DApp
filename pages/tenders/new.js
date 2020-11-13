import React, { useState } from "react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Stack, Text, PrimaryButton, TextField } from '@fluentui/react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { FaArrowLeft } from "react-icons/fa";

const TenderNew = () => {
  const router = useRouter();

  const [state, setState] = useState({
    description: "",
    errorMessage: "",
    loading: false
  });

  const onSubmit = async event => {
    event.preventDefault();
    setState({ ...state, loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createTender(state.description)
        .send({
          from: accounts[0]
        });
        router.push("/");
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false });
  };

  return (
    <Layout>

      <Text block variant="xxLargePlus" style={{ marginTop: '25px' }}>Float A Tender!</Text>
      <Link href={`/`}>
        <Text block style={{ fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>
          <FaArrowLeft style={{ marginRight: '5px' }}/> <span style={{ fontSize: '1.25rem' }}>Go Back</span>
        </Text>
      </Link>

      <Stack style={{ margin: '15px 0px' }}>
        <TextField
          styles={{ root: { width: 450 } }}
          label="Requirements and description of the project"
          value={state.description}
          multiline
          rows={5}
          onChange={(event) =>
            setState({ ...state, description: event.target.value })
          }
        />
      </Stack>

      <PrimaryButton style={{width: '350px'}} disabled={state.loading} onClick={onSubmit}>
        {state.loading ? 'Loading...' : 'Create Tender!'}
      </PrimaryButton>

      {state.errorMessage && <Text block className="errorText">Error: {state.errorMessage}</Text>}
    </Layout>
  );
};

export default TenderNew;

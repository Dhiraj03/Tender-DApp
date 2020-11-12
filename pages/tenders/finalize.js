import React, { useState } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Tender from "../../ethereum/tender";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Layout from "../../components/Layout";

const FinalizeBid = ({ address }) => {
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

      await tender.methods.finalizeBid(state.index).send({
        from: accounts[0],
        value: web3.utils.toWei(state.value, "ether"),
      });
      Router.replaceRoute(`/tenders/${address}`);
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false, value: "" });
  };

  return (
    <Layout>
      <Form onSubmit={onSubmit} error={!!state.errorMessage}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={state.value}
            onChange={(event) =>
              setState({ ...state, value: event.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Index of the bid chosen</label>
          <Input
            value={state.index}
            onChange={(event) =>
              setState({ ...state, index: event.target.value })
            }
          />
        </Form.Field>
        <Message error header="Oops!" content={state.errorMessage} />
        <Button loading={state.loading} primary>
          Contribute!
        </Button>
      </Form>
    </Layout>
  );
};

export const getServerSideProps = async (props) => {
  const { address } = props.query;

  return { address };
};

export default FinalizeBid;

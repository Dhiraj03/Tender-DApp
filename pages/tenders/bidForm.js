import React, { useState } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Tender from "../../ethereum/tender";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";
import Layout from "../../components/Layout";

const BidNew = ({ address }) => {
  const [state, setState] = useState({
    bidAmount: "",
    description: "",
    loading: false,
    errorMessage: ''
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
      Router.pushRoute('/');
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false });
  };
  return (
    <Layout>
      <Link route={`/tenders/${address}`}>
        <a>
          Back
        </a>
      </Link>


      <Form onSubmit={onSubmit} error={!!state.errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={state.description}
            onChange={event =>
              setState({ ...state, description: event.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Bid Amount</label>
          <Input
            value={state.bidAmount}
            onChange={event =>
              setState({ ...state, bidAmount: event.target.value })
            }
          />
        </Form.Field>
        <Message error header="Oops!" content={state.errorMessage} />
        <Button primary loading={state.loading} >Create!</Button>
      </Form>
    </Layout>
  );
};

export const getInitialProps = async (props) => {
  const { address } = props.query;
  return { address };
};

export default BidNew;

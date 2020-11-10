import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

const TenderNew = () => {
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

      Router.pushRoute("/");
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false });
  };

  return (
    <Layout>
      <h3>Float A Tender!</h3>
      <Form onSubmit={onSubmit} error={!!state.errorMessage}>
        <Form.Field>
          <label>Requirements and description of the project</label>
          <Input
            value={state.description}
            onChange={event =>
              setState({ ...state, description: event.target.value })
            }
          />
        </Form.Field>
        <Message error header="Oops!" content={state.errorMessage} />
        <Button loading={state.loading} primary>
          Create!
        </Button>
      </Form>
    </Layout>
  );
};

export default TenderNew;

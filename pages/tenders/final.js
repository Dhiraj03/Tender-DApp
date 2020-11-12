import React, { useState } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Tender from "../../ethereum/tender";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Layout from "../../components/Layout";

const Final = ({ address }) => {
  const [index, setIndex] = useState("");

  onSubmit = (event) => {
    event.preventDefault();
    Router.replaceRoute(`/tenders/${address}/final/${index}`);
  };
  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Index of the bid to be viewed</label>
          <Input
            value={index}
            onChange={(event) => setIndex(event.target.value)}
          />
        </Form.Field>
        <Button primary>Contribute!</Button>
      </Form>
    </Layout>
  );
};

export const getServerSideProps = async (props) => {
  const { address } = props.query;

  return { address };
};

export default Final;

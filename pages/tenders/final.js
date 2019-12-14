import React, { Component } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Tender from "../../ethereum/tender";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Layout from "../../components/Layout";

class Final extends Component {
  state = {
    index: ""
  };
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = event => {
    event.preventDefault();
    Router.replaceRoute(
      `/tenders/${this.props.address}/final/${this.state.index}`
    );
  };

  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Index of the bid to be viewed</label>
            <Input
              value={this.state.index}
              onChange={event => this.setState({ index: event.target.value })}
            />
          </Form.Field>
          <Button primary>Contribute!</Button>
        </Form>
      </Layout>
    );
  }
}
export default Final;
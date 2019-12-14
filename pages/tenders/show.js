import React, { Component } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
//import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class TenderShow extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
    index:"",

  };
  static async getInitialProps(props) {
    const tender = Tender(props.query.address);
    const data = await tender.methods.data().call();
    const summary = await tender.methods.getSummary().call();
    console.log(summary);
    const isComplete = await tender.methods.complete().call();
    return {
      address: props.query.address,
      description: summary[0],
      manager: summary[1],
      count: summary[2],
      isComplete: isComplete

    };
  }

  onSubmit = async event => {
    event.preventDefault();
    const tender = Tender(this.props.address);
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      await tender.methods.verify().send({
        from: accounts[0]
        });
      
        Router.replaceRoute(`/tenders/${this.props.address}/viewbids/${this.state.value}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };

  onClick = async event => {
    event.preventDefault();
    Router.replaceRoute(`/tenders/${this.props.address}/finalBid`);

  }

 /* onSumbitFinal = async event => {
    event.preventDefault();
    console.log("lol");
    const tender = Tender(this.props.address);
    const windex = await tender.methods.winIndex().call();
    this.setState({winIndex:windex});
    this.setState({ loadingFinal: true });
    try {
      const accounts = await web3.eth.getAccounts();
      Router.replaceRoute(
        `/tenders/${this.props.address}/viewbids/${this.props.valueFinal}/final`
      );
    } catch (errFinal) {
      this.setState({ errorMessageFinal: errFinal.message});
    }
    this.setState({ loadingFinal: false, valueFinal: "" });

  };
  */
renderCards() {
    const { manager, description, count } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description:
          "The manager floated this tender and decides who to award the tender to.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: "Project description",
        meta: "A brief description and summary of requirements.",
        description: description
      },
      {
        header: count,
        meta: "Number of bidders",
        description:
          "Number of vendors/suppliers who have already placed their bids."
      }
    ];
    return <Card.Group items={items} />;
  }
  render() {
    const { isComplete } = this.props;
    console.log(isComplete);
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          </Grid.Row>
          <Grid.Column width={10}>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>
                <label>Enter Bid Index to be viewed:</label>
                <Input
                  value={this.state.value}
                  onChange={event =>
                    this.setState({ value: event.target.value })
                  }
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button
                disabled={isComplete}
                primary
                loading={this.state.loading}
              >
                View!
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Row>
            <Grid.Column width={5}>
              <Link route={`/tenders/${this.props.address}/bid`}>
                <a>
                  <Button disabled={isComplete} primary>
                    Bid for this project
                  </Button>
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column width={5}>
              <Link route={`/tenders/${this.props.address}/finalize`}>
                <a>
                  <Button disabled={isComplete} primary>
                    Finalize the Winning Bid!
                  </Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button onClick={this.onClick} primary>
              View all details of bids!
            </Button>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}
  

export default TenderShow;

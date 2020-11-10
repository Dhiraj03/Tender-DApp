import React, { useState } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
//import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

const TenderShow = ({ isComplete, address, valueFinal, manager, description, count }) => {
  const [state, setState] = useState({
    value: "",
    errorMessage: "",
    loading: false,
    index: "",

  });

  const onSubmit = async event => {
    event.preventDefault();
    const tender = Tender(address);
    setState({ ...state, loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      await tender.methods.verify().send({
        from: accounts[0]
      });

      Router.replaceRoute(`/tenders/${address}/viewbids/${state.value}`);
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false, value: "" });
  };

  const onClick = async event => {
    event.preventDefault();
    Router.replaceRoute(`/tenders/${address}/finalBid`);

  };

  /* const onSumbitFinal = async event => {
    event.preventDefault();
    console.log("lol");
    const tender = Tender(address);
    const windex = await tender.methods.winIndex().call();
    setState({...state, winIndex:windex});
    setState({...state, loadingFinal: true });
    try {
      const accounts = await web3.eth.getAccounts();
      Router.replaceRoute(
        `/tenders/${address}/viewbids/${valueFinal}/final`
      );
    } catch (errFinal) {
      setState({ ...state, errorMessageFinal: errFinal.message});
    }
    setState({ ...state, loadingFinal: false, valueFinal: "" });

  };
  */

  const renderCards = () => {
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
  };

  return (
    <Layout>
      <h3>Campaign Show</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
        </Grid.Row>
        <Grid.Column width={10}>
          <Form onSubmit={onSubmit} error={!!state.errorMessage}>
            <Form.Field>
              <label>Enter Bid Index to be viewed:</label>
              <Input
                value={state.value}
                onChange={event =>
                  setState({ ...state, value: event.target.value })
                }
              />
            </Form.Field>
            <Message error header="Oops!" content={state.errorMessage} />
            <Button
              disabled={isComplete}
              primary
              loading={state.loading}
            >
              View!
            </Button>
          </Form>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={5}>
            <Link route={`/tenders/${address}/bid`}>
              <a>
                <Button disabled={isComplete} primary>
                  Bid for this project
                </Button>
              </a>
            </Link>
          </Grid.Column>
          <Grid.Column width={5}>
            <Link route={`/tenders/${address}/finalize`}>
              <a>
                <Button disabled={isComplete} primary>
                  Finalize the Winning Bid!
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Button onClick={onClick} primary>
            View all details of bids!
          </Button>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export const getInitialProps = async (props) => {
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
};

export default TenderShow;

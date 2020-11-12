import React, { useState } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
//import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";
import { useRouter } from "next/router";

const TenderShow = ({
  isComplete,
  address,
  manager,
  description,
  count,
}) => {
  const router = useRouter();
  const [state, setState] = useState({
    value: "",
    errorMessage: "",
    loading: false,
    index: "",
  });

  const onSubmit = async (event) => {
    
    event.preventDefault();
    const tender = Tender(address);
    setState({ ...state, loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      //add auth part here
      router.push(`/tenders/${address}/viewbids/${count}`);
    } catch (err) {
      setState({ ...state, errorMessage: err.message });
    }
    setState({ ...state, loading: false, value: "" });
  };

  const onClick = async (event) => {
    event.preventDefault();
    Router.replaceRoute(`/tenders/${address}/finalBid`);
  };

  const renderCards = () => {
    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description:
          "The manager floated this tender and decides who to award the tender to.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: description,
        meta: "Project description",
        description: "A brief description and summary of requirements.",
      },
      {
        header: count,
        meta: "Number of bidders",
        description:
          "Number of vendors/suppliers who have already placed their bids.",
      },
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
          
          { state.errorMessage && <Message error header="Oops!" content={state.errorMessage} />}
          <Button onClick={onSubmit} disabled={isComplete} primary loading={state.loading}>
            View!
          </Button>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={5}>
            <Link route={`/tenders/${address}/bid`}>
              <a>
                <Button disabled={isComplete} primary>
                  Make a Bid!
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

export const getServerSideProps = async (props) => {
  const tender = Tender(props.query.address);
  const summary = await tender.methods.getTenderDetails().call();
  console.log(summary);
  // const isComplete = await tender.methods.complete().call();
  return {
    props : {address: props.query.address,
    description: summary[0],
    manager: summary[1],
    count: summary[2],
    isComplete: false}
  };
};

export default TenderShow;

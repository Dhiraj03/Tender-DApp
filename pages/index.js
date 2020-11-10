import React from "react";
import factory from "../ethereum/factory";
import { Card, Button, Menu } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "../components/Layout";

const TenderIndex = ({ tenders }) => {

  /*Creates a array containing all relevant attributes of tender cards
    to be displayed
  */
  const renderTenders = () => {
    const items = tenders.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/tenders/${address}`}>
            <a>View Tender</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  };

  return (
    //Layout is a custom tag created in components/layout
    <Layout>
      <div>
        <Link route="/tenders/new">
          <a>
            <Button
              content="Float a Tender"
              icon="add circle"
              primary
              floated="right"
            />
          </a>
        </Link>
        {renderTenders()}
      </div>
    </Layout>
  );
};

export const getInitialProps = async () => {
  const tenders = await factory.methods.getDeployedTenders().call();
  return { tenders: tenders };
};

export default TenderIndex;

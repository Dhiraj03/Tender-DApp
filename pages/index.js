import React from "react";
import factory from "../ethereum/factory";
import { Stack, Text } from '@fluentui/react';
import Link from "next/link";
import { FaFileInvoice } from "react-icons/fa";
import Layout from "../components/Layout";

const TenderIndex = ({ tenders }) => {
  /*Creates a array containing all relevant attributes of tender cards
    to be displayed
  */
  const renderTenders = () => {
    if (tenders.length === 0) {
      return (
        <Stack style={{ paddingTop: '15px' }}>
          <Text variant="xxLarge">No Tenders to Show</Text>
        </Stack>
      );
    }
    return tenders.map((address, ind) => (
      <Link href={`/tenders/${address}`} key={ind}>
        <Stack className="tenderCard">
          <Text variant="xxLarge">{address}</Text>
          <Text className="tenderCardText">Click to View Tender</Text>
        </Stack>
      </Link>
    ));
  };

  return (
    //Layout is a custom tag created in components/layout
    <Layout>
      <div style={{ margin: '25px 0px' }} >
        <FaFileInvoice size="3.5rem" style={{ margin: '0px 10px' }} />
        <Text variant="mega">All Tenders</Text>
      </div>

      <div>
        {renderTenders()}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const tenders = await factory.methods.getDeployedTenders().call();
  console.log(tenders);
  return { props: { tenders } };
};

export default TenderIndex;

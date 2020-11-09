import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Tender 2.0</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/fulfilled">
          <a className="item">View fulfilled Tenders</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
import React from "react";
import { Helmet } from "react-helmet";
import UnderCons from "../components/UnderCons";

function MyWork() {
  return (
    <div>
      <Helmet>
        <title>Ayush | My Work</title>
      </Helmet>
      <UnderCons pageTitle='My Work' />
    </div>
  );
}

export default MyWork;

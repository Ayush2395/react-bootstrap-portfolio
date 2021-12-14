import React from "react";
import { Helmet } from "react-helmet";
// import { CardsMenu } from "../components/CardMenu";
import SearchBar from "../components/SearchBar";
// import All from "../components/All";
// import UnderCons from "../components/UnderCons";

function MyWork() {
  return (
    <div>
      <Helmet>
        <title>Ayush | My Work</title>
      </Helmet>

      <SearchBar />

      {/* <CardsMenu /> */}
    </div>
  );
}

export default MyWork;

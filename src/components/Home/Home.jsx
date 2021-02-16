import React from "react";
import LeftMenu from "../Layouts/LeftMenu";
import CardExampleLinkCard from "./Homecard";
import Navbar from "./Navbar.jsx";
import Homecard from "./Homecard";
import leave from "./test"

const Home = () => {
  return (
    <div>
      <LeftMenu />   
      Home
      <Navbar />
      <Homecard/>
    </div>
  );
};

export default Home;

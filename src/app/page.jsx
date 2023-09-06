import React from "react";
import "../styles/globals.css";
import Herosec from "../components/heroban";
import Whysec from "../components/whysec";
import Getstart from "../components/getstart";
import Layout from "../../src/helpers/Layout";
import Pathways from "../components/pathwyas";
import Test from "../components/test";
const page = () => {
  return (
    <div className="Topcontainer">
      <Layout>
        <Herosec />
        <Test />
        <Pathways />
        <Whysec />
        <Getstart />
      </Layout>
    </div>
  );
};

export default page;

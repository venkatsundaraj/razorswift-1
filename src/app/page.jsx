import React from "react";
import "../styles/globals.css";
import Herosec from "../components/heroban";

import Whatwe from "../components/whatwedo";
import Cardropdown from "../components/career-dropdown";
import Careersec from "../components/careersec";
import Whysec from "../components/whysec";
import Getstart from "../components/getstart";
import Footer from "../components/footer";
import Layout from "../../src/helpers/Layout";
import Internsec from "../components/internsec";
import Pathways from "../components/pathwyas";
import Test from "../components/test";
const page = () => {
  return (
    <div className="Topcontainer">
      <Layout>
        <Herosec />

        {/* <Whatwe /> */}
        {/* <Cardropdown /> */}
        {/* <Careersec /> */}
        {/* <Internsec /> */}
        <Test />
        <Pathways />
        <Whysec />
        <Getstart />
      </Layout>
    </div>
  );
};

export default page;

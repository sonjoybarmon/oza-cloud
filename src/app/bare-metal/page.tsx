import Layout from "@/components/Layout";
import Business from "@/components/bareMetal/Business";
import CloudService from "@/components/bareMetal/CloudServoce";
import FAQs from "@/components/bareMetal/FAQs";
import FeatureCloud from "@/components/bareMetal/FeatureCloud";
import GetStarted from "@/components/bareMetal/GetStarted";
import Hero from "@/components/bareMetal/Hero";
import Packages from "@/components/bareMetal/Packages";
import React from "react";

type Props = {
  // Define your props here (if any)
};

const BareMetal: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Hero />
      <Business />
      <CloudService />
      <FeatureCloud />
      <GetStarted />
      <Packages />
      <FAQs />
    </Layout>
  );
};

export default BareMetal;

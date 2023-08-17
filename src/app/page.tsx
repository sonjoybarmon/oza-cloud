import Business from "@/components/Home/Business/Business";
import DomainSearch from "@/components/Home/DomainSearch";
import Explore from "@/components/Home/Explore/Explore";
import FAQs from "@/components/Home/FAQs";
import GetStarted from "@/components/Home/GetStarted";
import Hero from "@/components/Home/Hero";
import Location from "@/components/Home/Location";
import Migration from "@/components/Home/Migration";
import ProServices from "@/components/Home/ProServices";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import Layout from "@/components/Layout";

import dynamic from "next/dynamic";

const HostingPlans = dynamic(() => import("@/components/Home/HostingPlans"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <DomainSearch />
        <HostingPlans />
        <Explore />
        <Migration />
        <Location />
        <ProServices />
        <Services />
        <Testimonial />
        <FAQs />
        <Business />
        <GetStarted />
      </main>
    </Layout>
  );
}

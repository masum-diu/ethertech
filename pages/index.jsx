import React from "react";
import Layout from "./components/Layout";
import SliderPage from "./components/ExpandingSlider";
import Contact from "./components/Contact";
import CaseStudies from "./components/CaseStudies";
import OurProducts from "../pages/components/OurProducts";
import Particles from "./components/Worldwide";
import OurPartner from "./components/OurPartner";
import OurClients from "./components/OurClients";
import IndustriesService from "./components/IndustriesService";
import { OurServices } from "./components/OurService";
import Decentralized from "./components/Decentralized";

function Home() {
  return (
    <Layout>
      <hr className="container" />
      <SliderPage></SliderPage>
      <Decentralized></Decentralized>
      <OurServices></OurServices>
      {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-red-500 text-center px-4"></div> */}
      <OurPartner />
      <OurClients></OurClients>
      <IndustriesService></IndustriesService>
      <Particles></Particles>
      <OurProducts></OurProducts>
      <CaseStudies></CaseStudies>
      <Contact></Contact>
    </Layout>
  );
}

export default Home;

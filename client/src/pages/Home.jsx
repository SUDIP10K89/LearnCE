import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";

const Home = () => {

  return (
    <div>
      <Hero/>
      <About/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Home;

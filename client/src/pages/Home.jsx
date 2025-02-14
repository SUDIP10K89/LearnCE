import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

const Home = () => {

  return (
    <div>
      <Hero/>
      <SearchBar/>
      <About/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Home;

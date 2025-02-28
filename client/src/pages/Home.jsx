import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CommentSection from "../components/Comment";

const Home = () => {

  return (
    <div className="pt-16 bg-gray-100">
      <Hero/>
      {/* <SearchBar/> */}
      <About/>
      <CommentSection />
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Home;

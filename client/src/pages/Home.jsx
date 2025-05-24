import About from "../components/About";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";
import InstallButton from "../components/InstallButton";
// import SearchBar from "../components/SearchBar";

const Home = () => {

  return (
    <div className="pt-16 bg-gray-100 ">
      <Hero/>
      
      {/* <SearchBar/> */}
      <About/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Home;

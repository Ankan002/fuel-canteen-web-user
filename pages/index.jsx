import Navbar from "../components/navbar";
import HomeHeader from "../components/home-header";
import CustomHead from "../components/custom-head";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-primary-light dark:bg-primary-dark">
      <CustomHead title="Home" />

      <Navbar />
      <HomeHeader />
    </div>
  );
};

export default Home;

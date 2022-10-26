import Head from "next/head";
import InitialHomeScreen from "../components/InitialHomeScreen";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <div>
      <InitialHomeScreen />
      <Footer />
    </div>
  );
};

export default Home;

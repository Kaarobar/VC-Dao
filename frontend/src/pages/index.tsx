import { Fragment, useState } from "react";
import AfterFundingHomeScreen from "../components/AfterFundingHomeScreen";
import InitialHomeScreen from "../components/InitialHomeScreen";

const Home = () => {
  const [stateChange, setStateChange] = useState(true);
  return (
<<<<<<< HEAD
    <>
      <InitialHomeScreen />
    </>
=======
    <Fragment>
      {setStateChange ? <AfterFundingHomeScreen /> : <InitialHomeScreen />}
    </Fragment>
>>>>>>> dbfe4db804261805a563dbb3c7df40467a87d450
  );
};

export default Home;

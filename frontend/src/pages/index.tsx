import { Fragment, useState } from "react";
import AfterFundingHomeScreen from "../components/AfterFundingHomeScreen";
import InitialHomeScreen from "../components/InitialHomeScreen";

const Home = () => {
  const [stateChange, setStateChange] = useState(true);
  return (
    <Fragment>
      {stateChange ? <AfterFundingHomeScreen /> : <InitialHomeScreen />}
    </Fragment>
  );
};

export default Home;

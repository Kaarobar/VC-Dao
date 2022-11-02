import { Fragment, useState } from "react";
import AfterFundingHomeScreen from "../components/AfterFundingHomeScreen";
import InitialHomeScreen from "../components/InitialHomeScreen";

const Home = () => {
  const [stateChange, setStateChange] = useState(false);
  return (
    <Fragment>
      {stateChange ? <AfterFundingHomeScreen /> : <InitialHomeScreen setStateChange={setStateChange} />}
    </Fragment>
  );
};

export default Home;

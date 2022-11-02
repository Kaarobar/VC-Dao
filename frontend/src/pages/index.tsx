import { Fragment, useState } from "react";
import AfterFundingHomeScreen from "../components/AfterFundingHomeScreen";
import InitialHomeScreen from "../components/InitialHomeScreen";

const Home = () => {
  const [pageChange, setPageChange] = useState(false);
  return (
    <Fragment>
      {pageChange ? <AfterFundingHomeScreen /> : <InitialHomeScreen setPageChange={setPageChange} />}
    </Fragment>
  );
};

export default Home;

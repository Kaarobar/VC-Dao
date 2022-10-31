import React, { useState } from "react";
import StepOne from "../components/CreateProposal/StepOne";
import StepTwo from "../components/CreateProposal/StepTwo";
import Layout from "../components/Layout";
import { IProposal } from "../utils/types";

const CreateProposal = () => {
  const savedValues = useState<IProposal>({
    title: "",
    desc: "",
    noOfDaysDeadline: "",
    tokenName: "",
    tokenToBeIssued: "",
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <StepOne savedValues={savedValues} handleNext={handleNext}></StepOne>
        );
      case 1:
        return (
          <StepTwo savedValues={savedValues} handleBack={handleBack}></StepTwo>
        );
      default:
        return "ERROR";
    }
  };
  return (
    <Layout bottom>
      <div className="py-4">
        <div className="container small">
          <div>{getStepContent(activeStep)}</div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProposal;

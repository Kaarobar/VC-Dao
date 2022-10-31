import React, { FC } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import moment from "moment";
import { IProposal } from "../../../utils/types";

interface Props {
  savedValues: [IProposal, React.Dispatch<React.SetStateAction<IProposal>>];
  handleNext: () => void;
}

const StepOne: FC<Props> = ({ savedValues, handleNext }) => {
  return (
    <div className="p-10">
      <div className="mb-8 text-center">
        <h2 className="text-gray-800">Enter Proposal Details</h2>
      </div>
      <Formik
        initialValues={{
          title: savedValues[0].title,
          tokenName: savedValues[0].tokenName,
          noOfDaysDeadline: savedValues[0].noOfDaysDeadline,
          tokenToBeIssued: savedValues[0].tokenToBeIssued,
        }}
        validationSchema={yup.object({
          title: yup.string().required("This field is required"),
          tokenName: yup.string().required("This field is required"),
          noOfDaysDeadline: yup.string().required("This field is required"),
          tokenToBeIssued: yup.string().required("This field is required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          savedValues[1]({
            ...savedValues[0],
            title: values.title,
            tokenName: values.tokenName,
            noOfDaysDeadline: values.noOfDaysDeadline,
            tokenToBeIssued: values.tokenToBeIssued,
          });
          handleNext();
        }}
      >
        {(formik) => (
          <Form>
            <div className="space-y-5">
              <div className="w-full">
                <input
                  placeholder="Title"
                  name="title"
                  className="pl-3 border-[1px] outline-none h-10 border-[#dcdfe6] border-solid w-full text-gray-600 text-base rounded-sm box-border"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-sm text-red-600 mt-1">
                    {formik.errors.title}
                  </div>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  placeholder="Token Name"
                  name="tokenName"
                  className="pl-3 border-[1px] outline-none h-10 border-[#dcdfe6] border-solid w-full text-gray-600 text-base rounded-sm box-border"
                  {...formik.getFieldProps("tokenName")}
                />
                {formik.touched.tokenName && formik.errors.tokenName ? (
                  <div className="text-sm text-red-600 mt-1">
                    {formik.errors.tokenName}
                  </div>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  placeholder="Number Of Days For Voting Deadline"
                  name="noOfDaysDeadline"
                  className="pl-3 border-[1px] outline-none h-10 border-[#dcdfe6] border-solid w-full text-gray-600 text-base rounded-sm box-border"
                  {...formik.getFieldProps("noOfDaysDeadline")}
                />
                {formik.touched.noOfDaysDeadline &&
                formik.values.noOfDaysDeadline ? (
                  <div className="text-sm text-gray-500 mt-1">
                    {moment()
                      .add(parseInt(formik.values.noOfDaysDeadline), "d")
                      .format("DD MMM YYYY")}
                  </div>
                ) : null}
                {formik.touched.noOfDaysDeadline &&
                formik.errors.noOfDaysDeadline ? (
                  <div className="text-sm text-red-600 mt-1">
                    {formik.errors.noOfDaysDeadline}
                  </div>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  placeholder="Number Of Tokens To Be Issued"
                  name="tokenToBeIssued"
                  className="pl-3 border-[1px] outline-none h-10 border-[#dcdfe6] border-solid w-full text-gray-600 text-base rounded-sm box-border"
                  {...formik.getFieldProps("tokenToBeIssued")}
                />
                {formik.touched.tokenToBeIssued &&
                formik.errors.tokenToBeIssued ? (
                  <div className="text-sm text-red-600 mt-1">
                    {formik.errors.tokenToBeIssued}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-8 w-full">
              <button
                type="submit"
                className="w-full text-base uppercase h-10 rounded-sm border-none bg-gray-800 text-white cursor-pointer font-medium tracking-wider"
              >
                next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepOne;

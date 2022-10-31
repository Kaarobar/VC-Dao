import React, { FC } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import moment from "moment";
import { IProposal } from "../../../utils/types";

interface Props {
  savedValues: [IProposal, React.Dispatch<React.SetStateAction<IProposal>>];
  handleBack: () => void;
}

const StepTwo: FC<Props> = ({ savedValues, handleBack }) => {
  return (
    <div className="p-10">
      <div className="flex items-center mb-6">
        <div className="w-5 cursor-pointer" onClick={() => handleBack()}>
          <img
            src="/assets/images/arrow-left.png"
            alt="arrow-left"
            className="w-full"
          />
        </div>
        <div className="mx-auto my-0">
          <h2 className="">Enter Proposal Details</h2>
        </div>
      </div>
      <Formik
        initialValues={{
          desc: savedValues[0].desc,
        }}
        validationSchema={yup.object({
          desc: yup.string().required("This field is required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          savedValues[1]({
            ...savedValues[0],
            desc: values.desc,
          });
        }}
      >
        {(formik) => (
          <Form>
            <div className="space-y-5">
              <div className="w-full">
                <textarea
                  placeholder="Description"
                  name="desc"
                  className="pl-3 border-[1px] outline-none h-40 border-[#dcdfe6] border-solid w-full resize-none text-gray-600 text-base rounded-sm box-border"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched.desc && formik.errors.desc ? (
                  <div className="text-sm text-red-600 mt-1">
                    {formik.errors.desc}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-8 w-full">
              <button
                type="submit"
                className="w-full text-base uppercase h-10 rounded-sm border-none bg-gray-800 text-white cursor-pointer font-medium tracking-wider"
              >
                submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepTwo;

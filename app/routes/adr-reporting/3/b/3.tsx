// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";
import { useEffect } from "react";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Radio, Progress, Form, message } from "antd";

//importing utilities
import { radioOptions } from "~/utils/adr-reporting/3b3";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/b/3";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form1page3b3() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };

  const formState = useSelector((state: RootState) => state.form1page3b3);

  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    form.setFieldsValue(formState.data);
  }, [formState.status]);

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <FormLayout>
      <Form
        preserve={false}
        form={form}
        scrollToFirstError={true}
        name="Form1Page3b3"
        onFinish={(values) => {
          fetch("/api/forms/form1/page3/b/iii", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values }),
          })
            .then((res) => {
              info();
            })
            .catch((err) => {
              error();
            });
        }}
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="">
            <div className="text-[24px] text-[#E8590C]">
              Hartwig's Severity Assessment Scale
            </div>
            <div className="min-w-full pt-4">
              <Form.Item name="hartwigseveritytest" label="Select a level">
                <Radio.Group
                  optionType="button"
                  buttonStyle="solid"
                  size="large"
                  options={radioOptions}
                />
              </Form.Item>
              <div className="flex flex-col pt-4">
                <p className="m-0 p-0 text-gray-800 dark:text-gray-300 font-medium">
                  Mild Level
                </p>
                <div className="w-full m-0 p-0">
                  <Progress
                    // make percentage value dynamic
                    percent={30}
                    status={"normal"}
                    showInfo={false}
                    strokeColor={"#E8590C"}
                    trailColor={"#E5E5E5"}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full pt-5">
                <div className="text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row rounded-md mb-5">
                  <h2 className="text-[#E8590C] my-auto mr-2">
                    Assesment criteria
                  </h2>
                  <div className="flex flex-col justify-center my-auto">
                    <FiHelpCircle className="text-black dark:text-white" />
                  </div>
                </div>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires that the suspected drug be withheld,
                  discontinued or otherwise changed. No antidote or other
                  treatment is required, and there is no increase in length of
                  stay
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3b3" />
      </Form>
    </FormLayout>
  );
}
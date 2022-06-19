//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Collapse, Form, Radio, message } from "antd";
import { useEffect } from "react";
//importing utilities
import { options } from "~/utils/adr-reporting/3b2";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/b/2";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form1page3b2() {
  const [form] = Form.useForm();
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3b2);
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
        scrollToFirstError={true}
        name="Form1Page3b2"
        form={form}
        onFinish={(values) => {
          fetch("/api/forms/form1/page3/b/ii", {
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
          <div className="mx-8 py-4 pb-8">
            <div className="text-[24px] text-[#E8590C]">
              WHO Probability Scale
            </div>
            <Form.Item
              name="whoProbabiltyScale"
              label="Scale value"
              className="mx-4 min-w-full pt-4"
            >
              <Radio.Group
                optionType="button"
                buttonStyle="solid"
                size="large"
                options={options}
              />
            </Form.Item>
            <div>
              <div className="text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row rounded-md">
                <h2 className="text-[#E8590C] my-auto mr-2">
                  Assesment criteria
                </h2>
                <div className="flex flex-col justify-center my-auto">
                  <FiHelpCircle className="text-black dark:text-white" />
                </div>
              </div>
              <div className="px-4 my-4">
                <Collapse defaultActiveKey={["1"]}>
                  {options.map((option, index) => (
                    <Collapse.Panel header={option.label} key={index}>
                      <p>{option.info}</p>
                    </Collapse.Panel>
                  ))}
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3b2" />
      </Form>
    </FormLayout>
  );
}

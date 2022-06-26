// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Checkbox, Form, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import { options } from "~/utils/adr-reporting/3c";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/c";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { useEffect } from "react";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form1page3c() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3c);
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
        form={form}
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page3c"
        onFinish={(values) => {
          fetch("/api/forms/form1/page3/c", {
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
          <div>
            <div className="text-[24px] text-[#E8590C] pb-5">
              Treatment Given
            </div>
            <Form.Item
              name="treatmentGiven"
              label="Select the treatment given"
              className="w-full"
            >
              <Checkbox.Group options={options} />
            </Form.Item>
            <Form.Item
              label="Treatment details (if any)"
              name="treatmentDetails"
            >
              <TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="3c" />
      </Form>
    </FormLayout>
  );
}

// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";
import { useEffect } from "react";
//importing components
import { Input, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/MedicalDeviceReporting/9";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2page9() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page9);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  useEffect(() => {
    dispatch(getFormData());
  }, []);
  useEffect(() => {
    form.setFieldsValue(formState.data);
  }, [formState.status]);
  return (
    <FormLayout>
      <Form
        form={form}
        name="Form2page9"
        onFinish={(values) => {
          fetch("/api/forms/form2/page9", {
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
        onValuesChange={(values) => {
          changeFormData(
            values[Object.keys(values)[0]],
            Object.keys(values)[0]
          );
        }}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="flex flex-col pb-8">
            <div className="text-[24px] text-[#E8590C]">
              Product Owner's Investigation
            </div>
            <Form.Item
              label={"Product Owner's device risk analysis report"}
              name="productOwnersDeviceRiskAnalysisReport"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label={"Corrective / preventive action taken"}
              name="correctiveActionTaken"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label={"Device history review"}
              name="deviceHistoryReview"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="9" />
      </Form>
    </FormLayout>
  );
}

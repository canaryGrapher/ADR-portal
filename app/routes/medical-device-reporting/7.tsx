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
} from "~/states/Slices/MedicalDeviceReporting/7";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2page7() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page7);
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
        name="Form2page7"
        onFinish={(values) => {
          fetch("/api/forms/form2/page7", {
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
              Healthcare Facility Details
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <Form.Item label={"Name"} name="name" className="w-100">
                <Input className="w-100" />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item label={"Address"} name="address" className="w-100">
                <Input />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                label={"Contact Number of Person at the site of event"}
                name="contactNumber"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item label={"Telephone Number"} name="telephoneNumber">
                <Input />
              </Form.Item>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="7" />
      </Form>
    </FormLayout>
  );
}

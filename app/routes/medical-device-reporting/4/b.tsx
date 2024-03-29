// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";
import { useEffect } from "react";
// importing components
import { Input, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/MedicalDeviceReporting/4/b";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2page4b() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const formState = useSelector((state: RootState) => state.form2page4b);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    form.setFieldsValue(formState.data);
  }, [formState.status]);
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <FormLayout>
      <Form
        name="Form2page4b"
        form={form}
        onFinish={(values) => {
          fetch("/api/forms/form2/page4/b", {
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
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Importer Details</h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item label="Name" name="name" className="w-full">
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                label="License Number"
                name="licenseNumber"
                className="w-full"
              >
                <Input placeholder="" />
              </Form.Item>
            </div>
            <Form.Item label="Address" name="address" className="w-full">
              <Input.TextArea rows={3} placeholder="" />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="4b" />
      </Form>
    </FormLayout>
  );
}

// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/8";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2page8() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page8);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      <Form
        name="Form2page8"
        initialValues={newFormState}
        onFinish={(value) => console.log(value)}
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
              Casualty Assessment
            </div>
            <div className="mt-4 w-full">
              <Form.Item
                name="investigationAction"
                label="Investigation action taken"
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
            <div className="mt-4 w-full">
              <Form.Item name="rootCause" label="Root cause of problem">
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="8" />
      </Form>
    </FormLayout>
  );
}

// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Input, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/4/c";

export default function Form3page4c() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page4c);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <FormLayout>
      <Form
        name="Form3page4c"
        initialValues={newFormState}
        onFinish={(value) => console.log(value)}
        onValuesChange={(values) => {
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }}
        layout="vertical"
      >
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Distributor Details</h2>
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
        <NavigationPanel currentRoute="4c" />
      </Form>
    </FormLayout>
  );
}

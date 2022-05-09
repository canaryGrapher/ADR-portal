// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/7";


export default function Form3page7() {

  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page7);
  let newFormState = { ...formState };

  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  
  return (
    <FormLayout>
      <Form
        name="Form3page7"
        initialValues={newFormState}
        onFinish={(value) => console.log(value)}
        onValuesChange={(values) => {
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
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

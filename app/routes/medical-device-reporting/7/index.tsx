// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form3page7() {
  return (
    <FormLayout>
      <Form
        name="Form3page7"
        initialValues={{ remember: true }}
        onFinish={(value) => console.log(value)}
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

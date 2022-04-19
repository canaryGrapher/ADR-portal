// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form3page8() {
  return (
    <FormLayout>
      <Form
        name="Form3page8"
        initialValues={{ remember: true }}
        onFinish={(value) => console.log(value)}
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

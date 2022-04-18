//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import { Input, DatePicker, Form, Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form3page1() {
  const radioOptions = ["Initial", "Follow-up", "Final", "Trend"];
  return (
    <FormLayout>
      <Form
        name="Form3page1"
        initialValues={{ remember: true }}
        onFinish={(value) => console.log(value)}
        layout="vertical"
      >
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Primary Information</h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Reporter Reference Number"
                name="reporterReferenceNumber"
                className="w-full"
              >
                <Input className="w-full" />
              </Form.Item>
              <Form.Item
                label="Date of Report"
                name="dateOfReport"
                className="w-full"
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </div>
            <Form.Item
              label="Type of Report"
              name="typeOfReport"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="1" />
      </Form>
    </FormLayout>
  );
}

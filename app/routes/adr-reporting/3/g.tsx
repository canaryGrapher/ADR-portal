// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Checkbox, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import { options } from "~/utils/adr-reporting/3g";

export default function Form1page3g() {
  return (
    <FormLayout>
      <Form
        name="Form1Page3g"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div>
            <div className="text-[24px] text-[#E8590C] pb-5">
              Treatment Given
            </div>
            <Form.Item
              name="treatment given"
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
        <NavigationPanel currentRoute="3g" />
      </Form>
    </FormLayout>
  );
}

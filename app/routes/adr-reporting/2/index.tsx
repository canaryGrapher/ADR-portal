// Import Form Layout
import FormLayout from "~/layouts/forms/adr-reporting";

// Import components
import { Input, DatePicker, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page2() {
  return (
    <FormLayout>
      <Form
        name="Form1Page2"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Suspected Adverse Reaction</h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              className="w-full"
              label="Date of reaction started"
              name="dateOfReactionStarted"
              rules={[{ required: true, message: "Date of reaction started" }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item
              className="w-full"
              label="Date of recovery"
              name="dateOfRecovery"
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </div>
          <Form.Item
            className="w-full"
            label="Describe reaction or problem"
            name="reactionDescription"
            rules={[
              { required: true, message: "Reaction description is mandatory" },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </div>
        <NavigationPanel currentRoute="2" />
      </Form>
    </FormLayout>
  );
}

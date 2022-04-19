// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form3page9() {
  return (
    <FormLayout>
      <Form
        name="Form3page9"
        initialValues={{ remember: true }}
        onFinish={(value) => console.log(value)}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="flex flex-col pb-8">
            <div className="text-[24px] text-[#E8590C]">
              Product Owner's Investigation
            </div>
            <Form.Item
              label={"Product Owner's device risk analysis report"}
              name="productOwnersDeviceRiskAnalysisReport"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label={"Corrective / preventive action taken"}
              name="correctiveActionTaken"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label={"Device history review"}
              name="deviceHistoryReview"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="9" />
      </Form>
    </FormLayout>
  );
}

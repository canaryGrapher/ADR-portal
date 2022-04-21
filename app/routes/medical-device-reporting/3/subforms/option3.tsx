import { Radio, Checkbox, Input, Form } from "antd";

// importing utilities
import {
  checkboxOptions,
  checkboxOptions2,
} from "~/utils/medical-device-reporting/3";

const option3 = () => {
  return (
    <Form
      name="Form3page3Option1"
      initialValues={{ remember: true }}
      onFinish={(value) => console.log(value)}
      layout="vertical"
    >
      {" "}
      <div className="option3">
        <div className="w-full p-10 shadow-xl">
          <div className="py-16 pb-8">
            <div className="pb-4 text-[24px] text-[#E8590C]">
              Equipment/Machines
            </div>
            <Form.Item
              label="Equipment usage"
              name="equipmentUsage"
              className="w-full"
            >
              <Radio.Group
                className="w-full"
                buttonStyle="solid"
                size="large"
                optionType="button"
                options={checkboxOptions}
              />
            </Form.Item>
            <Form.Item
              label="Invasibility"
              name="invasibility"
              className="w-full"
            >
              <Radio.Group
                className="w-full"
                buttonStyle="solid"
                size="large"
                optionType="button"
                options={checkboxOptions2}
              />
            </Form.Item>
            <Form.Item name="imaging" className="w-full">
              <Checkbox> Imaging </Checkbox>
            </Form.Item>
            <Form.Item name="others" className="w-full">
              <Checkbox> Others </Checkbox>
            </Form.Item>
            <Form.Item
              label="Reporter's Comments"
              name="reportersComments"
              className="w-full"
            >
              <Input.TextArea rows={2} />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default option3;

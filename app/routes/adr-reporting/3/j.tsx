// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Form, Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page3j() {
  const radioOptions = [
    {
      label: "Fatal",
      value: "fatal",
    },
    {
      label: "Recovery",
      value: "recovery",
    },
    {
      label: "Continuing",
      value: "continuing",
    },
    {
      label: "Unknown",
      value: "unknown",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  return (
    <FormLayout>
      <Form
        name="Form1Page3j"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div>
            <div className="text-[24px] text-[#E8590C]">Outcome</div>
            <Form.Item name="outcome" className="w-full pt-4">
              <Radio.Group
                options={radioOptions}
                optionType="button"
                buttonStyle="solid"
                size="large"
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="3j" />
      </Form>
    </FormLayout>
  );
}

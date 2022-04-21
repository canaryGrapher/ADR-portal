import { Checkbox, Form } from "antd";

// importing utilities
import { checkboxOptions } from "~/utils/medical-device-reporting/3";

function Option2() {
  return (
    <Form
      name="Form3page3Option2"
      initialValues={{ remember: true }}
      onFinish={(value) => console.log(value)}
      layout="vertical"
    >
      <div className="option2">
        <div className="w-full shadow-xl">
          <div className="mx-8 py-16 pb-8">
            <div className="text-[24px] text-[#E8590C]">
              In Vitro Diagnostics
            </div>
            <div className="grid grid-cols-3">
              {checkboxOptions.map((option) => {
                return (
                  <div className="col-span-1" key={option}>
                    <Form.Item name={option.toLowerCase().replace(" ", "")}>
                      <Checkbox value={false}>{option}</Checkbox>
                    </Form.Item>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Option2;

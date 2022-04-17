import { useState } from "react";

// Import Form Layout
import FormLayout from "~/layouts/forms/adr-reporting";

// Import Ant Design
import { Input, Radio, DatePicker, Form } from "antd";
const { TextArea } = Input;

//Import Images
import { FiHelpCircle } from "react-icons/fi";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page4() {
  const [occupationState, setOccupationState] = useState<string>("");
  const [form] = Form.useForm();
  const radioOptions = [
    { label: "Physician", value: "physician" },
    { label: "Dentist", value: "dentist" },
    { label: "Nurse", value: "nurse" },
    { label: "Pharmacist", value: "pharmacist" },
    { label: "Other", value: "other" },
  ];

  return (
    <FormLayout>
      <Form
        form={form}
        name="Form1Page4"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="pl-4 text-3xl">
            <h2 className="text-[#E8590C]">Reporter Details</h2>
          </div>
          {/* First */}
          <div className="grid grid-cols-2 gap-5 pb-8">
            <Form.Item
              name="name"
              label="Name"
              className="w-full col-span-2"
              rules={[
                {
                  required: true,
                  message: "Date of death is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* Second */}
            <Form.Item name="idNumber" label="ID Number" className="col-span-1">
              <Input />
            </Form.Item>
            <Form.Item name="pin" label="Pin" className="col-span-1">
              <Input />
            </Form.Item>
            {/* Third */}
            <Form.Item
              name="email"
              label="Email ID"
              rules={[
                {
                  required: true,
                  message: "Email ID is required",
                },
              ]}
              className="col-span-1"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="telephoneNumber"
              label="Telephone Number"
              rules={[
                {
                  required: true,
                  message: "Telephone is required",
                },
              ]}
              className="col-span-1"
            >
              <Input />
            </Form.Item>
          </div>
          {/* Fourth */}
          <Form.Item
            label="Prof. Address"
            name="profAddress"
            className="w-full"
          >
            <TextArea rows={2} />
          </Form.Item>
          {/* Fifth */}
          <Form.Item name="occupation" label="Occupation" className="pt-4">
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions}
              optionType="button"
              onChange={() =>
                setOccupationState(form.getFieldValue("occupation"))
              }
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="other"
            label="Mention the occupation"
            hidden={occupationState !== "other"}
          >
            <Input
              suffix={<FiHelpCircle />}
              disabled={occupationState !== "other"}
            />
          </Form.Item>
          <div className="grid grid-cols-2 gap-5 pt-4">
            {/* Sixth */}

            <Form.Item name="department" label="Department">
              <Input />
            </Form.Item>
            {/* Seventh */}
            <Form.Item label="Date of this report" name="dateOfReport">
              <DatePicker className="w-full" />
            </Form.Item>
          </div>
          {/* Eighth */}
          <Form.Item label="References" name="references" className="pt-4">
            <TextArea rows={2} />
          </Form.Item>
        </div>
        {/* Ninth */}
        <div className="mt-6 shadow-xl rounded-md w-full p-10 border">
          <Form.Item label="Reporter's Comment" name="reportersComment">
            <TextArea rows={2} />
          </Form.Item>
        </div>
        <NavigationPanel currentRoute="4" />
      </Form>
    </FormLayout>
  );
}

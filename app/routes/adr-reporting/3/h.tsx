// importing layout
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Input, DatePicker, Form } from "antd";

export default function Form1page3h() {
  return (
    <FormLayout>
      <Form
        name="Form1Page3h"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div>
            <div className="text-[24px] text-[#E8590C]">
              <p className="my-0 py-0">Concomitant medical product</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Including self-medication and herbal remedies with therapy dates
              </p>
            </div>
            <Subform />
          </div>
        </div>
        <NavigationPanel currentRoute="3h" />
      </Form>
    </FormLayout>
  );
}

const Subform = () => (
  <div>
    <Form.Item
      className="min-w-full pt-4"
      label="Name (brand/generic)"
      name="name"
      rules={[{ required: true, message: "Drug name is mandatory" }]}
    >
      <Input />
    </Form.Item>
    <div className="grid grid-cols-2 gap-5 pt-4">
      <Form.Item className="col-span-1" label="Dose used" name="doseUsage">
        <Input />
      </Form.Item>
      <Form.Item className="col-span-1" label="Route used" name="routeUsed">
        <Input />
      </Form.Item>
    </div>
    <Form.Item
      className="mt-4 w-full"
      label="Frequency (OD, BD)"
      name="frequency"
    >
      <Input />
    </Form.Item>
    <div className="grid grid-cols-2 gap-5 pt-4">
      <Form.Item
        className="col-span-1"
        label="Date started"
        name="startDate"
        rules={[{ required: true, message: "Start date is mandatory" }]}
      >
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item className="col-span-1" label="Date stopped" name="stopDate">
        <DatePicker className="w-full" />
      </Form.Item>
    </div>
    <Form.Item className="mt-4 w-full" label="Indication" name="indication">
      <Input />
    </Form.Item>
    <div className="flex flex-row justify-between w-100 pt-5">
      <button
        className="bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
        type="button"
      >
        Save
      </button>
      <button
        type="button"
        className="bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
      >
        Add more
      </button>
    </div>
  </div>
);

import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import { Input, Form, DatePicker } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page3() {
  const onFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          <h2 className="text-[#E8590C]">Medication</h2>
        </div>
        <form onSubmit={onFormSubmit}>
          <Subform />
        </form>
      </div>
      <NavigationPanel currentRoute="3" />
    </FormLayout>
  );
}

function Subform() {
  return (
    <Form
      name="Form1Page3"
      initialValues={{ remember: true }}
      onFinish={(values) => console.log(values)}
      layout="vertical"
    >
      <Form.Item
        className="w-full"
        label="Name (Brand/Generic)"
        name="nameOfDrug"
        rules={[{ required: true, message: "Drug name is mandatory" }]}
      >
        <Input required={true} />
      </Form.Item>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item name="manufacturer" label="Manufacturer" className="w-full">
          <Input />
        </Form.Item>
        <Form.Item
          label="Batch No. / Lot No."
          name="BatchNo_LotNo"
          className="w-full"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Form.Item name="expDate" label="Exp. Date" className="w-full">
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item name="doseUsed" label="Dose used" className="w-full">
          <Input type={"number"} suffix="kgs" />
        </Form.Item>
        <Form.Item name="routeUsed" label="Route used" className="w-full">
          <Input />
        </Form.Item>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item name="ip_op" label="IP_OP" className="w-full">
          <Input />
        </Form.Item>
        <Form.Item name="unit" label="Unit" className="w-full">
          <Input />
        </Form.Item>
      </div>
      <Form.Item
        name="frequency"
        label="Frequency (OD, BD, etc.)"
        className="w-full"
      >
        <Input />
      </Form.Item>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item name="dateStarted" label="Date started" className="w-full">
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item name="dateStopped" label="Date stopped" className="w-full">
          <DatePicker className="w-full" />
        </Form.Item>
      </div>
      <Form.Item name="Indication" label="Indication" className="w-full">
        <Input />
      </Form.Item>
      <div className="flex flex-row justify-between w-100">
        <button className="bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]">
          Save
        </button>
        <button
          type="submit"
          className="bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
        >
          Add more
        </button>
      </div>
    </Form>
  );
}

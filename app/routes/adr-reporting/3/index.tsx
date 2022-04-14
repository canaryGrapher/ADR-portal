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
      <div className="flex flex-col pb-5">
        <InputDescription
          isRequired={true}
          description="Name (Brand/Generic)"
        />
        <Input required={true} />
      </div>
      <div className="grid grid-cols-2 gap-5 pb-5">
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="Manufacturer" />
          <Input />
        </div>
        <div className="flex flex-col">
          <InputDescription
            isRequired={false}
            description="Batch No./ Lot No."
          />
          <Input />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 pb-5">
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="Exp. Date" />
          <DatePicker className="w-full" />
        </div>
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="Dose used" />
          <Input type={"number"} suffix="kgs" />
        </div>
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="Route used" />
          <Input />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 pb-5">
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="IP/OP" />
          <Input />
        </div>
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="Unit" />
          <Input />
        </div>
      </div>
      <div className="flex flex-col pb-5">
        <InputDescription
          isRequired={false}
          description="Frequency (OD, BD, etc.)"
        />
        <Input />
      </div>
      <div className="grid grid-cols-2 gap-5 pb-5">
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="Date started" />
          <DatePicker className="w-full" />
        </div>
        <div className="flex flex-col">
          <InputDescription isRequired={false} description="Date stopped" />
          <DatePicker className="w-full" />
        </div>
      </div>
      <div className="flex flex-col pb-5">
        <InputDescription isRequired={false} description="Indication" />
        <Input />
      </div>
      <NavigationPanel currentRoute="3" />
    </Form>
  );
}

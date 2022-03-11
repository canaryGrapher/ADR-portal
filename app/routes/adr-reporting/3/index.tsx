import FormLayout from "~/layouts/forms";

//importing components
import { Input, Form, DatePicker } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page3() {
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="pl-4 text-3xl">
          {/* Change the name of the form based on the form */}
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
    <Form>
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
          <InputDescription isRequired={true} description="Dose used" />
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
          <InputDescription isRequired={true} description="Date started" />
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

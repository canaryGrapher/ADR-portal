import RadioOptions from "~/components/forms/suspectedADRRadioMenu";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";

import { DatePicker, Input, Form } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form2page3() {
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <FormLayout>
      <div className="flex w-full flex-col">
        <RadioOptions />
      </div>
      <div className="shadow-xl rounded-md w-full p-10 border mt-4">
        <div className="text-3xl">
          {/* Change the name of the form based on the form */}
          <h2 className="text-[#E8590C]">Medication</h2>
        </div>
        <SubForm />
      </div>
      <NavigationPanel currentRoute="3" />
    </FormLayout>
  );
}
const SubForm = () => (
  <Form>
    <div className="min-w-full pt-4">
      <InputDescription isRequired={true} description="Name (Brand/Generic)" />
      <Input />
    </div>
    <div className="grid grid-cols-2 gap-5 pt-5">
      <div>
        <InputDescription isRequired={false} description="Manufacturer" />
        <Input />
      </div>
      <div>
        <InputDescription isRequired={false} description="Batch No./ Lot No." />
        <Input />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-5 pt-5">
      <div>
        <InputDescription isRequired={false} description="Expiry Date" />
        <DatePicker className="w-full" />
      </div>
      <div>
        <InputDescription isRequired={true} description="Dose Used" />
        <Input suffix="kgs" />
      </div>
      <div>
        <InputDescription isRequired={false} description="Route Used" />
        <Input />
      </div>
    </div>
    <div className="min-w-full pt-5">
      <InputDescription
        isRequired={true}
        description="Frequency (OD, BD, etc)"
      />
      <Input />
    </div>
    <div className="grid grid-cols-2 gap-5 pt-5">
      <div>
        <InputDescription isRequired={true} description="Date Started" />
        <DatePicker className="w-full" />
      </div>
      <div>
        <InputDescription isRequired={false} description="Date Stopped" />
        <DatePicker className="w-full" />
      </div>
    </div>
    <div className="min-w-full pt-5">
      <InputDescription isRequired={false} description="Indication" />
      <Input />
    </div>
    <div className="min-w-full pt-5">
      <InputDescription isRequired={false} description="Casualty Assessment" />
      <Input />
    </div>
    <div className="flex flex-row justify-between w-100 pt-5">
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

import InputDescription from "~/components/forms/inputDescription";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Input, DatePicker, Form } from "antd";

export default function Form1page3d() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-[24px] text-[#E8590C]">
          Concomitant medical product including self-medication and herbal
          remedies with therapy dates
        </div>
        <FormGroup />
      </div>

      <NavigationPanel currentRoute="3d" />
    </FormLayout>
  );
}

const FormGroup = () => {
  return (
    <Form>
      <div className="pt-4">
        <div className="mt-4 w-full">
          <InputDescription
            isRequired={true}
            description="Name( Brand/Generic)"
          />
          <Input />
        </div>
        <div className="grid grid-cols-2 gap-5 pt-4">
          <div className="col-span-1">
            <InputDescription isRequired={false} description="Dose Used" />
            <Input />
          </div>
          <div className="col-span-1">
            <InputDescription isRequired={false} description="Route Used" />
            <Input />
          </div>
        </div>
        <div className="grid grid-cols-1 pt-4">
          <div className="w-full">
            <InputDescription
              isRequired={false}
              description="Frequency (OD, BD etc.)"
            />
            <Input />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 pt-5">
          <div className="col-span-1">
            <InputDescription isRequired={true} description="Date started" />
            <DatePicker className="w-full" />
          </div>
          <div className="col-span-1">
            <InputDescription isRequired={false} description="Date stopped" />
            <DatePicker className="w-full" />
          </div>
        </div>
        <div className="mt-4 w-full">
          <InputDescription isRequired={false} description="Indication" />
          <Input />
        </div>
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
};

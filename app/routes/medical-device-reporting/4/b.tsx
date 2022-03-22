import FormLayout from "~/layouts/forms/adr-reporting";
import { Input, DatePicker, Form, Select, Checkbox } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

const { TextArea } = Input;

export default function Form3page4b() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          {/* Change the name of the form based on the form */}
          <h2 className="text-[#E8590C]">Importer Details</h2>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 pt-4">
            <div className="flex flex-col col-span-1">
              <InputDescription isRequired={true} description="Name" />
              <Input placeholder="" />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="License Number"
              />
              <Input placeholder="" />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <InputDescription isRequired={true} description="Address" />
            <TextArea rows={3} placeholder="" />
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="4b" />
    </FormLayout>
  );
}

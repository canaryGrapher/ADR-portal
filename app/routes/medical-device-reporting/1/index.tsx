//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import { Input, DatePicker, Form, Select, Checkbox, Radio } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form3page1() {
  const radioOptions = ["Initial", "Follow-up", "Final", "Trend"];
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          {/* Change the name of the form based on the form */}
          <h2 className="text-[#E8590C]">Primary Information</h2>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 pt-4">
            <div className="flex flex-col col-span-1">
              <InputDescription
                description={"Reporter Reference Number"}
                isRequired={true}
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                description={"Date of report"}
                isRequired={true}
              />
              <DatePicker />
            </div>
          </div>
          <div className="grid grid-cols-1 pt-4">
            <InputDescription
              description={"Type of report"}
              isRequired={true}
            />
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions}
              defaultValue={radioOptions[0]}
              optionType="button"
            />
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="1" />
    </FormLayout>
  );
}

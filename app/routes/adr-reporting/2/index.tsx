// Import Form Layout
import FormLayout from "~/layouts/forms/adr-reporting";

// Import components
import { Input, DatePicker, Button } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
const { TextArea } = Input;

export default function Form1page2() {
  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="pl-4 text-3xl">
          {/* Change the name of the form based on the form */}
          <h2 className="text-[#E8590C]">Suspected Adverse Reaction</h2>
        </div>
        <div className="flex flex-row pt-4">
          <div className="w-1/2 px-4">
            <InputDescription
              isRequired={true}
              description="Date of reaction started"
            />
            <DatePicker className="w-full" />
          </div>
          <div className="w-1/2 pr-4">
            <InputDescription
              isRequired={true}
              description="Date of recovery"
            />
            <DatePicker className="w-full" />
          </div>
        </div>
        <div className="mt-4 w-full px-4">
          <InputDescription
            isRequired={false}
            description="Describe reaction or problem"
          />
          <TextArea rows={4} />
        </div>
      </div>
      <NavigationPanel currentRoute="2" />
    </FormLayout>
  );
}
